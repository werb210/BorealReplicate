import { useState } from "react";
import html2canvas from "html2canvas";

type Message = {
  role: "assistant" | "user";
  content: string;
};

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Ask about funding or application steps." },
  ]);
  const [input, setInput] = useState("");

  async function sendMessage() {
    if (!input.trim()) return;

    const updated = [...messages, { role: "user", content: input.trim() } as Message];
    setMessages(updated);
    setInput("");

    try {
      const res = await fetch("/api/ai/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updated }),
      });

      const data = await res.json();
      setMessages([...updated, { role: "assistant", content: data.reply ?? "I can help with funding questions and your application path." }]);
    } catch {
      setMessages([...updated, { role: "assistant", content: "I couldn't reach support right now. Please try again." }]);
    }
  }

  async function reportIssue() {
    const canvas = await html2canvas(document.body);
    const screenshot = canvas.toDataURL("image/png");

    await fetch("/api/support/report", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        url: window.location.href,
        userAgent: navigator.userAgent,
        viewport: { width: window.innerWidth, height: window.innerHeight },
        screenshot,
      }),
    });

    window.alert("Issue sent.");
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 rounded-full bg-black px-4 py-3 text-white shadow-lg"
      >
        Chat
      </button>

      {open ? (
        <div className="fixed bottom-20 right-6 z-50 flex h-[70vh] w-[calc(100vw-3rem)] max-w-80 flex-col rounded-lg bg-white shadow-xl sm:h-[500px]">
          <div className="border-b p-4 font-semibold">Boreal Assistant</div>

          <div className="flex-1 space-y-3 overflow-y-auto p-4 text-sm">
            {messages.map((message, i) => (
              <div key={`${message.role}-${i}`} className={message.role === "assistant" ? "" : "text-right"}>
                {message.content}
              </div>
            ))}
          </div>

          <div className="flex gap-2 border-t p-3">
            <input
              className="flex-1 rounded border px-2 py-1"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  void sendMessage();
                }
              }}
              placeholder="Ask about funding..."
            />
            <button type="button" onClick={() => void sendMessage()} className="rounded bg-orange-500 px-3 text-white">
              Send
            </button>
          </div>

          <div className="flex justify-between border-t p-3 text-xs">
            <button type="button" onClick={() => { window.location.href = "/portal-chat"; }}>
              Talk to a Human
            </button>
            <button type="button" onClick={() => void reportIssue()}>
              Report Issue
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
