import { useEffect, useMemo, useState } from "react";

export type ChatMessage = { role: "assistant" | "user"; content: string };

interface ChatWindowProps {
  sessionId: string;
}

export function ChatWindow({ sessionId }: ChatWindowProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);

  useEffect(() => {
    const intervalId = window.setInterval(async () => {
      const response = await fetch(`/api/chat/receive?sessionId=${sessionId}`);
      if (!response.ok) return;
      const payload = (await response.json()) as { messages: ChatMessage[] };
      setMessages(payload.messages);
    }, 4000);

    return () => window.clearInterval(intervalId);
  }, [sessionId]);

  const canSend = useMemo(() => input.trim().length > 0 && !sending, [input, sending]);

  const handleSend = async () => {
    if (!canSend) return;
    const content = input.trim();
    setInput("");
    setSending(true);
    setMessages((current) => [...current, { role: "user", content }]);

    await fetch("/api/chat/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: content, sessionId }),
    });

    setSending(false);
  };

  return (
    <div className="rounded-lg border p-4">
      <div className="max-h-72 space-y-2 overflow-auto" aria-live="polite">
        {messages.length === 0 ? <p className="text-sm text-slate-500">Ask us anything about financing options.</p> : null}
        {messages.map((message, index) => (
          <p key={`${index}-${message.role}`} className={`w-fit max-w-[90%] rounded-md px-3 py-2 text-sm ${message.role === "user" ? "ml-auto bg-slate-900 text-white" : "bg-slate-100"}`}>
            {message.content}
          </p>
        ))}
      </div>
      <div className="mt-3 flex flex-col gap-2 sm:flex-row">
        <input value={input} onChange={(event) => setInput(event.target.value)} className="w-full rounded-md border px-3 py-2 text-sm" placeholder="Type your message" aria-label="Message input" onKeyDown={(event) => event.key === "Enter" ? handleSend() : null} />
        <button type="button" onClick={handleSend} disabled={!canSend} className="rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white disabled:opacity-60">
          Send
        </button>
      </div>
    </div>
  );
}
