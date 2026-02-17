import crypto from "node:crypto";
import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { calculateReadinessScore, tierFromScore } from "./scoring";
import { storage } from "./storage";
import { capitalReadinessIntakeSchema, creditReadinessSchema, leadIngestionSchema } from "./validation";

function recommendedProductsForTier(tier: "green" | "yellow" | "red") {
  if (tier === "green") return ["Term Loan", "Equipment Financing", "Line of Credit"];
  if (tier === "yellow") return ["Line of Credit", "Factoring", "Purchase Order Financing"];
  return ["Factoring", "Line of Credit"];
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

  const handleReadinessSubmit = async (req: Request, res: Response) => {
    try {
      const normalizedPayload = {
        ...(req.body as Record<string, unknown>),
        arBalance: (req.body as Record<string, unknown>).arBalance ?? (req.body as Record<string, unknown>).accountsReceivable,
        collateral: (req.body as Record<string, unknown>).collateral ?? (req.body as Record<string, unknown>).availableCollateral,
      };

      const parsed = creditReadinessSchema.safeParse(normalizedPayload);
      if (!parsed.success) {
        return res.status(400).json({ error: "Invalid request payload" });
      }

      const { companyName, fullName, phone, email, industry, yearsInBusiness, monthlyRevenue, annualRevenue, arBalance, collateral } = parsed.data;

      const existingLead = await storage.findCapitalReadinessLeadByContact(email, phone);
      if (existingLead) {
        res.status(200).json({
          leadId: existingLead.id,
          sessionId: existingLead.sessionToken,
          sessionToken: existingLead.sessionToken,
          score: existingLead.score,
          tier: existingLead.tier,
          deduped: true,
        });
        return;
      }

      const score = calculateReadinessScore({
        yearsInBusiness,
        annualRevenue,
        monthlyRevenue,
        arBalance,
        collateral,
      });
      const tier = tierFromScore(score);

      const lead = await storage.createCapitalReadinessLead({
        name: fullName,
        email,
        phone,
        industry,
        revenue: annualRevenue,
        yearsInBusiness,
        existingDebt: "unknown",
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
          arBalance,
          collateral,
        });
      }

      res.status(201).json({
        leadId: lead.id,
        sessionId: lead.sessionToken,
        sessionToken: lead.sessionToken,
        score: lead.score,
        tier: lead.tier,
        deduped: false,
      });
    } catch (error) {
      res.status(500).json({ error: error instanceof Error ? error.message : "Readiness submission failed" });
    }
  };

  app.post("/api/public/readiness", handleReadinessSubmit);
  app.post("/api/readiness/submit", handleReadinessSubmit);

  app.post("/api/capital-readiness", async (req, res) => {
    try {
      const parsed = capitalReadinessIntakeSchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({ error: "Invalid request payload" });
      }

      const { name, email, phone, industry, revenue, yearsInBusiness } = parsed.data;

      const score = calculateReadinessScore({
        yearsInBusiness: yearsInBusiness === "0" ? "Zero" : yearsInBusiness,
        annualRevenue: revenue,
        monthlyRevenue: "Under $10,000",
        arBalance: "No Account Receivables",
        collateral: "No Collateral Available",
      });
      const tier = tierFromScore(score);
      const recommendedProducts = recommendedProductsForTier(tier);

      const lead = await storage.createCapitalReadinessLead({
        name,
        email,
        phone,
        industry,
        revenue,
        yearsInBusiness,
        existingDebt: "unknown",
        score,
        tier,
        tag: "capital_readiness",
      });

      res.status(201).json({ score, tier, recommendedProducts, leadId: lead.id });
    } catch (error) {
      res.status(500).json({ error: error instanceof Error ? error.message : "Capital readiness failed" });
    }
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

  app.post("/api/crm/web-leads", async (req, res) => {
    try {
      const parsed = leadIngestionSchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({ error: "Invalid request payload" });
      }

      const { companyName, firstName, lastName, email, phone } = parsed.data;
      const { deduped } = await storage.createOrGetWebLead({ companyName, firstName, lastName, email, phone });

      if (process.env.NODE_ENV !== "production" && !deduped) {
        console.log("CRM Web Lead:", { companyName, firstName, lastName, email, phone, channel: "website" });
        console.log("SMS Dispatch:", { to: "+15878881837", message: `New lead from ${companyName} (${firstName} ${lastName})` });
      }
      res.status(202).json({ ok: true, deduped });
    } catch (error) {
      res.status(500).json({ error: error instanceof Error ? error.message : "Lead submission failed" });
    }
  });

  app.post("/api/apply", (_req, res) => {
    const requestId = crypto.randomUUID();

    res.status(202).json({
      status: "received",
      requestId,
    });
  });

  return createServer(app);
}
