import { FormEvent, useState } from "react";

export default function CreditReadiness() {
  const [submitted, setSubmitted] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    await fetch("/api/crm/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(new FormData(event.currentTarget))),
    });

    setSubmitted(true);
  }

  if (submitted)
    return (
      <div className="p-10 text-center">
        <h3 className="text-xl font-semibold text-white">
          A Boreal Intake Specialist will contact you shortly.
        </h3>
        <a href="/" className="mt-4 block underline text-white">
          Continue
        </a>
      </div>
    );

  return (
    <form onSubmit={submit} className="max-w-2xl space-y-4 rounded-2xl bg-[#0a1731] p-6 ring-1 ring-white/10">
      <input name="companyName" placeholder="Company Name" className="w-full rounded border border-white/20 bg-[#050B1A] p-3 text-white" required />
      <input name="fullName" placeholder="Full Name" className="w-full rounded border border-white/20 bg-[#050B1A] p-3 text-white" required />
      <input name="phone" placeholder="Phone" className="w-full rounded border border-white/20 bg-[#050B1A] p-3 text-white" required />
      <input name="email" placeholder="Email" className="w-full rounded border border-white/20 bg-[#050B1A] p-3 text-white" required />
      <input name="yearsInBusiness" placeholder="Years in Business" className="w-full rounded border border-white/20 bg-[#050B1A] p-3 text-white" />
      <input name="annualRevenue" placeholder="Annual Revenue" className="w-full rounded border border-white/20 bg-[#050B1A] p-3 text-white" />
      <input name="monthlyRevenue" placeholder="Monthly Revenue" className="w-full rounded border border-white/20 bg-[#050B1A] p-3 text-white" />
      <input name="requestedAmount" placeholder="Requested Amount" className="w-full rounded border border-white/20 bg-[#050B1A] p-3 text-white" />
      <select name="creditScoreRange" className="w-full rounded border border-white/20 bg-[#050B1A] p-3 text-white">
        <option>Credit Score Range</option>
        <option>650+</option>
        <option>600–649</option>
        <option>Below 600</option>
      </select>
      <button className="w-full rounded bg-blue-600 px-6 py-3 text-white">Check Capital Readiness</button>
    </form>
  );
}
