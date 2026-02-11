import { useState } from "react";

export function ChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <aside className="fixed bottom-6 right-6 z-50">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="rounded-lg bg-orange-500 px-4 py-2 text-white shadow-lg transition hover:bg-orange-600"
      >
        Chat
      </button>

      {open ? (
        <div className="mt-3 w-80 rounded-lg border bg-white p-4 shadow-xl">
          <h4 className="font-semibold">Boreal Assistant</h4>
          <p className="mt-1 text-sm text-gray-600">Ask about financing products, eligibility, or your application process.</p>

          <div className="mt-4 space-y-2">
            <button
              type="button"
              className="w-full rounded bg-blue-600 px-3 py-2 text-sm text-white"
              onClick={() => {
                window.location.href = "/contact";
              }}
            >
              Talk to a Human
            </button>
            <button
              type="button"
              className="w-full rounded bg-gray-200 px-3 py-2 text-sm text-gray-900"
              onClick={() => {
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
