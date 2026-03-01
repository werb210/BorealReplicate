import type { NextFunction, Request, Response } from "express";
import { logger } from "./logger";

export function createRateLimiter({ windowMs, max }: { windowMs: number; max: number }) {
  const store = new Map<string, { count: number; resetAt: number }>();

  return (req: Request, res: Response, next: NextFunction) => {
    const key = req.ip || req.socket.remoteAddress || "unknown";
    const now = Date.now();
    const current = store.get(key);

    if (!current || current.resetAt <= now) {
      store.set(key, { count: 1, resetAt: now + windowMs });
      return next();
    }

    if (current.count >= max) {
      logger.warn({ msg: "Rate limit exceeded", ip: req.ip, path: req.path, traceId: req.traceId });
      res.status(429).json({ error: "Too many requests" });
      return;
    }

    current.count += 1;
    next();
  };
}
