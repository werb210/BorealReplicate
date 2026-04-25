import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "@/api/client";
import { estimateCommissionValue, trackConversion, trackEvent, trackLeadProfile } from "@/lib/analytics";

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  industry: string;
  yearsInBusiness: string;
  annualRevenue: string;
  monthlyRevenue: string;
  arBalance: string;
  collateral: string;
};

const initialState: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  industry: "",
  yearsInBusiness: "",
  annualRevenue: "",
  monthlyRevenue: "",
  arBalance: "",
  collateral: "",
};

export default function CreditReadiness() {
  const navigate = useNavigate();
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "sending">("idle");
  const [error, setError] = useState("");

  async function submit(e: FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    try {
      const response = await api("/api/credit-readiness", {
        method: "POST",
        body: JSON.stringify(form),
      });

      trackEvent("funnel_stage", { stage: "credit_readiness_completed" });
      trackConversion("qualified_lead", {
        source: "website",
        estimated_commission_value: estimateCommissionValue(form.annualRevenue),
        capital_range: form.annualRevenue,
      });

      trackLeadProfile({
        strength: "moderate",
        industry: form.industry,
        capital_range: form.annualRevenue,
        collateral_type: form.collateral,
      });

      const params = new URLSearchParams();
      if (typeof response === "object" && response) {
        Object.entries(response as Record<string, unknown>).forEach(([k, v]) => {
          if (v !== undefined && v !== null) params.set(k, String(v));
        });
      }

      navigate(`/credit-readiness/results${params.toString() ? `?${params.toString()}` : ""}`);
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Could not submit. Please try again.");
    } finally {
      setStatus("idle");
    }
  }

  return (
    <section className="container-bf py-16 text-white">
      <h1 className="text-4xl font-semibold md:text-5xl">Credit Readiness</h1>
      <p className="mt-2 text-white/80">Tell us about your business and we’ll assess your readiness.</p>

      <form onSubmit={submit} className="mt-8 grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 md:grid-cols-2">
        <Input label="First Name" value={form.firstName} onChange={(v) => setForm((f) => ({ ...f, firstName: v }))} required />
        <Input label="Last Name" value={form.lastName} onChange={(v) => setForm((f) => ({ ...f, lastName: v }))} required />
        <Input label="Email" type="email" value={form.email} onChange={(v) => setForm((f) => ({ ...f, email: v }))} required />
        <Input label="Phone" value={form.phone} onChange={(v) => setForm((f) => ({ ...f, phone: v }))} required />
        <Input label="Industry" value={form.industry} onChange={(v) => setForm((f) => ({ ...f, industry: v }))} required />
        <Input label="Years In Business" value={form.yearsInBusiness} onChange={(v) => setForm((f) => ({ ...f, yearsInBusiness: v }))} required />
        <Input label="Annual Revenue" value={form.annualRevenue} onChange={(v) => setForm((f) => ({ ...f, annualRevenue: v }))} required />
        <Input label="Monthly Revenue" value={form.monthlyRevenue} onChange={(v) => setForm((f) => ({ ...f, monthlyRevenue: v }))} required />
        <Input label="AR Balance" value={form.arBalance} onChange={(v) => setForm((f) => ({ ...f, arBalance: v }))} required />
        <Input label="Collateral" value={form.collateral} onChange={(v) => setForm((f) => ({ ...f, collateral: v }))} required />

        <button type="submit" disabled={status === "sending"} className="mt-2 w-fit rounded-md bg-blue-500 px-6 py-3 text-white hover:bg-blue-600 disabled:opacity-70 md:col-span-2">
          {status === "sending" ? "Submitting…" : "Check Readiness"}
        </button>

        {error ? <div className="rounded-md border border-rose-500/30 bg-rose-500/10 p-3 text-rose-300 md:col-span-2">{error}</div> : null}
      </form>
    </section>
  );
}

function Input({ label, value, onChange, type = "text", required }: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="grid gap-1">
      <span className="text-sm text-white/80">{label}{required ? " *" : ""}</span>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-md border border-white/15 bg-white/5 p-3 text-white"
      />
    </label>
  );
}
