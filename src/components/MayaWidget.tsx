import { useEffect, useRef, useState } from 'react';
import { sendMayaMessage, escalateToHuman, isMayaEnabled } from '@/api/maya';
import { submitIssueReport } from '@/api/issues';

type Message = { role: 'user' | 'maya'; text: string; ts: number };

const GREETING = "👋 Hi, I'm Maya. How can I help you with Boreal Financial today?";

export default function MayaWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [sending, setSending] = useState(false);
  const [reportOpen, setReportOpen] = useState(false);
  const [reportText, setReportText] = useState('');
  const [confirm, setConfirm] = useState<string | null>(null);
  const confirmTimer = useRef<number | null>(null);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(
    () => () => {
      if (confirmTimer.current) window.clearTimeout(confirmTimer.current);
    },
    [],
  );

  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([{ role: 'maya', text: GREETING, ts: Date.now() }]);
    }
  }, [open]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  if (!isMayaEnabled()) return null;

  function flash(msg: string) {
    setConfirm(msg);
    if (confirmTimer.current) window.clearTimeout(confirmTimer.current);
    confirmTimer.current = window.setTimeout(() => setConfirm(null), 4000);
  }

  async function send() {
    const text = input.trim();
    if (!text || sending) return;
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', text, ts: Date.now() }]);
    setSending(true);
    try {
      const r = (await sendMayaMessage(text)) as { reply?: string };
      setMessages((prev) => [
        ...prev,
        { role: 'maya', text: r?.reply ?? 'Thanks — I received that.', ts: Date.now() },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: 'maya',
          text: 'Maya is unavailable right now. Please try again.',
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
      flash('✓ A team member has been notified.');
    } catch {
      flash('Could not reach a human right now. Please try again.');
    }
  }

  async function handleReport() {
    const msg = reportText.trim();
    if (!msg) return;
    let screenshot: string | undefined;
    try {
      const html2canvas = (await import('html2canvas')).default;
      const canvas = await html2canvas(document.body);
      screenshot = canvas.toDataURL('image/png');
    } catch {
      // fall back to text-only
    }
    try {
      await submitIssueReport({ message: msg, screenshotBase64: screenshot });
      flash('✓ Thanks — your report was sent.');
      setReportText('');
      setReportOpen(false);
    } catch {
      flash('Report failed. Please try again.');
    }
  }

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        aria-label="Open Maya"
        style={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          zIndex: 1000,
          width: 56,
          height: 56,
          borderRadius: '50%',
          background: '#1e3a5f',
          color: '#fff',
          border: 'none',
          fontSize: 24,
          cursor: 'pointer',
          boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
        }}
      >
        💬
      </button>
    );
  }

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 24,
        right: 24,
        zIndex: 1000,
        width: 360,
        maxWidth: 'calc(100vw - 32px)',
        height: 520,
        maxHeight: 'calc(100vh - 96px)',
        background: '#fff',
        borderRadius: 12,
        boxShadow: '0 12px 40px rgba(0,0,0,0.18)',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        fontFamily: 'system-ui, sans-serif',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '10px 12px',
          borderBottom: '1px solid #e5e7eb',
          fontWeight: 600,
        }}
      >
        <span>Maya</span>
        <button
          onClick={() => setOpen(false)}
          aria-label="Close"
          style={{ background: 'transparent', border: 'none', fontSize: 18, cursor: 'pointer' }}
        >
          ×
        </button>
      </div>

      <div
        style={{
          flex: 1,
          overflowY: 'auto',
          padding: 12,
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
        }}
      >
        {messages.map((m) => (
          <div
            key={m.ts}
            style={{ display: 'flex', justifyContent: m.role === 'user' ? 'flex-end' : 'flex-start' }}
          >
            <div
              style={{
                maxWidth: '80%',
                padding: '8px 12px',
                borderRadius: 10,
                background: m.role === 'user' ? '#1e3a5f' : '#f1f5f9',
                color: m.role === 'user' ? '#fff' : '#0f172a',
                fontSize: 13,
                lineHeight: 1.45,
              }}
            >
              {m.text}
            </div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      <div
        style={{
          padding: '10px 12px',
          borderTop: '1px solid #e5e7eb',
          display: 'flex',
          gap: 8,
        }}
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') void send();
          }}
          placeholder="Ask Maya anything…"
          disabled={sending}
          style={{
            flex: 1,
            padding: '8px 10px',
            border: '1px solid #e2e8f0',
            borderRadius: 8,
            fontSize: 13,
            outline: 'none',
          }}
        />
        <button
          onClick={() => void send()}
          disabled={!input.trim() || sending}
          style={{
            padding: '8px 14px',
            background: '#1e3a5f',
            color: '#fff',
            border: 'none',
            borderRadius: 8,
            fontSize: 13,
            cursor: 'pointer',
            opacity: !input.trim() || sending ? 0.5 : 1,
          }}
        >
          ↑
        </button>
      </div>

      <div style={{ padding: 12, borderTop: '1px solid #e5e7eb' }}>
        {confirm && (
          <div
            style={{
              marginBottom: 10,
              padding: '6px 10px',
              borderRadius: 999,
              fontSize: 12,
              color: '#15803d',
              background: 'rgba(34,197,94,0.12)',
              display: 'inline-block',
            }}
          >
            {confirm}
          </div>
        )}
        {reportOpen && (
          <div style={{ marginBottom: 10, border: '1px solid #e5e7eb', borderRadius: 8, padding: 10 }}>
            <textarea
              value={reportText}
              onChange={(e) => setReportText(e.target.value)}
              placeholder="Describe the issue"
              rows={3}
              style={{
                width: '100%',
                border: '1px solid #e5e7eb',
                borderRadius: 8,
                padding: 8,
                fontSize: 14,
                boxSizing: 'border-box',
                marginBottom: 8,
              }}
            />
            <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
              <button
                onClick={() => {
                  setReportOpen(false);
                  setReportText('');
                }}
                style={{
                  padding: '8px 12px',
                  borderRadius: 6,
                  border: '1px solid #d1d5db',
                  background: '#fff',
                  cursor: 'pointer',
                }}
              >
                Cancel
              </button>
              <button
                onClick={() => void handleReport()}
                disabled={!reportText.trim()}
                style={{
                  padding: '8px 12px',
                  borderRadius: 6,
                  border: 'none',
                  background: '#dc2626',
                  color: '#fff',
                  cursor: 'pointer',
                }}
              >
                Send Report
              </button>
            </div>
          </div>
        )}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
          <button
            onClick={() => void handleTalkToHuman()}
            style={{
              padding: '10px 12px',
              borderRadius: 8,
              border: '1px solid #1e3a5f',
              background: '#f0f7ff',
              color: '#1e3a5f',
              cursor: 'pointer',
            }}
          >
            Talk to Human
          </button>
          <button
            onClick={() => setReportOpen((p) => !p)}
            style={{
              padding: '10px 12px',
              borderRadius: 8,
              border: '1px solid #dc2626',
              background: '#fff5f5',
              color: '#dc2626',
              cursor: 'pointer',
            }}
          >
            Report Issue
          </button>
        </div>
      </div>
    </div>
  );
}
