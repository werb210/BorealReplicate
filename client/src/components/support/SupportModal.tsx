import { useMemo, useState } from "react";
import { MessageSquare, X } from "lucide-react";
import { useLocation } from "wouter";
import { ChatWindow } from "@/components/support/ChatWindow";

const actions = [
  { label: "Start Application", href: "/apply" },
  { label: "Upload Documents", href: "/apply" },
  { label: "Book Meeting", href: "/contact?reason=funding" },
  { label: "Talk to Human", href: "/contact?focus=form" },
  { label: "Report Issue", href: "/contact?reason=issue&focus=form" },
];

export function SupportModal() {
  const [open, setOpen] = useState(false);
  const [, navigate] = useLocation();
  const sessionId = useMemo(() => `session-${Date.now()}`, []);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {open ? (
        <div className="h-[80vh] w-[calc(100vw-2rem)] max-w-sm overflow-hidden rounded-xl border bg-white shadow-2xl sm:h-[540px] sm:w-[360px]">
          <div className="flex items-center justify-between border-b px-4 py-3">
            <h2 className="text-sm font-semibold">Boreal Assistant</h2>
            <button type="button" onClick={() => setOpen(false)} aria-label="Close chat" className="rounded p-1 hover:bg-slate-100">
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="p-3">
            <div className="mb-3 flex flex-wrap gap-2">
              {actions.map((action) => (
                <button
                  key={action.label}
                  type="button"
                  className="rounded-full border px-3 py-1 text-xs font-medium hover:bg-slate-100"
                  onClick={() => {
                    navigate(action.href);
                    setOpen(false);
                  }}
                >
                  {action.label}
                </button>
              ))}
            </div>
            <ChatWindow sessionId={sessionId} compact />
          </div>
        </div>
      ) : null}

      {!open ? (
        <button
          type="button"
          className="ml-auto inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-3 text-sm font-semibold text-white shadow-lg"
          onClick={() => setOpen(true)}
          aria-label="Talk to an expert"
        >
          <MessageSquare className="h-4 w-4" />
          Chat
        </button>
      ) : null}
    </div>
  );
}
