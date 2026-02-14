import { useState } from "react";

type CreditReadinessForm = {
  companyName?: string;
  fullName?: string;
};

export default function CapitalReadiness() {
  const [form, setForm] = useState<CreditReadinessForm>({});

  async function submit() {
    const res = await fetch("/api/ai/continue-application", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    window.location.href = data.redirect;
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-xl px-4 py-16">
        <h1 className="mb-8 text-3xl font-semibold">Credit Readiness Check</h1>

        <div className="space-y-4">
          <input
            placeholder="Company Name"
            className="w-full border p-3"
            onChange={(e) => setForm({ ...form, companyName: e.target.value })}
          />

          <input
            placeholder="Full Name"
            className="w-full border p-3"
            onChange={(e) => setForm({ ...form, fullName: e.target.value })}
          />

          <button onClick={submit} className="w-full bg-black py-3 text-white">
            Continue Application
          </button>
        </div>
      </div>
    </div>
  );
}
