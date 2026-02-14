import { MessageCircle } from "lucide-react";

export default function FloatingChatButton() {
  return (
    <button
      type="button"
      onClick={() => window.console.info("Chat button clicked. Chat backend not wired yet.")}
      className="fixed bottom-6 right-6 z-[60] inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#0b2d6b] text-white shadow-[0_10px_30px_rgba(11,45,107,0.55)] transition hover:bg-[#123b89]"
      aria-label="Open chat"
    >
      <MessageCircle size={22} />
    </button>
  );
}
