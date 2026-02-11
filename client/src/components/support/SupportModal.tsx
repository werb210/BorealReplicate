import { useMemo } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ChatWindow } from "@/components/support/ChatWindow";

interface SupportModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const actions = ["Start Application", "Upload Documents", "Book Meeting", "Talk to Human", "Report Issue"];

export function SupportModal({ open, onOpenChange }: SupportModalProps) {
  const sessionId = useMemo(() => `session-${Date.now()}`, []);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent aria-describedby="support-modal-description" className="h-screen w-screen max-w-none rounded-none p-0 sm:h-auto sm:max-w-2xl sm:rounded-xl sm:p-6">
        <DialogHeader>
          <DialogTitle>Boreal Concierge</DialogTitle>
        </DialogHeader>
        <p id="support-modal-description" className="text-sm text-slate-600">Pick a quick action or continue in chat.</p>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {actions.map((action) => (
            <button key={action} type="button" className="rounded-md border px-3 py-2 text-left text-sm hover:bg-slate-50">
              {action}
            </button>
          ))}
        </div>
        <ChatWindow sessionId={sessionId} />
      </DialogContent>
    </Dialog>
  );
}
