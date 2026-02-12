import { useMemo, useState } from "react";
import html2canvas from "html2canvas";
import { API_BASE_URL } from "@/config/env";

const escalationSignals = ["human", "agent", "urgent", "escalate", "help now", "speak to someone"];

export default function AIChat() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const shouldEscalate = useMemo(() => {
    const lower = `${message} ${response}`.toLowerCase();
    return escalationSignals.some((signal) => lower.includes(signal));
  }, [message, response]);

  async function sendMessage() {
    const trimmed = message.trim();
    if (!trimmed) return;

    const res = await fetch(`${API_BASE_URL}/api/chat`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: trimmed }),
    });
    const data = await res.json();
    setResponse(data.response ?? "No response available right now.");

    await fetch(`${API_BASE_URL}/api/support/event`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ event: "ai_chat_message", source: "website" }),
    });
  }

  async function escalate() {
    await fetch(`${API_BASE_URL}/api/support/live`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        source: "website",
        sessionId: Date.now().toString(),
        trigger: shouldEscalate ? "keyword" : "manual",
      }),
    });

    await fetch(`${API_BASE_URL}/api/support/event`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ event: "support_escalation", source: "website" }),
    });

    alert("A human will join shortly.");
  }

  async function reportIssue() {
    const description = prompt("Describe the issue:");
    if (!description) return;

    const screenshot = await html2canvas(document.body).then((canvas) => canvas.toDataURL());

    await fetch(`${API_BASE_URL}/api/support/report`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ description, screenshot }),
    });

    alert("Issue reported.");
  }

  return (
    <div className="ai-chat space-y-3">
      <textarea
        className="w-full rounded-md border border-slate-200 p-2 text-sm"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Ask Boreal AI about financing options..."
      />
      <div className="flex flex-wrap gap-2">
        <button onClick={sendMessage} className="rounded bg-slate-900 px-3 py-2 text-sm font-semibold text-white">Ask AI</button>
        <button onClick={escalate} className="rounded bg-blue-600 px-3 py-2 text-sm font-semibold text-white">Talk to a Human</button>
        {shouldEscalate ? (
          <button onClick={escalate} className="rounded bg-red-600 px-3 py-2 text-sm font-semibold text-white">Escalate Now</button>
        ) : null}
        <button onClick={reportIssue} className="rounded bg-slate-200 px-3 py-2 text-sm font-semibold text-slate-800">Report an Issue</button>
      </div>
      <div className="rounded-md bg-slate-50 p-2 text-sm text-slate-700">{response}</div>
    </div>
  );
}
