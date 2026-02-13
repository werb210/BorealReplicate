import { useState } from "react";

export default function FloatingChatButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-[60] inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#0b2d6b] text-2xl text-white shadow-[0_10px_30px_rgba(11,45,107,0.55)] hover:bg-[#123b89]"
        aria-label="Open chat"
      >
        💬
      </button>

      {open && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/60 p-4">
          <div className="w-full max-w-md rounded-2xl bg-[#0a1731] p-6 text-white ring-1 ring-white/20">
            <h2 className="text-xl font-semibold">Chat Assistant</h2>
            <p className="mt-2 text-sm text-slate-300">Placeholder modal. Live chat logic will be connected in the next phase.</p>
            <button onClick={() => setOpen(false)} className="mt-6 rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white">Close</button>
          </div>
        </div>
      )}
    </>
  );
}
