import { FormEvent, useState } from "react";
import { INDUSTRIES } from "@/config/industries";
import { setReadinessSessionToken } from "@/utils/session";

type ReadinessResult = {
  score: number;
  tier: string;
  sessionToken: string;
};

type ReadinessForm = {
  companyName: string;
  fullName: string;
  phone: string;
  email: string;
  industry: string;
  yearsInBusiness: string;
  monthlyRevenue: string;
  annualRevenue: string;
  arOutstanding: string;
  existingDebt: string;
};

const initialForm: ReadinessForm = {
  companyName: "",
  fullName: "",
  phone: "",
  email: "",
  industry: "",
  yearsInBusiness: "",
  monthlyRevenue: "",
  annualRevenue: "",
  arOutstanding: "",
  existingDebt: "",
};

export default function CreditReadiness() {
  const [form, setForm] = useState<ReadinessForm>(initialForm);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<ReadinessResult | null>(null);

  function handleChange<K extends keyof ReadinessForm>(key: K, value: ReadinessForm[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);

    const requiredFields = Object.values(form).every((v) => v.trim() !== "");
    if (!requiredFields) {
      setError("All fields are required.");
      return;
    }

    try {
      setLoading(true);
      const response = await fetch("/api/public/readiness", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Submission failed");
      }

      setReadinessSessionToken(data.sessionToken);
      setResult({
        score: data.score,
        tier: data.tier,
        sessionToken: data.sessionToken,
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Submission failed");
    } finally {
      setLoading(false);
    }
  }

  function continueToApplication() {
    if (!result) return;
    window.location.href = `https://client.boreal.financial?readinessSession=${encodeURIComponent(result.sessionToken)}`;
  }

  return (
    <section className="py-12">
      <div className="mx-auto max-w-5xl">
        {!result ? (
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block font-medium">Company Name</label>
              <input
                type="text"
                value={form.companyName}
                onChange={(e) => handleChange("companyName", e.target.value)}
                required
                className="w-full rounded border px-3 py-2"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium">Full Name</label>
              <input
                type="text"
                value={form.fullName}
                onChange={(e) => handleChange("fullName", e.target.value)}
                required
                className="w-full rounded border px-3 py-2"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium">Phone</label>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                required
                className="w-full rounded border px-3 py-2"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium">Email</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
                required
                className="w-full rounded border px-3 py-2"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium">Industry</label>
              <select
                value={form.industry}
                onChange={(e) => handleChange("industry", e.target.value)}
                required
                className="w-full rounded border px-3 py-2"
              >
                <option value="">Select industry</option>
                {INDUSTRIES.map((industry) => (
                  <option key={industry} value={industry}>
                    {industry}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-2 block font-medium">Years in Business</label>
              <input
                type="number"
                min="0"
                value={form.yearsInBusiness}
                onChange={(e) => handleChange("yearsInBusiness", e.target.value)}
                required
                className="w-full rounded border px-3 py-2"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium">Monthly Revenue</label>
              <input
                type="text"
                value={form.monthlyRevenue}
                onChange={(e) => handleChange("monthlyRevenue", e.target.value)}
                required
                className="w-full rounded border px-3 py-2"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium">Annual Revenue</label>
              <input
                type="text"
                value={form.annualRevenue}
                onChange={(e) => handleChange("annualRevenue", e.target.value)}
                required
                className="w-full rounded border px-3 py-2"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium">Accounts Receivable Outstanding</label>
              <input
                type="text"
                value={form.arOutstanding}
                onChange={(e) => handleChange("arOutstanding", e.target.value)}
                required
                className="w-full rounded border px-3 py-2"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium">Existing Debt (Yes/No)</label>
              <select
                value={form.existingDebt}
                onChange={(e) => handleChange("existingDebt", e.target.value)}
                required
                className="w-full rounded border px-3 py-2"
              >
                <option value="">Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            {error ? <div className="text-sm text-red-500 md:col-span-2">{error}</div> : null}

            <div className="text-right md:col-span-2">
              <button type="submit" disabled={loading} className="rounded bg-primary px-6 py-3 text-white">
                {loading ? "Calculating..." : "Check Capital Readiness"}
              </button>
            </div>
          </form>
        ) : (
          <div className="space-y-6 text-center">
            <h3 className="text-2xl font-semibold">Capital Readiness Score</h3>
            <div className="text-5xl font-bold">{result.score}%</div>
            <p className="text-lg">{result.tier}</p>

            <button
              onClick={continueToApplication}
              className="inline-block rounded bg-primary px-6 py-3 text-white"
            >
              Continue Application
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
