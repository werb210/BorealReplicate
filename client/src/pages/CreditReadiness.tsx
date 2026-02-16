import { FormEvent, useState } from "react";
import { useLocation } from "wouter";

const industryOptions = [
  "Construction",
  "Manufacturing",
  "Retail",
  "Restaurant / Food Service",
  "Technology",
  "Healthcare",
  "Transportation",
  "Professional Services",
  "Agriculture",
  "Energy",
  "Distribution",
  "Media",
];

type ReadinessForm = {
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  industry: string;
  yearsInBusiness: string;
  annualRevenue: string;
  monthlyRevenue: string;
  arBalance: string;
  collateralAvailable: string;
};

const initialForm: ReadinessForm = {
  companyName: "",
  contactName: "",
  email: "",
  phone: "",
  industry: "",
  yearsInBusiness: "",
  annualRevenue: "",
  monthlyRevenue: "",
  arBalance: "",
  collateralAvailable: "",
};

export default function CreditReadiness() {
  const [, navigate] = useLocation();
  const [form, setForm] = useState<ReadinessForm>(initialForm);

  function update<K extends keyof ReadinessForm>(key: K, value: ReadinessForm[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    navigate("/credit-results");
  }

  return (
    <main className="bg-[#020817] px-5 py-10 text-white md:px-6 md:py-12">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-3 text-3xl font-bold md:text-5xl">Credit Readiness</h1>
        <p className="text-xl font-semibold md:text-2xl">Tell us about your business</p>

        <form onSubmit={handleSubmit} className="mt-10 space-y-6 rounded-2xl border border-white/10 bg-[#08132a] p-6">
          <input
            required
            value={form.companyName}
            placeholder="Company Name"
            onChange={(e) => update("companyName", e.target.value)}
            className="w-full rounded border border-slate-700 bg-[#0b213f] p-3"
          />

          <input
            required
            value={form.contactName}
            placeholder="Full Name"
            onChange={(e) => update("contactName", e.target.value)}
            className="w-full rounded border border-slate-700 bg-[#0b213f] p-3"
          />

          <input
            required
            type="email"
            value={form.email}
            placeholder="Email"
            onChange={(e) => update("email", e.target.value)}
            className="w-full rounded border border-slate-700 bg-[#0b213f] p-3"
          />

          <input
            required
            type="tel"
            value={form.phone}
            placeholder="Phone"
            onChange={(e) => update("phone", e.target.value)}
            className="w-full rounded border border-slate-700 bg-[#0b213f] p-3"
          />

          <hr className="my-8 border-slate-700" />

          <select required value={form.industry} onChange={(e) => update("industry", e.target.value)} className="w-full rounded border border-slate-700 bg-[#0b213f] p-3">
            <option value="">Industry</option>
            {industryOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          <select required value={form.yearsInBusiness} onChange={(e) => update("yearsInBusiness", e.target.value)} className="w-full rounded border border-slate-700 bg-[#0b213f] p-3">
            <option value="">Years in business</option>
            <option>Zero</option>
            <option>Under 1 Year</option>
            <option>1 to 3 Years</option>
            <option>Over 3 Years</option>
          </select>

          <select required value={form.annualRevenue} onChange={(e) => update("annualRevenue", e.target.value)} className="w-full rounded border border-slate-700 bg-[#0b213f] p-3">
            <option value="">Annual revenue</option>
            <option>Zero to $150,000</option>
            <option>$150,001 to $500,000</option>
            <option>$500,001 to $1,000,000</option>
            <option>$1,000,001 to $3,000,000</option>
            <option>Over $3,000,000</option>
          </select>

          <select required value={form.monthlyRevenue} onChange={(e) => update("monthlyRevenue", e.target.value)} className="w-full rounded border border-slate-700 bg-[#0b213f] p-3">
            <option value="">Average monthly revenue</option>
            <option>Under $10,000</option>
            <option>$10,001 to $30,000</option>
            <option>$30,001 to $100,000</option>
            <option>Over $100,000</option>
          </select>

          <select required value={form.arBalance} onChange={(e) => update("arBalance", e.target.value)} className="w-full rounded border border-slate-700 bg-[#0b213f] p-3">
            <option value="">Account Receivables</option>
            <option>No Account Receivables</option>
            <option>Zero to $100,000</option>
            <option>$100,000 to $250,000</option>
            <option>$250,000 to $500,000</option>
            <option>$500,000 to $1,000,000</option>
            <option>$1,000,000 to $3,000,000</option>
            <option>Over $3,000,000</option>
          </select>

          <select required value={form.collateralAvailable} onChange={(e) => update("collateralAvailable", e.target.value)} className="w-full rounded border border-slate-700 bg-[#0b213f] p-3">
            <option value="">Is there available collateral for security?</option>
            <option>No Collateral Available</option>
            <option>$1 to $100,000</option>
            <option>$100,001 to $250,000</option>
            <option>$250,001 to $500,000</option>
            <option>$500,001 to $1 million</option>
            <option>Over $1 million</option>
          </select>

          <button type="submit" className="w-full rounded-lg bg-white px-8 py-3 text-black">
            Check Readiness
          </button>
        </form>
      </div>
    </main>
  );
}
