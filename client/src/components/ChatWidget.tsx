import { useState } from "react";
import { trackEvent } from "@/utils/analytics";

export function ChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <aside className="fixed bottom-6 right-6 z-50">
      <button
        type="button"
        onClick={() => {
          const nextOpen = !open;
          setOpen(nextOpen);
          if (nextOpen) trackEvent("chat_opened", { source: "floating_widget" });
        }}
        className="rounded-full bg-orange-500 px-5 py-3 font-semibold text-white shadow-lg ring-2 ring-orange-200 transition hover:bg-orange-600"
      >
        Chat
      </button>

      {open ? (
        <div className="mt-3 w-80 rounded-lg border bg-white p-4 shadow-xl">
          <h4 className="font-semibold">Boreal Assistant</h4>
          <p className="mt-1 text-sm text-gray-600">Ask about financing products, eligibility, or your application process.</p>

          <div className="mt-4 flex gap-3">
            <button
              type="button"
              className="flex-1 rounded-lg bg-blue-600 py-2 font-semibold text-white hover:bg-blue-700"
              onClick={() => {
                trackEvent("talk_to_human_clicked", { source: "chat_widget" });
                window.location.href = "/contact";
              }}
            >
              Talk to a Human
            </button>
            <button
              type="button"
              className="flex-1 rounded-lg bg-gray-200 py-2 font-semibold hover:bg-gray-300"
              onClick={() => {
                trackEvent("issue_reported", { source: "chat_widget" });
                window.location.href = "mailto:info@boreal.financial?subject=Website%20Issue";
              }}
            >
              Report an Issue
            </button>
          </div>
        </div>
      ) : null}
    </aside>
  );
}
