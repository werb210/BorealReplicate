import assert from "node:assert/strict";
import crypto from "node:crypto";
import test from "node:test";
import express from "express";
import type { AddressInfo } from "node:net";
import publicRoutes from "../server/routes/public";

function createHs256Jwt(
  payload: Record<string, unknown>,
  secret: string,
  header: Record<string, unknown> = { alg: "HS256", typ: "JWT" },
) {
  const encodedHeader = Buffer.from(JSON.stringify(header)).toString("base64url");
  const encodedPayload = Buffer.from(JSON.stringify(payload)).toString("base64url");
  const signature = crypto
    .createHmac("sha256", secret)
    .update(`${encodedHeader}.${encodedPayload}`)
    .digest("base64url");
  return `${encodedHeader}.${encodedPayload}.${signature}`;
}

async function withServer(
  configure: (app: express.Express, authMiddleware: express.RequestHandler) => void,
  run: (port: number) => Promise<void>,
) {
  process.env.JWT_SECRET = "test-secret";
  const { authMiddleware } = await import("../server/middleware/auth");

  const app = express();
  app.set("trust proxy", true);
  app.use(express.json());
  app.use("/api/public", publicRoutes);
  configure(app, authMiddleware);

  const server = app.listen(0);
  const port = (server.address() as AddressInfo).port;

  try {
    await run(port);
  } finally {
    server.close();
  }
}

test("/api/leads requires bearer token", async () => {
  await withServer(
    (app, authMiddleware) => {
      app.use("/api", authMiddleware);
      app.get("/api/leads", (_req, res) => {
        res.status(200).json({ ok: true });
      });
    },
    async (port) => {
      const response = await fetch(`http://127.0.0.1:${port}/api/leads`);
      assert.equal(response.status, 401);
      assert.deepEqual(await response.json(), { error: "UNAUTHORIZED" });
    },
  );
});

test("/api/leads rejects empty token", async () => {
  await withServer(
    (app, authMiddleware) => {
      app.use("/api", authMiddleware);
      app.get("/api/leads", (_req, res) => res.status(200).json({ ok: true }));
    },
    async (port) => {
      const response = await fetch(`http://127.0.0.1:${port}/api/leads`, {
        headers: { Authorization: "Bearer " },
      });
      assert.equal(response.status, 401);
      assert.deepEqual(await response.json(), { error: "INVALID_TOKEN" });
    },
  );
});

test("/api/leads rejects undefined and null token values", async () => {
  await withServer(
    (app, authMiddleware) => {
      app.use("/api", authMiddleware);
      app.get("/api/leads", (_req, res) => res.status(200).json({ ok: true }));
    },
    async (port) => {
      const undefinedToken = await fetch(`http://127.0.0.1:${port}/api/leads`, {
        headers: { Authorization: "Bearer undefined" },
      });
      assert.equal(undefinedToken.status, 401);
      assert.deepEqual(await undefinedToken.json(), { error: "INVALID_TOKEN" });

      const nullToken = await fetch(`http://127.0.0.1:${port}/api/leads`, {
        headers: { Authorization: "Bearer null" },
      });
      assert.equal(nullToken.status, 401);
      assert.deepEqual(await nullToken.json(), { error: "INVALID_TOKEN" });
    },
  );
});

test("/api/leads rejects malformed and expired JWTs", async () => {
  await withServer(
    (app, authMiddleware) => {
      app.use("/api", authMiddleware);
      app.get("/api/leads", (_req, res) => res.status(200).json({ ok: true }));
    },
    async (port) => {
      const malformed = await fetch(`http://127.0.0.1:${port}/api/leads`, {
        headers: { Authorization: "Bearer malformed" },
      });
      assert.equal(malformed.status, 401);
      assert.deepEqual(await malformed.json(), { error: "INVALID_TOKEN" });

      const expiredToken = createHs256Jwt(
        { id: "user-1", exp: Math.floor(Date.now() / 1000) - 60 },
        "test-secret",
      );
      const expired = await fetch(`http://127.0.0.1:${port}/api/leads`, {
        headers: { Authorization: `Bearer ${expiredToken}` },
      });
      assert.equal(expired.status, 401);
      assert.deepEqual(await expired.json(), { error: "INVALID_TOKEN" });
    },
  );
});

test("/api/public/lead does not require authorization", async () => {
  await withServer(
    (app, authMiddleware) => {
      app.use("/api", authMiddleware);
      app.get("/api/leads", (_req, res) => res.status(200).json({ ok: true }));
    },
    async (port) => {
      const response = await fetch(`http://127.0.0.1:${port}/api/public/lead`, {
        method: "POST",
        headers: { "Content-Type": "application/json", "X-Forwarded-For": "198.51.100.12" },
        body: JSON.stringify({
          email: "public@example.com",
          phone: "5555551111",
          productType: "term-loan",
          businessName: "Public Route Test",
        }),
      });
      assert.notEqual(response.status, 401);
    },
  );
});

test("/api/public/lead rejects wrong method", async () => {
  await withServer(
    (app, authMiddleware) => {
      app.use("/api", authMiddleware);
      app.get("/api/leads", (_req, res) => res.status(200).json({ ok: true }));
    },
    async (port) => {
      const response = await fetch(`http://127.0.0.1:${port}/api/public/lead`);
      assert.equal(response.status, 405);
      assert.deepEqual(await response.json(), { error: "METHOD_NOT_ALLOWED" });
    },
  );
});
