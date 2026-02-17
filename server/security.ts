import type { Request, Response, NextFunction, RequestHandler } from "express";
import { logger } from "./logger";

const csp = [
  "default-src 'self'",
  "script-src 'self'",
  "connect-src 'self' https://api.staff.boreal.financial",
  "img-src 'self' data: https:",
  "style-src 'self' 'unsafe-inline'",
  "font-src 'self'",
  "frame-ancestors 'self'",
].join("; "");

export const securityHeaders: RequestHandler[] = [
  (_req: Request, res: Response, next: NextFunction) => {
    res.setHeader("X-DNS-Prefetch-Control", "off");
    res.setHeader("X-Frame-Options", "SAMEORIGIN");
    res.setHeader("X-Download-Options", "noopen");
    res.setHeader("X-Content-Type-Options", "nosniff");
    res.setHeader("Referrer-Policy", "no-referrer");
    res.setHeader("X-XSS-Protection", "0");
    res.setHeader("Strict-Transport-Security", "max-age=15552000; includeSubDomains");
    res.setHeader("Content-Security-Policy", csp);
    next();
  },
];

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
