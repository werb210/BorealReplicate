import assert from "node:assert/strict";
import test from "node:test";
import { spawn } from "node:child_process";
import { WebSocket } from "ws";

function waitForServerReady(proc: ReturnType<typeof spawn>) {
  return new Promise<void>((resolve, reject) => {
    const timeout = setTimeout(() => reject(new Error("Timed out waiting for server start")), 15000);

    proc.stdout.on("data", (chunk) => {
      if (chunk.toString().includes("serving on port")) {
        clearTimeout(timeout);
        resolve();
      }
    });

    proc.on("exit", (code) => {
      clearTimeout(timeout);
      reject(new Error(`Server exited early with code ${code ?? "unknown"}`));
    });
  });
}

async function stopProcess(proc: ReturnType<typeof spawn>) {
  if (proc.killed) return;
  try {
    process.kill(-proc.pid!, "SIGTERM");
  } catch {
    return;
  }
  await new Promise<void>((resolve) => {
    const timer = setTimeout(() => {
      try {
        process.kill(-proc.pid!, "SIGKILL");
      } catch {
        // already exited
      }
      resolve();
    }, 2000);
    proc.once("exit", () => {
      clearTimeout(timer);
      resolve();
    });
  });
}

test("websocket chat endpoint accepts handshake and echoes session-aware response", async () => {
  const port = 4199;
  const server = spawn("npm", ["run", "dev"], {
    env: { ...process.env, PORT: String(port), NODE_ENV: "test" },
    stdio: ["ignore", "pipe", "pipe"],
    detached: true,
  });

  let ws: WebSocket | null = null;

  try {
    await waitForServerReady(server);

    ws = await new Promise<WebSocket>((resolve, reject) => {
      const socket = new WebSocket(`ws://127.0.0.1:${port}/ws/chat`);
      socket.once("open", () => resolve(socket));
      socket.once("error", reject);
    });

    const responses: string[] = [];

    await new Promise<void>((resolve, reject) => {
      const timer = setTimeout(() => reject(new Error("Timed out waiting for websocket responses")), 8000);

      ws!.on("message", (raw) => {
        const payload = JSON.parse(raw.toString()) as { message?: string };
        if (payload.message) {
          responses.push(payload.message);
        }
        if (responses.length >= 2) {
          clearTimeout(timer);
          resolve();
        }
      });

      ws!.on("error", (error) => {
        clearTimeout(timer);
        reject(error);
      });

      ws!.send(JSON.stringify({ type: "join", sessionId: "session-123" }));
      ws!.send(JSON.stringify({ type: "message", sessionId: "session-123", message: "Hello" }));
    });

    assert.match(responses[0], /Connected to Boreal support/);
    assert.match(responses[1], /session-123/);
  } finally {
    if (ws && ws.readyState === WebSocket.OPEN) {
      ws.close();
    }
    await stopProcess(server);
  }
});
