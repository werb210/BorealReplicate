import { FormEvent, useState } from "react";
import { APPLY_URL } from "@/config/site";

export default function CapitalReadiness() {
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const formData = Object.fromEntries(new FormData(e.currentTarget));

    try {
      const response = await fetch("/api/public/readiness", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Unable to submit readiness form.");
      }

      const data = await response.json() as { leadId: string };
      window.location.href = `${APPLY_URL}/apply?lead=${data.leadId}`;
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : "An unexpected error occurred.");
      setSubmitting(false);
    }
  }

  return (
    <div className="bg-[#020817] px-5 py-10 text-white md:px-6 md:py-12">
      <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-[#08132a] p-5 md:p-8">
        <h1 className="mb-3 text-3xl font-bold text-white md:text-5xl">Capital Readiness</h1>
        <p className="mb-6 text-xl font-semibold text-white md:text-2xl">Tell us about your business</p>

        <form onSubmit={submit} className="grid gap-3 md:grid-cols-2">
          <input name="companyName" placeholder="Company Name" required className="rounded border border-white/20 bg-[#050B1A] p-3" />
          <input name="fullName" placeholder="Full Name" required className="rounded border border-white/20 bg-[#050B1A] p-3" />
          <input name="phone" placeholder="Phone" required className="rounded border border-white/20 bg-[#050B1A] p-3" />
          <input name="email" type="email" placeholder="Email" required className="rounded border border-white/20 bg-[#050B1A] p-3" />
          <input name="industry" placeholder="Industry" required className="rounded border border-white/20 bg-[#050B1A] p-3" />
          <input name="yearsInBusiness" placeholder="Years in Business" required className="rounded border border-white/20 bg-[#050B1A] p-3" />
          <input name="monthlyRevenue" placeholder="Monthly Revenue" required className="rounded border border-white/20 bg-[#050B1A] p-3" />
          <input name="annualRevenue" placeholder="Annual Revenue" required className="rounded border border-white/20 bg-[#050B1A] p-3" />
          <input name="arOutstanding" placeholder="A/R Outstanding" required className="rounded border border-white/20 bg-[#050B1A] p-3" />
          <input name="existingDebt" placeholder="Existing Debt" required className="rounded border border-white/20 bg-[#050B1A] p-3" />

          <button disabled={submitting} className="mt-2 rounded bg-white py-3 font-semibold text-black md:col-span-2">
            {submitting ? "Submitting..." : "Continue Application"}
          </button>
          {error ? <p className="text-sm text-red-300 md:col-span-2">{error}</p> : null}
        </form>
      </div>
    </div>
  );
}
