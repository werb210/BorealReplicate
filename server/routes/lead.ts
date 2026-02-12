import { Router } from "express";

type LeadPayload = {
  revenue?: number | string;
  industry?: string;
  years?: number | string;
  amount?: number | string;
  email?: string;
  phone?: string;
  utm?: Record<string, string | null>;
};

const router = Router();

router.post("/", async (req, res) => {
  const { revenue, industry, years, amount, email, phone, utm } = req.body as LeadPayload;

  if (!email || !phone) {
    return res.status(400).json({ error: "Email & phone required" });
  }

  const revenueValue = Number(revenue) || 0;
  const yearsValue = Number(years) || 0;
  const score = Math.min(100, Math.round(revenueValue / 10000 + yearsValue * 10));

  console.log("Capital Readiness Lead:", {
    revenue,
    industry,
    years,
    amount,
    email,
    phone,
    score,
    utm,
    source: "capital_score",
    createdAt: new Date().toISOString(),
  });

  return res.json({ success: true, score });
});

export default router;
