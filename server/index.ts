import crypto from "node:crypto";
import path from "path";
import fs from "fs";
import express, { type Request, Response, NextFunction } from "express";
import { WebSocketServer } from "ws";
import { registerRoutes } from "./routes";
import contactRoute from "./routes/contact";
import leadRoute from "./routes/lead";
import { createRateLimiter, securityHeaders } from "./security";
import { setupVite } from "./vite";
import { chatMessageSchema } from "./validation";
import { logger } from "./logger";

const app = express();

app.use(securityHeaders);

app.use((req, _res, next) => {
  req.traceId = crypto.randomUUID();
  next();
});

app.use(
  createRateLimiter({
    windowMs: 15 * 60 * 1000,
    max: 300,
  }),
);

app.use(express.json({ limit: "200kb" }));
app.use(express.urlencoded({ extended: false, limit: "200kb" }));

app.use("/api/contact", contactRoute);
app.use("/api/lead", leadRoute);

process.on("unhandledRejection", (reason) => {
  logger.error({ msg: "Unhandled rejection", reason: String(reason) });
});

process.on("uncaughtException", (error) => {
  logger.error({
    msg: "Uncaught exception",
    error: error.message,
    stack: error.stack,
  });
});

app.use((req, res, next) => {
  const start = Date.now();
  const requestPath = req.path;

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (requestPath.startsWith("/api")) {
      logger.info({
        msg: "API request completed",
        traceId: req.traceId,
        method: req.method,
        path: requestPath,
        statusCode: res.statusCode,
        durationMs: duration,
      });
    }
  });

  next();
});

/* ===========================
   WebSocket Setup
=========================== */

const websocketWindowMs = 60 * 1000;
const websocketMaxUpgradesPerWindow = 30;
const websocketUpgradeStore = new Map<string, { count: number; resetAt: number }>();
const websocketMessageStore = new Map<string, { count: number; resetAt: number }>();
const websocketMaxMessagesPerWindow = 60;

const allowedOrigins = (
  process.env.ALLOWED_WS_ORIGINS ??
  "https://borealfinancial.com,http://localhost:8080,http://localhost:5173"
)
  .split(",")
  .map((o) => o.trim())
  .filter(Boolean);

function isAllowedOrigin(originHeader?: string) {
  if (!originHeader) return false;
  return allowedOrigins.includes(originHeader);
}

function isWebSocketRateLimited(ip: string) {
  const now = Date.now();
  const current = websocketUpgradeStore.get(ip);

  if (!current || current.resetAt <= now) {
    websocketUpgradeStore.set(ip, { count: 1, resetAt: now + websocketWindowMs });
    return false;
  }

  if (current.count >= websocketMaxUpgradesPerWindow) return true;

  current.count += 1;
  return false;
}

function isWebSocketMessageRateLimited(key: string) {
  const now = Date.now();
  const current = websocketMessageStore.get(key);

  if (!current || current.resetAt <= now) {
    websocketMessageStore.set(key, { count: 1, resetAt: now + websocketWindowMs });
    return false;
  }

  if (current.count >= websocketMaxMessagesPerWindow) return true;

  current.count += 1;
  return false;
}

/* ===========================
   Main Boot
=========================== */

(async () => {
  const server = await registerRoutes(app);
  const chatServer = new WebSocketServer({ noServer: true });

  chatServer.on("connection", (socket, req) => {
    const traceId =
      req.headers["x-trace-id"]?.toString() ?? crypto.randomUUID();
    const sourceIp = req.socket.remoteAddress || "unknown";
    let connectionSessionId = "anonymous";

    socket.send(JSON.stringify({ message: "Connected to Boreal support." }));

    socket.on("message", (incoming, isBinary) => {
      if (isBinary) {
        socket.close(1003, "Binary not supported");
        return;
      }

      const raw = incoming.toString();

      if (Buffer.byteLength(raw, "utf8") > 4096) {
        socket.close(1009, "Message too large");
        return;
      }

      let parsedPayload: unknown;

      try {
        parsedPayload = JSON.parse(raw);
      } catch {
        socket.close(1007, "Malformed JSON");
        return;
      }

      if (
        isWebSocketMessageRateLimited(`${sourceIp}:${connectionSessionId}`)
      ) {
        socket.close(1008, "Too many messages");
        return;
      }

      const parsed = chatMessageSchema.safeParse(parsedPayload);
      if (!parsed.success) {
        socket.close(1007, "Invalid format");
        return;
      }

      const payload = parsed.data;

      if (payload.sessionId) {
        connectionSessionId = payload.sessionId;
      }

      if (payload.type === "staff_joined") {
        socket.send(
          JSON.stringify({
            type: "staff_joined",
            message: "Transferring you to a specialist…",
          }),
        );
        return;
      }

      if (payload.type === "message" && payload.message) {
        socket.send(
          JSON.stringify({
            message: `Received for session ${connectionSessionId}. A specialist will follow up shortly.`,
          }),
        );
      }
    });
  });

  server.on("upgrade", (req, socket, head) => {
    if (!req.url?.startsWith("/ws/chat")) {
      socket.destroy();
      return;
    }

    const traceId = crypto.randomUUID();

    if (!isAllowedOrigin(req.headers.origin)) {
      socket.write("HTTP/1.1 403 Forbidden\r\n\r\n");
      socket.destroy();
      return;
    }

    const sourceIp = req.socket.remoteAddress || "unknown";

    if (isWebSocketRateLimited(sourceIp)) {
      socket.write("HTTP/1.1 429 Too Many Requests\r\n\r\n");
      socket.destroy();
      return;
    }

    req.headers["x-trace-id"] = traceId;

    chatServer.handleUpgrade(req, socket, head, (client) => {
      chatServer.emit("connection", client, req);
    });
  });

  /* ===========================
     Error Middleware
  =========================== */

  app.use(
    (err: unknown, req: Request, res: Response, _next: NextFunction) => {
      logger.error({
        msg: "Server error",
        traceId: req.traceId,
        error: err instanceof Error ? err.message : "Unknown",
      });

      res.status(500).json({ error: "Internal server error" });
    },
  );

  /* ===========================
     Production Static Handling
  =========================== */

  const isProduction = process.env.NODE_ENV === "production";

  if (isProduction) {
    // When running from dist/server/index.js,
    // client build is located at dist/public
    const clientBuildDir = path.resolve(__dirname, "../public");

    console.log("Serving static from:", clientBuildDir);

    if (!fs.existsSync(clientBuildDir)) {
      throw new Error(
        `Client build directory missing: ${clientBuildDir}. Run npm run build first.`,
      );
    }

    app.use(express.static(clientBuildDir));

    app.get("*", (req, res, next) => {
      if (req.path.startsWith("/api")) return next();
      res.sendFile(path.join(clientBuildDir, "index.html"));
    });
  } else {
    await setupVite(app, server);
  }

  const port = parseInt(
    process.env.PORT || process.env.WEBSITES_PORT || "8080",
    10,
  );

  server.listen(
    {
      port,
      host: "0.0.0.0",
      reusePort: true,
    },
    () => {
      logger.info({ msg: "Server listening", port });
    },
  );
})();
