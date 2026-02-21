import { useEffect, useMemo, useState } from "react";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

type MayaResponse = {
  reply?: string;
  escalated?: boolean;
  requiresConfirmation?: boolean;
  action?: string;
};

export default function MayaWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [sessionId, setSessionId] = useState<string>("");
  const [escalated, setEscalated] = useState(false);
  const [showBookingConfirmation, setShowBookingConfirmation] = useState(false);

  const marketing = useMemo(() => {
    const params = new URLSearchParams(window.location.search);

    return {
      utmSource: params.get("utm_source"),
      utmCampaign: params.get("utm_campaign"),
    };
  }, []);

  useEffect(() => {
    const existingSessionId = localStorage.getItem("mayaWebsiteSession");
    const nextSessionId = existingSessionId ?? crypto.randomUUID();

    localStorage.setItem("mayaWebsiteSession", nextSessionId);
    setSessionId(nextSessionId);
  }, []);

  async function sendMessage(confirmed = false) {
    if (!input.trim() || !sessionId) return;

    const message = input;
    const userMsg: ChatMessage = { role: "user", content: message };

    setMessages((prev) => [...prev, userMsg]);

    const response = await fetch(`${import.meta.env.VITE_AGENT_URL}/maya`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        mode: "client",
        sessionId,
        message,
        confirmed,
        marketing,
      }),
    });

    const data = (await response.json()) as MayaResponse;

    if (data.reply) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply ?? "" },
      ]);
    }

    setEscalated(Boolean(data.escalated));
    setShowBookingConfirmation(
      Boolean(data.requiresConfirmation) && data.action === "book",
    );
    setInput("");
  }

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          padding: "12px",
          borderRadius: "50%",
          background: "#111",
          color: "#fff",
          zIndex: 1000,
        }}
      >
        Maya
      </button>

      {open && (
        <div
          style={{
            position: "fixed",
            bottom: "80px",
            right: "20px",
            width: "350px",
            height: "450px",
            background: "#fff",
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "1rem",
            zIndex: 1000,
          }}
        >
          <h4>Maya — Funding Assistant</h4>

          <div style={{ height: "300px", overflowY: "auto" }}>
            {messages.map((m, i) => (
              <div key={`${m.role}-${i}`}>
                <strong>{m.role === "user" ? "You" : "Maya"}:</strong>
                <div>{m.content}</div>
              </div>
            ))}
          </div>

          {escalated && (
            <div style={{ color: "red" }}>
              A Boreal funding specialist will reach out shortly.
            </div>
          )}

          <div>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              style={{ width: "70%" }}
            />
            <button onClick={() => void sendMessage()}>Send</button>
          </div>

          {showBookingConfirmation && (
            <button onClick={() => void sendMessage(true)}>Confirm Booking</button>
          )}
        </div>
      )}
    </>
  );
}
