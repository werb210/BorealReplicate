import { FormEvent, useMemo, useRef, useState } from "react";

type ChatMessage = {
  role: "user" | "system";
  content: string;
};

const CHAT_SESSION_KEY = "boreal_chat_session_id";

function getSessionId() {
  const existing = window.localStorage.getItem(CHAT_SESSION_KEY);
  if (existing) return existing;
  const generated = crypto.randomUUID();
  window.localStorage.setItem(CHAT_SESSION_KEY, generated);
  return generated;
}

export default function AIChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [connecting, setConnecting] = useState(false);
  const [connected, setConnected] = useState(false);
  const wsRef = useRef<WebSocket | null>(null);
  const sessionId = useMemo(() => getSessionId(), []);

  const openChat = () => {
    setOpen((current) => {
      const next = !current;
      if (next && !wsRef.current) {
        const protocol = window.location.protocol === "https:" ? "wss" : "ws";
        const socket = new WebSocket(`${protocol}://${window.location.host}/ws/chat`);
        wsRef.current = socket;
        setConnecting(true);

        socket.onopen = () => {
          setConnecting(false);
          setConnected(true);
          socket.send(JSON.stringify({ type: "session.start", sessionId }));
        };

        socket.onmessage = (event) => {
          setMessages((prev) => [...prev, { role: "system", content: String(event.data) }]);
        };

        socket.onerror = () => {
          setMessages((prev) => [...prev, { role: "system", content: "Chat connection encountered an error." }]);
        };

        socket.onclose = () => {
          setConnected(false);
          setConnecting(false);
          wsRef.current = null;
        };
      }
      return next;
    });
  };

  const sendMessage = (event: FormEvent) => {
    event.preventDefault();
    if (!input.trim() || !wsRef.current || wsRef.current.readyState !== WebSocket.OPEN) return;

    const payload = { type: "chat.message", sessionId, message: input.trim() };
    wsRef.current.send(JSON.stringify(payload));
    setMessages((prev) => [...prev, { role: "user", content: input.trim() }]);
    setInput("");
  };

  return (
    <>
      <button
        type="button"
        onClick={openChat}
        className="fixed bottom-6 right-6 z-[60] inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#0b2d6b] text-white shadow-[0_10px_30px_rgba(11,45,107,0.55)] transition hover:bg-[#123b89]"
        aria-label="Open chat"
      >
        Chat
      </button>

      {open ? (
        <section className="fixed bottom-24 right-4 z-[60] flex h-[26rem] w-[calc(100%-2rem)] max-w-sm flex-col rounded-2xl border border-white/20 bg-[#040b1a] text-white shadow-xl md:right-6">
          <header className="border-b border-white/10 px-4 py-3 text-sm font-semibold">Boreal Chat</header>
          <div className="flex-1 space-y-2 overflow-y-auto px-4 py-3 text-sm">
            {connecting ? <p className="text-slate-300">Connecting...</p> : null}
            {!connecting && !connected ? <p className="text-slate-300">Disconnected.</p> : null}
            {messages.map((message, index) => (
              <p key={`${message.role}-${index}`} className={message.role === "user" ? "text-right text-blue-200" : "text-slate-200"}>{message.content}</p>
            ))}
          </div>
          <form onSubmit={sendMessage} className="border-t border-white/10 p-3">
            <label htmlFor="chat-message" className="sr-only">Message</label>
            <input
              id="chat-message"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Type a message"
              className="w-full rounded border border-white/20 bg-[#08132a] px-3 py-2 text-sm"
            />
          </form>
        </section>
      ) : null}
    </>
  );
}
