import express, { type Request, Response, NextFunction } from "express";
import { WebSocketServer } from "ws";
import { registerRoutes } from "./routes";
import contactRoute from "./routes/contact";
import leadRoute from "./routes/lead";
import { setupVite, serveStatic, log } from "./vite";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
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

(async () => {
  const server = await registerRoutes(app);
  const chatServer = new WebSocketServer({ noServer: true });

  chatServer.on("connection", (socket) => {
    let connectionSessionId = "anonymous";

    socket.send(JSON.stringify({ message: "Connected to Boreal support." }));

    socket.on("message", (incoming) => {
      try {
        const payload = JSON.parse(incoming.toString()) as { type?: string; sessionId?: string; message?: string };
        if (payload.sessionId) {
          connectionSessionId = payload.sessionId;
        }

        if (payload.type === "message" && payload.message) {
          socket.send(JSON.stringify({ message: `Received for session ${connectionSessionId}. A specialist will follow up shortly.` }));
        }
      } catch {
        socket.send(JSON.stringify({ message: "Message received." }));
      }
    });
  });

  server.on("upgrade", (req, socket, head) => {
    if (!req.url?.startsWith("/ws/chat")) {
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
