import { MessageCircle, Send, X } from "lucide-react";
import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { getReadinessSessionToken } from "@/utils/session";

type ChatMessage = {
  from: "user" | "system";
  text: string;
};

type ChatPayload = {
  type?: string;
  message?: string;
};

export default function FloatingChat() {
  const sessionId = useMemo(() => {
    if (typeof window === "undefined") return "";
    const readiness = getReadinessSessionToken();
    return readiness || window.crypto.randomUUID();
  }, []);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [status, setStatus] = useState<"connecting" | "connected" | "reconnecting">("connecting");
  const [transferInProgress, setTransferInProgress] = useState(false);
  const socketRef = useRef<WebSocket | null>(null);
  const retryRef = useRef<number | null>(null);

  useEffect(() => {
    if (!open) return;

    let cancelled = false;

    const connect = () => {
      if (cancelled) return;
      setStatus((current) => (current === "connected" ? "reconnecting" : "connecting"));
      const protocol = window.location.protocol === "https:" ? "wss" : "ws";
      const socket = new WebSocket(`${protocol}://${window.location.host}/ws/chat`);
      socketRef.current = socket;

      socket.addEventListener("open", () => {
        setStatus("connected");
        socket.send(JSON.stringify({ type: "session", sessionId }));
      });

      socket.addEventListener("message", (event) => {
        try {
          const payload = JSON.parse(String(event.data)) as ChatPayload;
          if (payload.type === "staff_joined") {
            setTransferInProgress(true);
            setMessages((current) => [...current, { from: "system", text: "Transferring you…" }]);
            return;
          }

          const message = payload.message;
          if (typeof message === "string") {
            setMessages((current) => [...current, { from: "system", text: message }]);
          }
        } catch {
          // Ignore malformed messages.
        }
      });

      socket.addEventListener("close", () => {
        if (!open || cancelled) return;
        retryRef.current = window.setTimeout(connect, 1500);
      });
    };

    connect();

    return () => {
      cancelled = true;
      if (retryRef.current) {
        window.clearTimeout(retryRef.current);
      }
      socketRef.current?.close();
      socketRef.current = null;
    };
  }, [open, sessionId]);

  function sendMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextValue = value.trim();
    if (!nextValue) return;

    setMessages((current) => [...current, { from: "user", text: nextValue }]);
    if (socketRef.current?.readyState === WebSocket.OPEN) {
      socketRef.current.send(JSON.stringify({ type: "message", sessionId, message: nextValue }));
    }
    setValue("");
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        className="fixed bottom-5 right-5 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg"
        aria-label="Open support chat"
      >
        {open ? <X size={20} /> : <MessageCircle size={20} />}
      </button>

      {open ? (
        <section className="fixed bottom-20 right-5 z-50 flex h-[24rem] w-[calc(100%-2.5rem)] max-w-sm flex-col rounded-2xl border border-white/10 bg-[#08132a] p-3 text-white shadow-2xl">
          <div className="mb-2 flex items-center justify-between gap-2">
            <p className="text-sm font-semibold">Boreal Support</p>
            <p className="text-[11px] text-slate-300">{status === "connected" ? "Connected" : status === "reconnecting" ? "Reconnecting" : "Connecting"}</p>
          </div>
          <div className="flex-1 space-y-2 overflow-y-auto rounded-lg bg-[#050B1A] p-2">
            {messages.length === 0 ? <p className="text-xs text-slate-300">Chat connected. Ask a question to begin.</p> : null}
            {messages.map((message, index) => (
              <div key={`${message.from}-${index}`} className={`max-w-[85%] rounded-lg px-3 py-2 text-xs ${message.from === "user" ? "ml-auto bg-blue-600" : "bg-white/10"}`}>
                {message.text}
              </div>
            ))}
          </div>
          <form onSubmit={sendMessage} className="mt-2 flex gap-2">
            <input
              value={value}
              onChange={(event) => setValue(event.target.value)}
              className="min-w-0 flex-1 rounded-md border border-white/20 bg-[#020817] px-3 py-2 text-xs"
              placeholder={transferInProgress ? "A specialist is joining..." : "Type your message"}
              disabled={transferInProgress}
            />
            <button type="submit" className="rounded-md bg-white px-3 text-black disabled:opacity-60" aria-label="Send message" disabled={transferInProgress}>
              <Send size={14} />
            </button>
          </form>
        </section>
      ) : null}
    </>
  );
}
