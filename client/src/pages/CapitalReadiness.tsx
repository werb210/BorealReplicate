import { useState } from "react";

export default function CapitalReadiness() {
  const [form, setForm] = useState({
    companyName: "",
    fullName: "",
    email: "",
    phone: "",
    yearsInBusiness: "",
    annualRevenue: "",
    monthlyRevenue: "",
    requestedAmount: "",
    creditScoreRange: "",
  });

  async function submit() {
    await fetch("/api/ai/continue-application", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    window.location.href = "http://client-app-url/start";
  }

  return (
    <section className="mx-auto max-w-xl px-6 py-12 text-white">
      <h1 className="mb-8 text-3xl font-semibold">Credit Readiness</h1>

      <div className="space-y-4">
        {Object.keys(form).map((key) => (
          <input
            key={key}
            placeholder={key}
            className="w-full rounded-lg border border-white/10 bg-[#0B1C33] p-4"
            onChange={(e) => setForm({ ...form, [key]: e.target.value })}
          />
        ))}

        <button onClick={submit} className="mt-6 w-full rounded-full bg-blue-600 py-4">
          Continue Application
        </button>
      </div>
    </section>
  );
}
