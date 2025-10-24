import express, { type Request, type Response, type NextFunction } from "express";
import { randomUUID, randomBytes } from "node:crypto";
import { registerRoutes, type RouteOptions } from "./routes";
import { setupVite, serveStatic } from "./vite";
import { logger } from "./logger";
import { gzipSync, deflateSync } from "node:zlib";
import { existsSync, mkdirSync } from "node:fs";
import path from "node:path";
import type { Socket } from "node:net";
import { AppError, toAppError } from "./errors";
import { observeRequest } from "./metrics";

const app = express();
const env = process.env.NODE_ENV ?? "production";
const isProduction = env === "production";
const httpLogger = logger.child({ scope: "http" });
const allowedOrigins = (process.env.ALLOWED_ORIGINS ?? "")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

const RATE_LIMIT_WINDOW_MS = Number.parseInt(process.env.RATE_LIMIT_WINDOW_MS ?? "60000", 10);
const RATE_LIMIT_MAX = Number.parseInt(process.env.RATE_LIMIT_MAX ?? "120", 10);
const CSRF_COOKIE_NAME = "csrf_token";
const CSRF_HEADER_NAME = "x-csrf-token";
const CSRF_ALLOW_HEADER_NAME = "X-CSRF-Token";
const CSRF_RESPONSE_HEADER_NAME = "X-CSRF-Token";
const DEFAULT_ALLOW_HEADERS = ["Content-Type", "Authorization", CSRF_ALLOW_HEADER_NAME];
const EXPOSED_HEADERS = [
  CSRF_RESPONSE_HEADER_NAME,
  "X-Request-ID",
  "X-RateLimit-Limit",
  "X-RateLimit-Remaining",
  "X-RateLimit-Reset",
  "Retry-After",
].join(", ");
const SAFE_METHODS = new Set(["GET", "HEAD", "OPTIONS"]);

app.set("env", env);

if (isProduction) {
  app.enable("trust proxy");
}

ensureUploadsDirectory();

process.on("unhandledRejection", (reason) => {
  logger.fatal(reason instanceof Error ? reason : new Error(String(reason)), {
    event: "unhandled rejection",
  });
  process.exit(1);
});

process.on("uncaughtException", (error) => {
  logger.fatal(error, { event: "uncaught exception" });
  process.exit(1);
});

app.use(requestIdMiddleware);
app.use(forceHttpsMiddleware(isProduction));
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: false }));
app.use(securityHeadersMiddleware({ isProduction, allowedOrigins }));
app.use(sanitizeMiddleware);
app.use(corsMiddleware({ allowedOrigins, isProduction }));
app.use(csrfMiddleware({ isProduction }));
app.use(compressionMiddleware());
app.use(requestLoggingMiddleware);

(async () => {
  const apiRateLimiter = createRateLimiter({ windowMs: RATE_LIMIT_WINDOW_MS, max: RATE_LIMIT_MAX });
  const routeOptions: RouteOptions = { apiRateLimiter };
  const server = await registerRoutes(app, routeOptions);

  const connections = new Set<Socket>();
  server.on("connection", (socket) => {
    connections.add(socket);
    socket.on("close", () => connections.delete(socket));
  });

  app.use((err: any, req: Request, res: Response, _next: NextFunction) => {
    const appError = err instanceof AppError ? err : toAppError(err);
    const payload: Record<string, unknown> = {
      status: appError.status,
      code: appError.code,
      message: appError.expose ? appError.message : new AppError(appError.code).message,
      requestId: req.id,
    };

    if (!isProduction && err instanceof Error && err.stack) {
      payload.stack = err.stack;
    }

    if (!res.headersSent) {
      res.status(appError.status).json(payload);
    }

    httpLogger.error(err instanceof Error ? err : new Error(String(err)), {
      path: req.path,
      status: appError.status,
      code: appError.code,
      requestId: req.id,
      event: "request error",
    });
  });

  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  const port = Number.parseInt(process.env.PORT ?? "8080", 10);
  const host = "0.0.0.0";

  server.listen(
    {
      port,
      host,
      reusePort: true,
    },
    () => {
      logger.info("server listening", { port, host });
    },
  );

  const shutdown = (signal: NodeJS.Signals) => {
    logger.warn(`received ${signal}, shutting down`);
    server.close((error) => {
      if (error) {
        logger.error(error, { event: "error closing server" });
        process.exit(1);
        return;
      }

      connections.forEach((socket) => socket.destroy());
      logger.info("server closed gracefully");
      process.exit(0);
    });

    setTimeout(() => {
      connections.forEach((socket) => socket.destroy());
      logger.warn("forced shutdown after timeout");
      process.exit(1);
    }, 5000).unref();
  };

  const signals: NodeJS.Signals[] = ["SIGTERM", "SIGINT"];
  signals.forEach((signal) => {
    process.on(signal, () => shutdown(signal));
  });
})().catch((err) => {
  logger.error(err instanceof Error ? err : new Error(String(err)), {
    event: "failed to start server",
  });
  process.exitCode = 1;
});

function requestIdMiddleware(req: Request, res: Response, next: NextFunction) {
  const requestId = randomUUID();
  req.id = requestId;
  res.setHeader("X-Request-ID", requestId);
  next();
}

function sanitizeValue(value: Sanitizable): Sanitizable {
  if (typeof value === "string") {
    return value.replace(/[<>"'`;\\]/g, "");
  }

  if (Array.isArray(value)) {
    return value.map((item) => sanitizeValue(item as Sanitizable)) as unknown[];
  }

  if (value && typeof value === "object") {
    const entries = Object.entries(value).map(([key, val]) => [key, sanitizeValue(val as Sanitizable)]);
    return Object.fromEntries(entries);
  }

  return value;
}

function sanitizeMiddleware(req: Request, _res: Response, next: NextFunction) {
  if (req.body && typeof req.body === "object") {
    req.body = sanitizeValue(req.body) as Request["body"];
  }

  if (req.query && typeof req.query === "object") {
    req.query = sanitizeValue(req.query) as Request["query"];
  }

  if (req.params && typeof req.params === "object") {
    req.params = sanitizeValue(req.params) as Request["params"];
  }

  next();
}

function securityHeadersMiddleware(options: { isProduction: boolean; allowedOrigins: string[] }) {
  const cspDirectives = [
    "default-src 'self'",
    "script-src 'self'",
    "object-src 'none'",
    "frame-ancestors 'self'",
    "base-uri 'self'",
    "img-src 'self' data:",
    "style-src 'self' 'unsafe-inline'",
    `connect-src 'self' ${options.allowedOrigins.join(' ')}`.trim(),
  ].filter(Boolean);

  return (_req: Request, res: Response, next: NextFunction) => {
    res.setHeader("X-DNS-Prefetch-Control", "off");
    res.setHeader("X-Frame-Options", "SAMEORIGIN");
    res.setHeader("X-Content-Type-Options", "nosniff");
    res.setHeader("Referrer-Policy", "no-referrer");
    res.setHeader("Permissions-Policy", "geolocation=(), microphone=(), camera=()");
    res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
    res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
    res.setHeader("Cross-Origin-Resource-Policy", "same-site");
    res.setHeader("Content-Security-Policy", cspDirectives.join("; "));

    if (options.isProduction) {
      res.setHeader("Strict-Transport-Security", "max-age=15552000; includeSubDomains");
    }

    next();
  };
}

interface CorsOptions {
  allowedOrigins: string[];
  isProduction: boolean;
}

function corsMiddleware(options: CorsOptions) {
  return (req: Request, res: Response, next: NextFunction) => {
    const origin = req.headers.origin as string | undefined;

    if (!origin) {
      return next();
    }

    const isAllowed = !options.isProduction || options.allowedOrigins.includes(origin);

    if (!isAllowed) {
      return next(new AppError("ORIGIN_FORBIDDEN"));
    }

    res.setHeader("Access-Control-Allow-Origin", origin);
    res.setHeader("Vary", "Origin");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET,POST,PUT,PATCH,DELETE,OPTIONS",
    );

    const requestHeaders = req.headers["access-control-request-headers"];
    const allowHeadersMap = new Map<string, string>();
    const addHeader = (header: string) => {
      const trimmed = header.trim();
      if (!trimmed) {
        return;
      }

      const key = trimmed.toLowerCase();
      if (!allowHeadersMap.has(key)) {
        allowHeadersMap.set(key, trimmed);
      }
    };

    if (typeof requestHeaders === "string" && requestHeaders.trim().length > 0) {
      requestHeaders.split(",").forEach(addHeader);
    } else if (Array.isArray(requestHeaders)) {
      requestHeaders
        .filter((value) => typeof value === "string")
        .forEach((value) => {
          value.split(",").forEach(addHeader);
        });
    }

    DEFAULT_ALLOW_HEADERS.forEach(addHeader);

    res.setHeader("Access-Control-Allow-Headers", Array.from(allowHeadersMap.values()).join(", "));
    res.setHeader("Access-Control-Expose-Headers", EXPOSED_HEADERS);

    if (req.method === "OPTIONS") {
      res.status(204).end();
      return;
    }

    next();
  };
}

function compressionMiddleware() {
  return (_req: Request, res: Response, next: NextFunction) => {
    const acceptEncoding = ((_req.headers["accept-encoding"] as string) ?? "").toLowerCase();

    const encoding: Compression | undefined = acceptEncoding.includes("gzip")
      ? "gzip"
      : acceptEncoding.includes("deflate")
      ? "deflate"
      : undefined;

    if (!encoding) {
      return next();
    }

    const originalSend = res.send.bind(res);

    const patchedSend: typeof res.send = (body?: any) => {
      if (body === undefined || body === null) {
        return originalSend(body);
      }

      let buffer: Buffer;
      if (Buffer.isBuffer(body)) {
        buffer = body;
      } else if (typeof body === "string") {
        buffer = Buffer.from(body);
      } else {
        buffer = Buffer.from(JSON.stringify(body));
      }

      const contentType = res.getHeader("Content-Type");
      if (
        contentType &&
        typeof contentType === "string" &&
        !/(text|json|javascript|svg|xml|font|css)/.test(contentType.toLowerCase())
      ) {
        return originalSend(body);
      }

      let compressed: Buffer;
      try {
        compressed = encoding === "gzip" ? gzipSync(buffer) : deflateSync(buffer);
      } catch (error) {
        httpLogger.warn("compression failed", { message: (error as Error).message });
        return originalSend(body);
      }

      res.setHeader("Content-Encoding", encoding);
      res.setHeader("Content-Length", String(compressed.length));
      return originalSend(compressed);
    };

    res.send = patchedSend;

    next();
  };
}

function csrfMiddleware(options: { isProduction: boolean }) {
  return (req: Request, res: Response, next: NextFunction) => {
    const cookies = parseCookies(req.headers.cookie ?? "");
    let token = cookies[CSRF_COOKIE_NAME];

    if (!token) {
      token = generateCsrfToken();
    }

    const cookie = serializeCookie(CSRF_COOKIE_NAME, token, {
      secure: options.isProduction,
      sameSite: "Lax",
      httpOnly: true,
      maxAge: 60 * 60,
      path: "/",
    });

    appendCookie(res, cookie);
    res.append("Vary", "Cookie");
    res.setHeader(CSRF_RESPONSE_HEADER_NAME, token);

    if (!SAFE_METHODS.has(req.method.toUpperCase())) {
      const headerToken =
        (req.headers[CSRF_HEADER_NAME] as string | undefined) ??
        (req.body?.csrfToken as string | undefined);
      if (!headerToken) {
        return next(new AppError("CSRF_TOKEN_MISSING"));
      }

      if (headerToken !== token) {
        return next(new AppError("CSRF_TOKEN_INVALID"));
      }
    }

    next();
  };
}

function requestLoggingMiddleware(req: Request, res: Response, next: NextFunction) {
  const start = process.hrtime.bigint();
  res.on("finish", () => {
    const durationMs = Number(process.hrtime.bigint() - start) / 1_000_000;
    const route = inferRoute(req, res);
    observeRequest({ method: req.method, route }, res.statusCode, durationMs);
    httpLogger.info("request completed", {
      method: req.method,
      path: req.originalUrl,
      statusCode: res.statusCode,
      durationMs: Number(durationMs.toFixed(2)),
      requestId: req.id,
    });
  });

  next();
}

function inferRoute(req: Request, res: Response) {
  if (typeof res.locals.routeId === "string" && res.locals.routeId.length > 0) {
    return res.locals.routeId;
  }
  const base = req.baseUrl ?? "";
  const route = (req.route?.path as string | undefined) ?? "";
  const full = `${base}${route}`;
  return full || req.originalUrl.split("?")[0];
}

function forceHttpsMiddleware(isProd: boolean) {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!isProd) {
      return next();
    }

    const forwardedProto = req.headers["x-forwarded-proto"] as string | undefined;
    if (!forwardedProto) {
      return next();
    }

    if (forwardedProto.includes("https")) {
      return next();
    }

    if (!req.headers.host) {
      return res.status(400).end();
    }

    const redirectUrl = `https://${req.headers.host}${req.originalUrl}`;
    return res.redirect(301, redirectUrl);
  };
}

function createRateLimiter(options: { windowMs: number; max: number }) {
  const hits = new Map<string, { count: number; resetAt: number }>();
  const cleanupInterval = setInterval(() => {
    const now = Date.now();
    for (const [key, value] of Array.from(hits.entries())) {
      if (value.resetAt <= now) {
        hits.delete(key);
      }
    }
  }, options.windowMs);
  cleanupInterval.unref();

  return (req: Request, res: Response, next: NextFunction) => {
    const key = req.ip ?? req.socket.remoteAddress ?? "global";
    const now = Date.now();
    res.locals.routeId = res.locals.routeId ?? `${req.baseUrl ?? ""}${req.path ?? ""}`;
    const existing = hits.get(key);
    if (existing && existing.resetAt > now) {
      if (existing.count >= options.max) {
        const retryAfter = Math.ceil((existing.resetAt - now) / 1000);
        res.setHeader("Retry-After", retryAfter.toString());
        res.setHeader("X-RateLimit-Limit", options.max.toString());
        res.setHeader("X-RateLimit-Remaining", "0");
        res.setHeader("X-RateLimit-Reset", Math.floor(existing.resetAt / 1000).toString());
        return next(new AppError("RATE_LIMITED"));
      }

      existing.count += 1;
      res.setHeader("X-RateLimit-Limit", options.max.toString());
      res.setHeader("X-RateLimit-Remaining", Math.max(options.max - existing.count, 0).toString());
      res.setHeader("X-RateLimit-Reset", Math.floor(existing.resetAt / 1000).toString());
      return next();
    }

    const resetAt = now + options.windowMs;
    hits.set(key, { count: 1, resetAt });
    res.setHeader("X-RateLimit-Limit", options.max.toString());
    res.setHeader("X-RateLimit-Remaining", (options.max - 1).toString());
    res.setHeader("X-RateLimit-Reset", Math.floor(resetAt / 1000).toString());
    next();
  };
}

function parseCookies(cookieHeader: string) {
  return cookieHeader.split(/; */).reduce<Record<string, string>>((acc, pair) => {
    if (!pair) {
      return acc;
    }
    const index = pair.indexOf("=");
    if (index < 0) {
      return acc;
    }
    const key = decodeURIComponent(pair.slice(0, index));
    const value = decodeURIComponent(pair.slice(index + 1));
    acc[key] = value;
    return acc;
  }, {});
}

function appendCookie(res: Response, cookie: string) {
  const existing = res.getHeader("Set-Cookie");

  if (!existing) {
    res.setHeader("Set-Cookie", cookie);
    return;
  }

  if (Array.isArray(existing)) {
    res.setHeader("Set-Cookie", [...existing, cookie]);
    return;
  }

  res.setHeader("Set-Cookie", [existing.toString(), cookie]);
}

function serializeCookie(
  name: string,
  value: string,
  options: {
    secure: boolean;
    sameSite: "Lax" | "Strict" | "None";
    httpOnly: boolean;
    maxAge: number;
    path: string;
  },
) {
  const parts = [
    `${encodeURIComponent(name)}=${encodeURIComponent(value)}`,
    `Path=${options.path}`,
    `Max-Age=${options.maxAge}`,
    `SameSite=${options.sameSite}`,
  ];

  if (options.secure) {
    parts.push("Secure");
  }

  if (options.httpOnly) {
    parts.push("HttpOnly");
  }

  return parts.join("; ");
}

function generateCsrfToken() {
  return randomBytes(32).toString("hex");
}

function ensureUploadsDirectory() {
  const uploadsDir = path.resolve(process.cwd(), "uploads");
  if (!existsSync(uploadsDir)) {
    mkdirSync(uploadsDir, { recursive: true });
  }
}

type Sanitizable = Record<string, unknown> | unknown[] | string | number | boolean | null | undefined;

type Compression = "gzip" | "deflate";

declare global {
  namespace Express {
    interface Request {
      id: string;
    }
  }
}
