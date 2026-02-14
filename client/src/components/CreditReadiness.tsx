import { FormEvent, useState } from "react";

export default function CreditReadiness() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);

    const formState = Object.fromEntries(new FormData(event.currentTarget));

    const res = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/api/public/application/create-from-website`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      },
    );

    const data = await res.json();

    if (data.applicationId) {
      window.location.href = `https://client.boreal.financial/apply/${data.applicationId}`;
      return;
    }

    setLoading(false);
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl space-y-4 rounded-2xl bg-[#0a1731] p-6 ring-1 ring-white/10">
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
      <button className="w-full rounded bg-blue-600 px-6 py-3 text-white" disabled={loading}>
        {loading ? "Submitting..." : "Check Credit Readiness"}
      </button>
    </form>
  );
}
