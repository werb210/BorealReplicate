import { useState } from "react";
import { trackEvent } from "@/utils/analytics";
import AIChat from "@/components/AIChat";

export function ChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <aside className="fixed bottom-4 right-4 z-50 md:bottom-6 md:right-6">
      <button
        type="button"
        onClick={() => {
          const nextOpen = !open;
          setOpen(nextOpen);
          if (nextOpen) trackEvent("chat_opened", { source: "floating_widget" });
        }}
        className="rounded-full bg-orange-500 px-5 py-3 font-semibold text-white shadow-lg ring-2 ring-orange-200 transition hover:bg-orange-600"
      >
        Ask AI
      </button>

      {open ? (
        <div className="mt-3 h-[75vh] w-[calc(100vw-2rem)] max-w-md rounded-lg border bg-white p-4 shadow-xl md:h-[32rem] md:w-[26rem]">
          <h4 className="font-semibold">Boreal Assistant</h4>
          <p className="mt-1 text-sm text-gray-600">Ask AI, talk to a human, or report an issue with a screenshot.</p>

          <div className="mt-4 h-[calc(100%-4rem)] overflow-auto">
            <AIChat />
          </div>
        </div>
      ) : null}
    </aside>
  );
}
