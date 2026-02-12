import { useState } from "react";

export default function CapitalReadinessModal() {
  const [open, setOpen] = useState(false);
  const [score, setScore] = useState<number | null>(null);

  function calculate(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const revenue = Number((form.elements.namedItem("revenue") as HTMLInputElement).value);
    const time = Number((form.elements.namedItem("time") as HTMLInputElement).value);

    let calculated = 50;
    if (revenue > 500000) calculated += 25;
    if (time > 24) calculated += 25;
    setScore(calculated);
  }

  return (
    <>
      <button onClick={() => setOpen(true)} className="text-sm underline">
        Check Your Capital Readiness
      </button>

      {open ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
          <div className="w-full max-w-md space-y-4 rounded bg-white p-6">
            <h2 className="text-xl font-bold">Capital Readiness Score</h2>

            {!score ? (
              <form
                onSubmit={calculate}
                className="space-y-3"
              >
                <input
                  name="revenue"
                  placeholder="Annual Revenue"
                  className="w-full border p-2"
                  required
                />
                <input
                  name="time"
                  placeholder="Months in Business"
                  className="w-full border p-2"
                  required
                />
                <button className="w-full rounded bg-blue-600 px-4 py-2 text-white">
                  Calculate
                </button>
              </form>
            ) : null}

            {score ? (
              <div className="text-center">
                <div className="text-4xl font-bold">{score}%</div>
                <p className="mt-2 text-sm">
                  This is an estimate. Apply to get matched instantly.
                </p>
              </div>
            ) : null}

            <button
              onClick={() => {
                setOpen(false);
                setScore(null);
              }}
              className="text-sm underline"
            >
              Close
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
