import { FormEvent, useState } from "react";
import { APPLY_URL } from "@/config/site";

type FormState = {
  name: string;
  email: string;
  phone: string;
  industry: string;
  revenue: string;
  yearsInBusiness: string;
  existingDebt: string;
};

type ResultState = {
  score: number;
  tier: "Growth Ready" | "Near Ready" | "Foundation Stage";
  recommendedProducts: string[];
};

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  industry: "",
  revenue: "",
  yearsInBusiness: "",
  existingDebt: "",
};

export default function CapitalReadiness() {
  const [form, setForm] = useState<FormState>(initialState);
  const [result, setResult] = useState<ResultState | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    const response = await fetch("/api/capital-readiness", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const payload = await response.json();
    setIsSubmitting(false);

    if (!response.ok) {
      alert(payload.error || "Unable to submit readiness intake.");
      return;
    }

    setResult({ score: payload.score, tier: payload.tier, recommendedProducts: payload.recommendedProducts });
  };

  return (
    <div className="bg-[#020817] text-white">
      <section className="mx-auto max-w-5xl px-6 py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-200">Capital Readiness</p>
        <h1 className="mt-3 text-5xl font-bold md:text-6xl">Assess Your Capital Readiness</h1>

        {!result ? (
          <form onSubmit={handleSubmit} className="mt-10 grid gap-5 rounded-3xl bg-[#0a1731] p-6 ring-1 ring-white/10 md:grid-cols-2">
            {[
              ["name", "Name"],
              ["email", "Email"],
              ["phone", "Phone"],
              ["industry", "Industry"],
              ["revenue", "Revenue"],
              ["yearsInBusiness", "Years in business"],
              ["existingDebt", "Existing debt"],
            ].map(([key, label]) => (
              <label key={key} className="text-sm">
                {label}
                <input
                  required
                  type={key === "email" ? "email" : "text"}
                  value={form[key as keyof FormState]}
                  onChange={(event) => setForm((prev) => ({ ...prev, [key]: event.target.value }))}
                  className="mt-2 w-full rounded-lg border border-white/20 bg-[#081226] px-3 py-2.5 text-white"
                />
              </label>
            ))}

            <div className="md:col-span-2">
              <button disabled={isSubmitting} className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-500 disabled:opacity-70">
                {isSubmitting ? "Submitting..." : "Submit Readiness Intake"}
              </button>
            </div>
          </form>
        ) : (
          <div className="mt-10 rounded-3xl bg-[#0a1731] p-8 ring-1 ring-white/10">
            <p className="text-sm uppercase tracking-[0.2em] text-blue-200">Your Result</p>
            <h2 className="mt-3 text-4xl font-bold">Score: {result.score}</h2>
            <p className="mt-2 inline-flex rounded-full bg-blue-600 px-4 py-1.5 text-sm font-semibold">{result.tier}</p>

            <h3 className="mt-8 text-2xl font-semibold">Recommended Products</h3>
            <ul className="mt-3 space-y-2 text-slate-200">
              {result.recommendedProducts.map((item) => (
                <li key={item} className="flex items-start gap-2"><span className="mt-1.5 h-2 w-2 rounded-full bg-blue-400" />{item}</li>
              ))}
            </ul>

            <a href={APPLY_URL} className="mt-8 inline-flex rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-500">Apply Now</a>
          </div>
        )}
      </section>
    </div>
  );
}
