import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { getReadinessSessionToken } from "@/utils/session";
import { clearChatSocket, getChatSocket } from "@/utils/chatSocket";

type ChatMessage = {
  id: string;
  message: string;
  from: "system" | "user";
};

function createSessionId() {
  return `web-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}

export default function FloatingChat() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [mode, setMode] = useState<"chat" | "report">("chat");
  const [issue, setIssue] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [connecting, setConnecting] = useState(false);
  const [connected, setConnected] = useState(false);
  const [reconnectTick, setReconnectTick] = useState(0);
  const wsRef = useRef<WebSocket | null>(null);
  const reconnectAttemptsRef = useRef(0);
  const reconnectTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [staffEscalated, setStaffEscalated] = useState(false);
  const staffEscalatedRef = useRef(false);
  const sessionId = useMemo(() => getReadinessSessionToken() ?? createSessionId(), []);

  useEffect(() => {
    setMessages([
      {
        id: "welcome-message",
        from: "system",
        message: "Hi — I’m Maya. How can I help you today?",
      },
    ]);
  }, []);

  useEffect(() => {
    staffEscalatedRef.current = staffEscalated;
  }, [staffEscalated]);

  useEffect(() => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages]);

  useEffect(() => {
    if (!open || wsRef.current) return;

    const socket = getChatSocket();
    if (!socket) return;

    const ws = socket;
    wsRef.current = ws;
    setConnecting(true);

    ws.onopen = () => {
      setConnecting(false);
      setConnected(true);
      reconnectAttemptsRef.current = 0;
      ws.send(JSON.stringify({ type: "join", sessionId }));
    };

    ws.onmessage = (event) => {
      try {
        const payload = JSON.parse(event.data) as { type?: string; message?: string };
        if (payload.type === "staff_joined") {
          setStaffEscalated(true);
          setMessages((prev) => [
            ...prev,
            {
              id: `${Date.now()}-staff`,
              from: "system",
              message: payload.message || "Transferring you to a specialist…",
            },
          ]);
          return;
        }
        if (staffEscalatedRef.current) return;
        const systemMessage = payload.message;
        if (systemMessage) {
          setMessages((prev) => [...prev, { id: `${Date.now()}-system`, from: "system", message: systemMessage }]);
        }
      } catch {
        setMessages((prev) => [...prev, { id: `${Date.now()}-fallback`, from: "system", message: "Message received." }]);
      }
    };

    ws.onerror = () => {
      setConnecting(false);
      setConnected(false);
    };

    ws.onclose = () => {
      setConnecting(false);
      setConnected(false);
      wsRef.current = null;
      clearChatSocket();

      if (!open) return;

      reconnectAttemptsRef.current += 1;
      const cappedAttempt = Math.min(reconnectAttemptsRef.current, 3);
      const delayMs = cappedAttempt * 1000;
      reconnectTimerRef.current = setTimeout(() => {
        if (open) {
          setReconnectTick((value) => value + 1);
        }
      }, delayMs);
    };

    return () => {
      if (reconnectTimerRef.current) {
        clearTimeout(reconnectTimerRef.current);
        reconnectTimerRef.current = null;
      }
      ws.close();
      wsRef.current = null;
      clearChatSocket();
    };
  }, [open, reconnectTick, sessionId]);

  function sendMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!wsRef.current || wsRef.current.readyState !== WebSocket.OPEN) return;

    if (mode === "report") {
      const issueText = issue.trim();
      if (!issueText) return;
      wsRef.current.send(JSON.stringify({ type: "message", sessionId, message: `Issue report: ${issueText}` }));
      setMessages((prev) => [...prev, { id: `${Date.now()}-report`, from: "user", message: `Issue report: ${issueText}` }]);
      setIssue("");
      setMode("chat");
      return;
    }

    const trimmed = input.trim();
    if (!trimmed) return;
    wsRef.current.send(JSON.stringify({ type: "message", sessionId, message: trimmed }));
    setMessages((prev) => [...prev, { id: `${Date.now()}-user`, from: "user", message: trimmed }]);
    setInput("");
  }

  function requestHumanSupport() {
    if (!wsRef.current || wsRef.current.readyState !== WebSocket.OPEN) return;
    wsRef.current.send(JSON.stringify({ type: "staff_joined", sessionId }));
  }

  function reportIssue() {
    setMode("report");
  }

  return (
    <>
      {open ? (
        <div className="chat-panel fixed bottom-20 right-4 z-50 flex h-[720px] w-[min(92vw,360px)] flex-col overflow-hidden rounded-2xl border border-white/20 bg-[#08132a] shadow-2xl transition-[opacity,transform] duration-200 ease-out md:w-[min(90vw,420px)]">
          <div className="chat-header flex items-center justify-between border-b border-white/10 px-4">
            <div>
              <p className="text-sm font-semibold">Maya</p>
              <p className="text-xs text-slate-300">{connected ? "Online" : connecting ? "Connecting..." : "Offline"}</p>
            </div>
            <button aria-label="Close chat" onClick={() => setOpen(false)} className="rounded p-1 hover:bg-white/10">
              <X size={16} />
            </button>
          </div>
          <div ref={scrollRef} className="chat-messages flex-1 space-y-2 overflow-y-auto p-4 text-sm">
            {connecting ? <p className="text-slate-300">Connecting…</p> : null}
            {!connecting && !connected ? <p className="text-amber-300">Connection unavailable. Please try again.</p> : null}
            {messages.length === 0 ? <p className="text-slate-300">Ask a question and our team will follow up.</p> : null}
            {messages.map((item) => (
              <div key={item.id} className={`rounded-lg px-3 py-2 ${item.from === "user" ? "ml-8 bg-blue-600 text-white" : "mr-8 bg-[#0f1d3a] text-slate-100"}`}>
                {item.message}
              </div>
            ))}
          </div>
          <div className="mt-4 flex gap-2 border-t border-white/10 px-3 py-2 md:px-4">
            <button
              type="button"
              onClick={requestHumanSupport}
              className="rounded border border-gray-500 px-3 py-2"
            >
              Talk to a Human
            </button>
            <button
              type="button"
              onClick={reportIssue}
              className="rounded border border-gray-500 px-3 py-2"
            >
              Report an Issue
            </button>
          </div>
          <form onSubmit={sendMessage} className="chat-input flex flex-col gap-2 border-t border-white/10 px-3 py-3 md:px-4">
            {mode === "report" && (
              <div className="mt-1">
                <textarea
                  placeholder="Describe the issue..."
                  value={issue}
                  onChange={(e) => setIssue(e.target.value)}
                  className="w-full p-2 rounded bg-[#0b213f] text-white border border-gray-600"
                  required
                />
              </div>
            )}
            {mode === "chat" ? (
              <div className="flex items-center gap-2 rounded-lg bg-white p-2">
                <input
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 bg-transparent text-black outline-none"
                />
                <button type="submit" className="rounded bg-blue-600 px-4 py-2 text-white" aria-label="Send chat message">
                  Send
                </button>
              </div>
            ) : (
              <button type="submit" className="rounded bg-white px-3 py-2 text-black" aria-label="Send chat message">
                Send
              </button>
            )}
          </form>
        </div>
      ) : null}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-4 right-4 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-xl hover:bg-blue-700"
        aria-label="Open support chat"
      >
        <MessageCircle size={22} />
      </button>
    </>
  );
}
