import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

function resolveApiUrl() {
  if (process.env.VITE_API_URL) {
    return process.env.VITE_API_URL;
  }

  if (!fs.existsSync(".env")) {
    return undefined;
  }

  const envFile = fs.readFileSync(".env", "utf8");
  const match = envFile.match(/^VITE_API_URL=(.+)$/m);
  return match?.[1]?.trim();
}

test("website must reach server", async () => {
  const apiUrl = resolveApiUrl();
  assert.ok(apiUrl, "VITE_API_URL must be set for integration test");

  const res = await fetch(`${apiUrl}/health`);
  assert.equal(res.status, 200);
});
