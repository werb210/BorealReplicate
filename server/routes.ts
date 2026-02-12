import type { Express } from "express";
import { createServer, type Server } from "http";

type ChatMessage = { role: "assistant" | "user"; content: string };
const chatSessions = new Map<string, Array<ChatMessage>>();

function buildAssistantReply(messages: ChatMessage[]) {
  const lastUser = [...messages].reverse().find((message) => message.role === "user")?.content?.toLowerCase() ?? "";

  if (lastUser.includes("apply") || lastUser.includes("application")) {
    return "Start with Apply Now, complete the smart intake, and we'll route your file to matched lenders.";
  }

  if (lastUser.includes("factoring")) {
    return "Factoring can unlock working capital from unpaid invoices. We can help match you with factoring lenders after one intake.";
  }

  if (lastUser.includes("line of credit") || lastUser.includes("loc")) {
    return "A line of credit gives revolving working capital for payroll, inventory, and operating gaps.";
  }

  return "Boreal is a marketplace: apply once, complete smart intake, and compare offers from qualified lenders.";
}

export async function registerRoutes(app: Express): Promise<Server> {
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", uptime: process.uptime(), timestamp: new Date().toISOString() });
  });

  app.get("/api/public/lender-count", (_req, res) => {
    const count = Number(process.env.PUBLIC_LENDER_COUNT || "40");
    res.set("Cache-Control", "public, max-age=300, s-maxage=300");
    res.json({ count: Number.isFinite(count) ? count : 40 });
  });


  app.post("/api/support/event", (req, res) => {
    const { event, source } = req.body as { event?: string; source?: string };
    if (!event) {
      res.status(400).json({ error: "event is required" });
      return;
    }

    console.log("Support Event:", { event, source: source ?? "website", timestamp: new Date().toISOString() });
    res.status(202).json({ ok: true });
  });

  app.post("/api/crm/web-leads", (req, res) => {
    const { companyName, firstName, lastName, email, phone } = req.body as {
      companyName?: string;
      firstName?: string;
      lastName?: string;
      email?: string;
      phone?: string;
    };

    if (!companyName || !firstName || !lastName || !email || !phone) {
      res.status(400).json({ error: "All lead fields are required" });
      return;
    }

    console.log("CRM Web Lead:", { companyName, firstName, lastName, email, phone, channel: "website" });
    console.log("SMS Dispatch:", { to: "+15878881837", message: `New lead from ${companyName} (${firstName} ${lastName})` });
    res.status(202).json({ ok: true });
  });

  app.post("/api/support/live", (req, res) => {
    const { source, sessionId, trigger } = req.body as { source?: string; sessionId?: string; trigger?: string };
    if (!sessionId) {
      res.status(400).json({ error: "sessionId is required" });
      return;
    }

    console.log("Live Support Escalation:", { source: source ?? "website", sessionId, trigger: trigger ?? "manual" });
    res.status(202).json({ ok: true, status: "queued" });
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

  app.post("/api/chat", (req, res) => {
    const message = String(req.body?.message ?? "");
    const reply = buildAssistantReply([{ role: "user", content: message }]);
    res.json({ response: reply });
  });

  app.post("/api/ai/chat", (req, res) => {
    const messages = (req.body?.messages ?? []) as ChatMessage[];
    const reply = buildAssistantReply(messages);
    res.json({ reply });
  });

  app.post("/api/support/report", (req, res) => {
    const { url, userAgent, screenshot, viewport } = req.body as {
      url?: string;
      userAgent?: string;
      screenshot?: string;
      viewport?: { width: number; height: number };
    };

    if (!url || !userAgent || !screenshot) {
      res.status(400).json({ error: "url, userAgent, and screenshot are required" });
      return;
    }

    res.status(202).json({ ok: true, receivedAt: new Date().toISOString(), viewport: viewport ?? null });
  });

  return createServer(app);
}
