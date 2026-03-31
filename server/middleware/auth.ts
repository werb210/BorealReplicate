import crypto from "node:crypto";
import type { NextFunction, Request, Response } from "express";

function decodeBase64Url(value: string) {
  const normalized = value.replace(/-/g, "+").replace(/_/g, "/");
  const padding = "=".repeat((4 - (normalized.length % 4)) % 4);
  return Buffer.from(`${normalized}${padding}`, "base64").toString("utf8");
}

function verifyHs256Jwt(token: string, secret: string): Record<string, unknown> {
  const segments = token.split(".");
  if (segments.length !== 3) {
    throw new Error("INVALID_TOKEN");
  }

  const [encodedHeader, encodedPayload, encodedSignature] = segments;
  const header = JSON.parse(decodeBase64Url(encodedHeader)) as { alg?: string; typ?: string };

  if (header.alg !== "HS256") {
    throw new Error("INVALID_TOKEN");
  }

  const expected = crypto
    .createHmac("sha256", secret)
    .update(`${encodedHeader}.${encodedPayload}`)
    .digest("base64url");

  if (expected !== encodedSignature) {
    throw new Error("INVALID_TOKEN");
  }

  const payload = JSON.parse(decodeBase64Url(encodedPayload)) as Record<string, unknown>;
  const now = Math.floor(Date.now() / 1000);
  if (typeof payload.exp === "number" && payload.exp < now) {
    throw new Error("INVALID_TOKEN");
  }

  return payload;
}

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    return res.status(500).json({ error: "SERVER_MISCONFIG" });
  }

  const header = req.headers.authorization;
  if (!header) {
    return res.status(401).json({ error: "UNAUTHORIZED" });
  }

  const [scheme, token] = header.trim().split(/\s+/, 2);
  if (scheme !== "Bearer") {
    return res.status(401).json({ error: "UNAUTHORIZED" });
  }

  if (!token || token === "undefined" || token === "null") {
    return res.status(401).json({ error: "INVALID_TOKEN" });
  }

  try {
    const decoded = verifyHs256Jwt(token, secret);
    if (typeof decoded.id === "string") {
      req.user = { id: decoded.id };
    }
    return next();
  } catch {
    return res.status(401).json({ error: "INVALID_TOKEN" });
  }
}
