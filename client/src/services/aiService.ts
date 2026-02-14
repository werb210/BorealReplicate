import axios from "@/lib/api";

export async function startAiSession(payload: { context: "website" }) {
  const res = await axios.post<{ sessionId: string }>("/api/ai/session/start", payload);
  return res.data;
}

export async function sendAiMessage(sessionId: string, message: string) {
  const res = await axios.post<{ reply: string }>("/api/ai/message", {
    sessionId,
    message,
  });
  return res.data;
}

export async function escalateToHuman(sessionId: string) {
  await axios.post("/api/ai/escalate", { sessionId });
}

export async function reportIssue(
  sessionId: string,
  message: string,
  screenshot?: string,
) {
  await axios.post("/api/ai/report", {
    sessionId,
    message,
    screenshot,
  });
}
