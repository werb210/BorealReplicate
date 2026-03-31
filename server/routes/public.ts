import { Router } from "express";
import { storage } from "../storage";
import { publicLeadIntakeSchema } from "../validation";
import { getTraceId, logger } from "../logger";
import { createRateLimiter } from "../security";

const router = Router();
const publicLeadLimiter = createRateLimiter({ windowMs: 60 * 1000, max: 10 });

router.post("/lead", publicLeadLimiter, async (req, res) => {
  const parsed = publicLeadIntakeSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ error: "INVALID_PAYLOAD" });
  }

  const { email, phone, requestedAmount, productType, businessName } = parsed.data;

  try {
    const result = await storage.createOrGetWebLead({
      companyName: businessName || "Website Lead",
      firstName: "Website",
      lastName: "Lead",
      email,
      phone,
    });

    const leadId = result?.lead?.id;
    if (!leadId) {
      return res.status(500).json({ error: "LEAD_CREATION_FAILED" });
    }

    logger.info({
      msg: "[PUBLIC LEAD]",
      traceId: getTraceId(req),
      email,
      ip: req.ip,
      timestamp: Date.now(),
    });

    logger.info({
      msg: "Public website lead created",
      traceId: getTraceId(req),
      leadId,
      source: "website",
      requestedAmount: requestedAmount ?? null,
      productType: productType ?? null,
    });

    return res.json({ leadId });
  } catch (error) {
    logger.error({
      msg: "Public lead intake failed",
      traceId: getTraceId(req),
      error: error instanceof Error ? error.message : String(error),
    });
    return res.status(500).json({ error: "LEAD_CREATION_FAILED" });
  }
});

router.all("/lead", (_req, res) => {
  return res.status(405).json({ error: "METHOD_NOT_ALLOWED" });
});

export default router;
