import { Router } from "express";
import { calculateReadinessScore, tierFromScore } from "../scoring";
import { publicLeadScoreSchema } from "../validation";

const router = Router();

router.post("/", async (req, res) => {
  const parsed = publicLeadScoreSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ error: "Invalid request payload" });
  }

  const { revenue, industry, years, amount, email, phone, utm } = parsed.data;

  const score = calculateReadinessScore({
    yearsInBusiness: Number(years) >= 3 ? "Over 3 Years" : Number(years) >= 1 ? "1 to 3 Years" : "Under 1 Year",
    annualRevenue: Number(revenue) > 3_000_000 ? "Over $3,000,000" : Number(revenue) > 500_000 ? "$500,001 to $1,000,000" : "Zero to $150,000",
    monthlyRevenue: Number(revenue) / 12 > 100_000 ? "Over $100,000" : "$10,001 to $30,000",
    arBalance: "No Account Receivables",
    collateral: "No Collateral Available",
  });

  if (process.env.NODE_ENV !== "production") {
    console.log("Capital Readiness Lead:", {
      revenue,
      industry,
      years,
      amount,
      email,
      phone,
      score,
      tier: tierFromScore(score),
      utm,
      source: "capital_score",
      createdAt: new Date().toISOString(),
    });
  }

  return res.json({ success: true, score, tier: tierFromScore(score) });
});

export default router;
