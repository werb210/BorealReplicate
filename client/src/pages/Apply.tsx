import { FormEvent, useState } from "react";
import { useLocation } from "wouter";
import { trackEvent } from "@/analytics/ga";
import { SEO } from "@/seo/SEO";
import { API_BASE_URL } from "@/config/env";

type FormData = {
  industry: string;
  revenue: string;
  timeInBusiness: string;
  fundingNeed: string;
  timeline: string;
  creditEstimate: string;
  name: string;
  email: string;
  phone: string;
};

const initialData: FormData = {
  industry: "",
  revenue: "",
  timeInBusiness: "",
  fundingNeed: "",
  timeline: "",
  creditEstimate: "",
  name: "",
  email: "",
  phone: "",
};

export default function Apply() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialData);
  const [submitted, setSubmitted] = useState(false);
  const [, navigate] = useLocation();

  const progress = (step / 3) * 100;

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    await fetch(`${API_BASE_URL}/api/apply`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    trackEvent("submit_application");
    setSubmitted(true);
    navigate("/apply?submitted=true");
  };

  if (submitted) {
    return <section className="mx-auto max-w-xl px-4 py-16"><h1 className="text-3xl font-bold">Application received</h1><p className="mt-3 text-slate-600">Thanks. Boreal is sharing your file with suitable lenders now.</p></section>;
  }

  return (
    <section className="mx-auto max-w-2xl px-4 py-10">
      <SEO title="Apply | Boreal Marketplace" description="Complete one smart intake and get matched with multiple lenders." />
      <h1 className="text-3xl font-bold">Start your application</h1>
      <div className="mt-4 h-2 rounded-full bg-slate-200">
        <div className="h-2 rounded-full bg-slate-900" style={{ width: `${progress}%` }} aria-hidden="true" />
      </div>
      <p className="mt-2 text-sm text-slate-600">Step {step} of 3</p>
      <form onSubmit={handleSubmit} className="mt-6 space-y-3">
        {step === 1 && ["industry", "revenue", "timeInBusiness"].map((key) => (
          <input key={key} required className="w-full rounded-md border px-3 py-2" placeholder={key} value={formData[key as keyof FormData]} onChange={(event) => setFormData((current) => ({ ...current, [key]: event.target.value }))} />
        ))}
        {step === 2 && ["fundingNeed", "timeline", "creditEstimate"].map((key) => (
          <input key={key} required className="w-full rounded-md border px-3 py-2" placeholder={key} value={formData[key as keyof FormData]} onChange={(event) => setFormData((current) => ({ ...current, [key]: event.target.value }))} />
        ))}
        {step === 3 && ["name", "email", "phone"].map((key) => (
          <input key={key} required className="w-full rounded-md border px-3 py-2" placeholder={key} value={formData[key as keyof FormData]} onChange={(event) => setFormData((current) => ({ ...current, [key]: event.target.value }))} />
        ))}
        <div className="flex flex-col gap-2 pt-2 sm:flex-row">
          {step > 1 ? <button type="button" className="w-full rounded-md border px-4 py-2" onClick={() => setStep((current) => current - 1)}>Back</button> : null}
          {step < 3 ? <button type="button" className="w-full rounded-md bg-slate-900 px-4 py-2 font-semibold text-white" onClick={() => setStep((current) => current + 1)}>Continue</button> : <button type="submit" className="w-full rounded-md bg-slate-900 px-4 py-2 font-semibold text-white">Submit</button>}
        </div>
      </form>
    </section>
  );
}
