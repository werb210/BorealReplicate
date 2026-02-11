import type { Express } from "express";
import { createServer, type Server } from "http";

const chatSessions = new Map<string, Array<{ role: "assistant" | "user"; content: string }>>();

export async function registerRoutes(app: Express): Promise<Server> {
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", uptime: process.uptime(), timestamp: new Date().toISOString() });
  });

  app.post("/api/apply", (req, res) => {
    res.status(202).json({ status: "received", payload: req.body });
  });

  app.post("/api/chat/send", (req, res) => {
    const { message, sessionId } = req.body as { message?: string; sessionId?: string };
    if (!message || !sessionId) {
      res.status(400).json({ error: "message and sessionId are required" });
      return;
    }

    const existingMessages = chatSessions.get(sessionId) ?? [];
    const updatedMessages = [
      ...existingMessages,
      { role: "user" as const, content: message },
      { role: "assistant" as const, content: "Thanks — a Boreal expert will follow up shortly." },
    ];

    chatSessions.set(sessionId, updatedMessages);
    res.status(202).json({ ok: true });
  });

  app.get("/api/chat/receive", (req, res) => {
    const sessionId = req.query.sessionId;
    if (typeof sessionId !== "string") {
      res.status(400).json({ error: "sessionId query param is required" });
      return;
    }

    const messages = chatSessions.get(sessionId) ?? [];
    res.json({ messages });
  });

  return createServer(app);
}
