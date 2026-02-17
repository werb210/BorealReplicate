import express, { type Request, Response, NextFunction } from "express";
import { WebSocketServer } from "ws";
import { registerRoutes } from "./routes";
import contactRoute from "./routes/contact";
import leadRoute from "./routes/lead";
import { createRateLimiter, securityHeaders } from "./security";
import { setupVite, serveStatic, log } from "./vite";

const app = express();
app.use(securityHeaders);
app.use(createRateLimiter({
  windowMs: 15 * 60 * 1000,
  max: 200,
}));
app.use(express.json({ limit: "200kb" }));
app.use(express.urlencoded({ extended: false, limit: "200kb" }));
app.use("/api/contact", contactRoute);
app.use("/api/lead", leadRoute);

process.on("unhandledRejection", (reason) => {
  log(`Unhandled rejection: ${reason}`);
});

process.on("uncaughtException", (error) => {
  log(`Uncaught exception: ${error.message}`);
  if (error.stack) {
    log(error.stack);
  }
});

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

const websocketWindowMs = 60 * 1000;
const websocketMaxUpgradesPerWindow = 30;
const websocketUpgradeStore = new Map<string, { count: number; resetAt: number }>();
const allowedOrigins = (process.env.ALLOWED_WS_ORIGINS ?? "https://borealfinancial.com,http://localhost:8080,http://localhost:5173")
  .split(",")
  .map((origin) => origin.trim())
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

  if (current.count >= websocketMaxUpgradesPerWindow) {
    return true;
  }

  current.count += 1;
  return false;
}

(async () => {
  const server = await registerRoutes(app);
  const chatServer = new WebSocketServer({ noServer: true });

  chatServer.on("connection", (socket) => {
    let connectionSessionId = "anonymous";

    socket.send(JSON.stringify({ message: "Connected to Boreal support." }));

    socket.on("message", (incoming, isBinary) => {
      if (isBinary) {
        socket.close(1003, "Binary messages are not supported");
        return;
      }

      const rawMessage = incoming.toString();
      if (Buffer.byteLength(rawMessage, "utf8") > 4096) {
        socket.close(1009, "Message too large");
        return;
      }

      let payload: { type?: string; sessionId?: string; message?: string };
      try {
        payload = JSON.parse(rawMessage) as { type?: string; sessionId?: string; message?: string };
      } catch {
        socket.close(1003, "Malformed JSON payload");
        return;
      }

      if (payload.sessionId) {
        connectionSessionId = payload.sessionId;
      }

      if (payload.type === "staff_joined") {
        socket.send(JSON.stringify({ type: "staff_joined", message: "Transferring you to a specialist…" }));
        return;
      }

      if (payload.type === "message" && payload.message) {
        socket.send(JSON.stringify({ message: `Received for session ${connectionSessionId}. A specialist will follow up shortly.` }));
      }
    });
  });

  server.on("upgrade", (req, socket, head) => {
    if (!req.url?.startsWith("/ws/chat")) {
      socket.destroy();
      return;
    }

    const originHeader = req.headers.origin;
    if (!isAllowedOrigin(originHeader)) {
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

    chatServer.handleUpgrade(req, socket, head, (client) => {
      chatServer.emit("connection", client, req);
    });
  });

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    log(message, "error");
    if (err?.stack) {
      log(err.stack, "error");
    }

    res.status(status).json({ message });
  });

  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  const port = parseInt(process.env.PORT || process.env.WEBSITES_PORT || "8080", 10);
  server.listen(
    {
      port,
      host: "0.0.0.0",
      reusePort: true,
    },
    () => {
      log(`serving on port ${port}`);
    },
  );
})();
