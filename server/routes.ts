import type { Express } from "express";
import { createServer, type Server } from "http";

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

    if (process.env.NODE_ENV !== "production") {
      console.log("Support Event:", { event, source: source ?? "website", timestamp: new Date().toISOString() });
    }
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

    if (process.env.NODE_ENV !== "production") {
      console.log("CRM Web Lead:", { companyName, firstName, lastName, email, phone, channel: "website" });
      console.log("SMS Dispatch:", { to: "+15878881837", message: `New lead from ${companyName} (${firstName} ${lastName})` });
    }
    res.status(202).json({ ok: true });
  });

  app.post("/api/apply", (req, res) => {
    res.status(202).json({ status: "received", payload: req.body });
  });

  return createServer(app);
}
