import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

function calculateReadinessScore(input: {
  revenue: string;
  yearsInBusiness: string;
  existingDebt: string;
}) {
  let score = 30;
  const revenue = Number(input.revenue.replace(/[^0-9.]/g, "")) || 0;
  const years = Number(input.yearsInBusiness) || 0;

  if (revenue >= 5000000) score += 35;
  else if (revenue >= 1000000) score += 28;
  else if (revenue >= 500000) score += 20;
  else if (revenue >= 250000) score += 14;
  else score += 8;

  if (years >= 8) score += 20;
  else if (years >= 4) score += 14;
  else if (years >= 2) score += 10;
  else score += 5;

  score += input.existingDebt.toLowerCase() === "no" ? 15 : 8;
  return Math.min(100, score);
}

function getTier(score: number): "Growth Ready" | "Near Ready" | "Foundation Stage" {
  if (score >= 80) return "Growth Ready";
  if (score >= 60) return "Near Ready";
  return "Foundation Stage";
}

function recommendedProductsForTier(tier: ReturnType<typeof getTier>) {
  if (tier === "Growth Ready") return ["Term Loan", "Equipment Financing", "Line of Credit"];
  if (tier === "Near Ready") return ["Line of Credit", "Invoice Factoring", "Purchase Order Financing"];
  return ["Invoice Factoring", "Line of Credit"];
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



  app.post("/api/public/readiness", async (req, res) => {
    const {
      companyName,
      fullName,
      phone,
      email,
      industry,
      yearsInBusiness,
      monthlyRevenue,
      annualRevenue,
      arOutstanding,
      existingDebt,
    } = req.body as Record<string, string>;

    if (!companyName || !fullName || !phone || !email || !industry || !yearsInBusiness || !monthlyRevenue || !annualRevenue || !arOutstanding || !existingDebt) {
      res.status(400).json({ error: "All readiness fields are required" });
      return;
    }

    const score = calculateReadinessScore({ revenue: annualRevenue, yearsInBusiness, existingDebt });
    const tier = getTier(score);

    const lead = await storage.createCapitalReadinessLead({
      name: fullName,
      email,
      phone,
      industry,
      revenue: annualRevenue,
      yearsInBusiness,
      existingDebt,
      score,
      tier,
      tag: "capital_readiness",
    });

    if (process.env.NODE_ENV !== "production") {
      console.log("Public Readiness Lead:", {
        leadId: lead.id,
        companyName,
        fullName,
        phone,
        email,
        industry,
        yearsInBusiness,
        monthlyRevenue,
        annualRevenue,
        arOutstanding,
        existingDebt,
      });
    }

    res.status(201).json({ leadId: lead.id });
  });
  app.post("/api/capital-readiness", async (req, res) => {
    const { name, email, phone, industry, revenue, yearsInBusiness, existingDebt } = req.body as Record<string, string>;

    if (!name || !email || !phone || !industry || !revenue || !yearsInBusiness || !existingDebt) {
      res.status(400).json({ error: "All intake fields are required" });
      return;
    }

    const score = calculateReadinessScore({ revenue, yearsInBusiness, existingDebt });
    const tier = getTier(score);
    const recommendedProducts = recommendedProductsForTier(tier);

    const lead = await storage.createCapitalReadinessLead({
      name,
      email,
      phone,
      industry,
      revenue,
      yearsInBusiness,
      existingDebt,
      score,
      tier,
      tag: "capital_readiness",
    });

    if (process.env.NODE_ENV !== "production") {
      console.log("CRM Lead Created:", {
        leadId: lead.id,
        name,
        email,
        phone,
        industry,
        score,
        tier,
        tag: "capital_readiness",
      });
    }

    res.status(201).json({ score, tier, recommendedProducts, leadId: lead.id });
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
