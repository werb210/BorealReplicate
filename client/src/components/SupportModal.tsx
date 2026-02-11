import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

type SupportModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

type Message = {
  role: "user" | "assistant";
  text: string;
};

const quickActions = [
  { label: "Start Application", href: "/apply" },
  { label: "Upload Documents", href: "/apply" },
  { label: "Book Meeting", href: "/how-it-works" },
  { label: "Talk to Human", href: "/how-it-works" },
  { label: "Report Issue", href: "/how-it-works" },
];

export function SupportModal({ open, onOpenChange }: SupportModalProps) {
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    if (!open) {
      setQuery("");
    }
  }, [open]);

  const handleSend = async () => {
    if (!query.trim()) {
      return;
    }

    const userMessage = query.trim();
    setMessages((current) => [...current, { role: "user", text: userMessage }]);
    setQuery("");

    try {
      await fetch("/chat/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      });

      const response = await fetch("/chat/receive", { method: "GET" });
      if (!response.ok) {
        throw new Error("Failed to receive reply");
      }
      const payload = (await response.json()) as { reply?: string };
      setMessages((current) => [
        ...current,
        { role: "assistant", text: payload.reply ?? "A Boreal specialist will reply shortly." },
      ]);
    } catch {
      setMessages((current) => [
        ...current,
        { role: "assistant", text: "We could not connect right now. A Boreal expert will follow up shortly." },
      ]);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-none w-screen h-screen rounded-none p-0" aria-describedby="support-modal-description">
        <div className="h-full overflow-y-auto">
          <div className="mx-auto max-w-4xl px-6 py-10 space-y-8">
            <DialogHeader>
              <DialogTitle className="text-3xl">Get personalized help</DialogTitle>
              <DialogDescription id="support-modal-description">
                Choose an action or ask a question. Our support flow uses Boreal's staff messaging endpoints.
              </DialogDescription>
            </DialogHeader>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {quickActions.map((action) => (
                <Button key={action.label} asChild variant="outline" className="h-auto py-4 text-left justify-start">
                  <a href={action.href} aria-label={action.label}>
                    {action.label}
                  </a>
                </Button>
              ))}
            </div>

            <div className="border rounded-lg p-4 space-y-4">
              <div className="max-h-72 overflow-y-auto space-y-3" aria-live="polite">
                {messages.length === 0 ? (
                  <p className="text-sm text-muted-foreground">Start a conversation and we will route your message to Boreal staff.</p>
                ) : (
                  messages.map((message, index) => (
                    <p
                      key={`${message.role}-${index}`}
                      className={`rounded-lg px-3 py-2 text-sm ${
                        message.role === "assistant" ? "bg-muted" : "bg-primary text-primary-foreground ml-auto w-fit"
                      }`}
                    >
                      {message.text}
                    </p>
                  ))
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-2">
                <Input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Ask me about financing…"
                  aria-label="Ask me about financing"
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      handleSend();
                    }
                  }}
                />
                <Button onClick={handleSend} aria-label="Send support message">
                  Send
                </Button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
