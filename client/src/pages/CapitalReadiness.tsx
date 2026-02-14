import { useState } from "react";

type CreditReadinessForm = {
  companyName?: string;
  fullName?: string;
};

export default function CapitalReadiness() {
  const [formData, setFormData] = useState<CreditReadinessForm>({});

  async function submit() {
    const res = await fetch("/api/credit-readiness", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    window.location.href = `https://client.boreal.financial?continue=${data.continuationToken}`;
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-xl px-4 pb-16 pt-24">
        <h1 className="mb-6 text-3xl font-semibold">Credit Readiness Check</h1>

        <div className="space-y-4 rounded-xl border border-white/10 bg-[#0a1731] p-5">
          <input
            placeholder="Company Name"
            className="w-full rounded border border-white/20 bg-black/30 p-3"
            onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
          />

          <input
            placeholder="Full Name"
            className="w-full rounded border border-white/20 bg-black/30 p-3"
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
          />

          <button onClick={submit} className="w-full rounded bg-blue-600 py-3 text-white">
            Continue Application
          </button>
        </div>
      </div>
    </div>
  );
}
