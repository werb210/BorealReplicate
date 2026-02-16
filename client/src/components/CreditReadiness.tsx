import { useState } from "react";

export default function CreditReadiness() {
  const [form, setForm] = useState({
    companyName: "",
    fullName: "",
    phone: "",
    email: "",
    industry: "",
    yearsInBusiness: "",
    monthlyRevenue: "",
    annualRevenue: "",
    arOutstanding: "",
    collateralAvailable: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-12">
      <form className="grid grid-cols-1 gap-8 md:grid-cols-2" onSubmit={handleSubmit}>
        <div>
          <label className="block mb-2 capitalize">Company Name</label>
          <input type="text" name="companyName" value={form.companyName} onChange={handleChange} className="w-full p-3 rounded bg-[#0b213f] text-white" required />
        </div>

        <div>
          <label className="block mb-2 capitalize">Full Name</label>
          <input type="text" name="fullName" value={form.fullName} onChange={handleChange} className="w-full p-3 rounded bg-[#0b213f] text-white" required />
        </div>

        <div>
          <label className="block mb-2 capitalize">Phone</label>
          <input type="text" name="phone" value={form.phone} onChange={handleChange} className="w-full p-3 rounded bg-[#0b213f] text-white" required />
        </div>

        <div>
          <label className="block mb-2 capitalize">Email</label>
          <input type="text" name="email" value={form.email} onChange={handleChange} className="w-full p-3 rounded bg-[#0b213f] text-white" required />
        </div>

        <div>
          <label className="block mb-2 capitalize">Industry</label>
          <select
            name="industry"
            value={form.industry}
            onChange={handleChange}
            className="w-full p-3 rounded bg-[#0b213f] text-white"
            required
          >
            <option value="">Select industry</option>
            <option>Construction</option>
            <option>Manufacturing</option>
            <option>Retail</option>
            <option>Technology</option>
            <option>Healthcare</option>
            <option>Transportation</option>
            <option>Professional Services</option>
            <option>Agriculture</option>
            <option>Energy</option>
            <option>Distribution</option>
            <option>Media</option>
          </select>
        </div>

        <div>
          <label className="block mb-2 capitalize">Years In Business</label>
          <select name="yearsInBusiness" value={form.yearsInBusiness} onChange={handleChange} className="w-full p-3 rounded bg-[#0b213f] text-white" required>
            <option value="">Select range</option>
            <option>0–1</option>
            <option>1–2</option>
            <option>2–3</option>
            <option>3–5</option>
            <option>5–10</option>
            <option>10+</option>
          </select>
        </div>

        <div>
          <label className="block mb-2 capitalize">Monthly Revenue</label>
          <select name="monthlyRevenue" value={form.monthlyRevenue} onChange={handleChange} className="w-full p-3 rounded bg-[#0b213f] text-white" required>
            <option value="">Select range</option>
            <option>Under 25k</option>
            <option>25k–50k</option>
            <option>50k–100k</option>
            <option>100k–250k</option>
            <option>250k+</option>
          </select>
        </div>

        <div>
          <label className="block mb-2 capitalize">Annual Revenue</label>
          <select name="annualRevenue" value={form.annualRevenue} onChange={handleChange} className="w-full p-3 rounded bg-[#0b213f] text-white" required>
            <option value="">Select range</option>
            <option>Under 250k</option>
            <option>250k–500k</option>
            <option>500k–1M</option>
            <option>1M–5M</option>
            <option>5M+</option>
          </select>
        </div>

        <div>
          <label className="block mb-2 capitalize">Accounts Receivable Balance</label>
          <select name="arOutstanding" value={form.arOutstanding} onChange={handleChange} className="w-full p-3 rounded bg-[#0b213f] text-white" required>
            <option value="">Select range</option>
            <option>Under 50k</option>
            <option>50k–100k</option>
            <option>100k–250k</option>
            <option>250k–500k</option>
            <option>500k+</option>
          </select>
        </div>

        <div>
          <label className="block mb-2 capitalize">Collateral Available</label>
          <select
            name="collateralAvailable"
            value={form.collateralAvailable}
            onChange={handleChange}
            className="w-full p-3 rounded bg-[#0b213f] text-white"
            required
          >
            <option value="">Is there available collateral for security?</option>
            <option>No Collateral Available</option>
            <option>$1 to $100,000</option>
            <option>$100,001 to $250,000</option>
            <option>$250,001 to $500,000</option>
            <option>$500,001 to $1 million</option>
            <option>Over $1 million</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <button type="submit" className="mt-6 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700">
            Check Readiness
          </button>
          {submitted ? <p className="mt-4 text-green-300">Readiness form submitted successfully.</p> : null}
        </div>
      </form>
    </section>
  );
}
