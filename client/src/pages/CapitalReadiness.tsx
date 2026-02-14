import { FormEvent } from "react";

export default function CapitalReadiness() {
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    const res = await fetch("/api/continuation/start", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(form.entries())),
    });

    const data = await res.json();
    window.location.href = `https://client.boreal.financial/resume/${data.resumeToken}`;
  }

  return (
    <div className="bg-black px-8 py-16 text-white">
      <h1 className="mb-6 text-4xl">Capital Readiness Check</h1>

      <form onSubmit={submit} className="grid max-w-xl gap-4">
        <input name="companyName" placeholder="Company Name" required className="rounded border border-white/20 bg-[#050B1A] p-3" />
        <input name="fullName" placeholder="Full Name" required className="rounded border border-white/20 bg-[#050B1A] p-3" />
        <input name="email" placeholder="Email" required className="rounded border border-white/20 bg-[#050B1A] p-3" />
        <input name="phone" placeholder="Phone" required className="rounded border border-white/20 bg-[#050B1A] p-3" />
        <input name="industry" placeholder="Industry" required className="rounded border border-white/20 bg-[#050B1A] p-3" />
        <input name="yearsInBusiness" placeholder="Years in Business" className="rounded border border-white/20 bg-[#050B1A] p-3" />
        <input name="monthlyRevenue" placeholder="Monthly Revenue" className="rounded border border-white/20 bg-[#050B1A] p-3" />
        <input name="annualRevenue" placeholder="Annual Revenue" className="rounded border border-white/20 bg-[#050B1A] p-3" />
        <input name="arOutstanding" placeholder="A/R Outstanding" className="rounded border border-white/20 bg-[#050B1A] p-3" />
        <input name="existingDebt" placeholder="Existing Debt?" className="rounded border border-white/20 bg-[#050B1A] p-3" />

        <button className="mt-4 rounded bg-white py-3 text-black">See My Score</button>
      </form>
    </div>
  );
}
