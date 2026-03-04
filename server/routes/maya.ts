import { Router } from "express";

const router = Router();

router.post("/message", (req, res) => {
  const { message } = req.body;

  res.json({
    reply: `You said: ${message}`,
  });
});

router.post("/escalate", (_req, res) => {
  res.json({
    status: "ok",
    message: "Escalation received",
  });
});

export default router;
