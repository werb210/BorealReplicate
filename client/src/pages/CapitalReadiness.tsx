import React from "react";
import { FormEvent, useMemo, useRef, useState } from "react";
import { APPLY_URL } from "@/config/site";
import { INDUSTRIES } from "@/config/industries";
import { buildApplyUrl, getReadinessSessionToken, setReadinessSessionToken } from "@/utils/session";
import { safeFetch } from "@/lib/safeFetch";

type ReadinessResponse = {
  leadId: string;
  sessionId: string;
  sessionToken?: string;
  score?: number;
  tier?: string;
  deduped?: boolean;
};

export default function CapitalReadiness() {
  const existingToken = useMemo(() => getReadinessSessionToken(), []);
  const [readinessToken, setReadinessTokenState] = useState<string | null>(existingToken);
  const [preliminaryScore, setPreliminaryScore] = useState<number | null>(null);
  const [tier, setTier] = useState<string | null>(null);
  const [wasDeduped, setWasDeduped] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(Boolean(existingToken));
  const lastSubmitAtRef = useRef(0);

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const now = Date.now();
    if (submitting || now - lastSubmitAtRef.current < 1200) return;
    lastSubmitAtRef.current = now;

    setSubmitting(true);
    setError(null);

    const formData = Object.fromEntries(new FormData(e.currentTarget));

    try {
      const response = await safeFetch("/api/readiness/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Unable to submit readiness form.");
      }

      const data = (await response.json()) as ReadinessResponse;
      const sessionId = data.sessionId ?? data.sessionToken;
      if (!sessionId) throw new Error("No readiness session returned by server.");
      setReadinessSessionToken(sessionId);
      setReadinessTokenState(sessionId);
      setPreliminaryScore(data.score ?? null);
      setTier(data.tier ?? null);
      setWasDeduped(Boolean(data.deduped));
      setSubmitted(true);
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : "An unexpected error occurred.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="bg-[#020817] px-5 py-10 text-white md:px-6 md:py-12">
      {submitted && readinessToken ? (
        <div className="mx-auto mb-6 flex max-w-4xl flex-col items-start gap-3 rounded-2xl border border-blue-200/30 bg-blue-900/30 px-5 py-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-base font-semibold text-blue-100">Continuing your application</p>
            {preliminaryScore !== null ? <p className="text-sm text-blue-100/90">Preliminary score: {preliminaryScore}/100{tier ? ` · ${tier}` : ""}</p> : null}
            {wasDeduped ? <p className="text-xs text-blue-100/80">Existing lead reused to prevent duplicate submissions.</p> : null}
          </div>
          <a href={buildApplyUrl(APPLY_URL, readinessToken)} className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-black">Apply Now</a>
        </div>
      ) : null}

      <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-[#08132a] p-5 md:p-8">
        <h1 className="mb-3 text-3xl font-bold text-white md:text-5xl">Credit Readiness</h1>
        <p className="mb-6 text-xl font-semibold text-white md:text-2xl">Tell us about your business</p>

        {!readinessToken ? <form onSubmit={submit} className="grid gap-3 md:grid-cols-2">
          <input name="companyName" placeholder="Company Name" required className="rounded border border-white/20 bg-[#050B1A] p-3" />
          <input name="fullName" placeholder="Full Name" required className="rounded border border-white/20 bg-[#050B1A] p-3" />
          <input name="phone" placeholder="Phone" required className="rounded border border-white/20 bg-[#050B1A] p-3" />
          <input name="email" type="email" placeholder="Email" required className="rounded border border-white/20 bg-[#050B1A] p-3" />
          <select name="industry" required defaultValue="" className="rounded border border-white/20 bg-[#050B1A] p-3">
            <option value="" disabled>Select Industry</option>
            {INDUSTRIES.map((industry) => (
              <option key={industry} value={industry}>{industry}</option>
            ))}
          </select>
          <input name="yearsInBusiness" placeholder="Years in Business" required className="rounded border border-white/20 bg-[#050B1A] p-3" />
          <input name="monthlyRevenue" placeholder="Monthly Revenue" required className="rounded border border-white/20 bg-[#050B1A] p-3" />
          <input name="annualRevenue" placeholder="Annual Revenue" required className="rounded border border-white/20 bg-[#050B1A] p-3" />
          <input name="arOutstanding" placeholder="A/R Outstanding" required className="rounded border border-white/20 bg-[#050B1A] p-3" />
          <input name="existingDebt" placeholder="Existing Debt" required className="rounded border border-white/20 bg-[#050B1A] p-3" />

          <button disabled={submitting} className="mt-2 rounded bg-white py-3 font-semibold text-black disabled:opacity-70 md:col-span-2">
            {submitting ? "Submitting..." : "Check Preliminary Score"}
          </button>
          {error ? <p className="text-sm text-red-300 md:col-span-2">{error}</p> : null}
        </form> : <p className="text-slate-300">A readiness session is already saved on this device. Continue your application to avoid duplicate submissions.</p>}
      </div>
    </div>
  );
}
