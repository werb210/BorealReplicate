import { FormEvent, useEffect, useRef, useState } from "react";
import { escalateToHuman, isMayaEnabled, sendMayaMessage } from "@/api/maya";
import { submitIssueReport } from "@/api/issues";

type Message = { role: "user" | "maya"; text: string; ts: number };

const GREETING = "👋 Hi, I'm Maya. How can I help you with Boreal Financial today?";

export default function MayaWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const [reportOpen, setReportOpen] = useState(false);
  const [reportText, setReportText] = useState("");
  const [confirm, setConfirm] = useState<string | null>(null);
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const confirmTimer = useRef<number | null>(null);

  useEffect(
    () => () => {
      if (confirmTimer.current) window.clearTimeout(confirmTimer.current);
    },
    [],
  );

  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([{ role: "maya", text: GREETING, ts: Date.now() }]);
    }
  }, [open, messages.length]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  if (!isMayaEnabled()) return null;

  function flash(message: string) {
    setConfirm(message);
    if (confirmTimer.current) window.clearTimeout(confirmTimer.current);
    confirmTimer.current = window.setTimeout(() => setConfirm(null), 4000);
  }

  async function send() {
    const text = input.trim();
    if (!text || sending) return;

    setInput("");
    setMessages((prev) => [...prev, { role: "user", text, ts: Date.now() }]);
    setSending(true);

    try {
      const response = (await sendMayaMessage(text)) as { reply?: string };
      setMessages((prev) => [
        ...prev,
        { role: "maya", text: response.reply ?? "Thanks — I received that.", ts: Date.now() },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "maya",
          text: "Maya is unavailable right now. Please try again.",
          ts: Date.now(),
        },
      ]);
    } finally {
      setSending(false);
    }
  }

  async function handleTalkToHuman() {
    try {
      await escalateToHuman();
      flash("A team member has been notified.");
    } catch {
      flash("Could not reach a human right now. Please try again.");
    }
  }

  async function handleReport() {
    const message = reportText.trim();
    if (!message) return;

    try {
      await submitIssueReport({ message });
      setReportText("");
      setReportOpen(false);
      flash("Thanks — your report was sent.");
    } catch {
      flash("Report failed. Please try again.");
    }
  }

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        aria-label="Open Maya"
        className="fixed bottom-6 right-6 z-[70] flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-2xl text-white shadow-xl hover:bg-blue-500"
      >
        💬
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-[70] flex h-[520px] max-h-[calc(100vh-96px)] w-[360px] max-w-[calc(100vw-24px)] flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-2xl">
      <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
        <p className="font-semibold text-black">Maya</p>
        <button onClick={() => setOpen(false)} aria-label="Close" className="text-xl text-black hover:text-slate-600">
          ×
        </button>
      </div>

      <div className="flex-1 space-y-2 overflow-y-auto bg-slate-50 p-3">
        {messages.map((m) => (
          <div key={m.ts} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[80%] rounded-xl px-3 py-2 text-sm leading-relaxed ${
                m.role === "user" ? "bg-blue-100 text-black" : "bg-white text-black"
              }`}
            >
              {m.text}
            </div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      <div className="border-t border-slate-200 p-3">
        <div className="mb-2 grid grid-cols-2 gap-2">
          <button onClick={() => void handleTalkToHuman()} className="rounded-md border border-slate-300 px-3 py-2 text-sm text-black hover:bg-slate-100">
            Talk to Human
          </button>
          <button onClick={() => setReportOpen((v) => !v)} className="rounded-md border border-slate-300 px-3 py-2 text-sm text-black hover:bg-slate-100">
            Report Issue
          </button>
        </div>

        {reportOpen ? (
          <div className="mb-2 rounded-md border border-slate-200 p-2">
            <textarea
              rows={3}
              value={reportText}
              onChange={(e) => setReportText(e.target.value)}
              placeholder="Describe the issue"
              className="w-full rounded-md border border-slate-300 p-2 text-sm text-black"
            />
            <button onClick={() => void handleReport()} className="mt-2 rounded-md bg-rose-600 px-3 py-2 text-sm text-white hover:bg-rose-500" disabled={!reportText.trim()}>
              Send report
            </button>
          </div>
        ) : null}

        {confirm ? <p className="mb-2 text-xs text-emerald-700">{confirm}</p> : null}

        <form
          onSubmit={(e: FormEvent) => {
            e.preventDefault();
            void send();
          }}
          className="flex gap-2"
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask Maya anything…"
            className="flex-1 rounded-md border border-slate-300 p-2 text-sm text-black"
            disabled={sending}
          />
          <button type="submit" className="rounded-md bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-500 disabled:opacity-60" disabled={!input.trim() || sending}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
