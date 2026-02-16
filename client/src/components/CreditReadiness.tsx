import { useState } from "react";
import { useLocation } from "wouter";

export default function CreditReadiness() {
  const [, navigate] = useLocation();
  const [form, setForm] = useState({
    companyName: "",
    fullName: "",
    email: "",
    phone: "",
    industry: "",
    yearsInBusiness: "",
    annualRevenue: "",
    monthlyRevenue: "",
    accountsReceivable: "",
    availableCollateral: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/credit-results");
  };

  return (
    <section className="py-12">
      <form className="grid grid-cols-1 gap-8 md:grid-cols-2" onSubmit={handleSubmit}>
        <div>
          <label className="mb-2 block capitalize">Company Name</label>
          <input type="text" name="companyName" value={form.companyName} onChange={handleChange} className="w-full rounded bg-[#0b213f] p-3 text-white" required />
        </div>

        <div>
          <label className="mb-2 block capitalize">Full Name</label>
          <input type="text" name="fullName" value={form.fullName} onChange={handleChange} className="w-full rounded bg-[#0b213f] p-3 text-white" required />
        </div>

        <div>
          <label className="mb-2 block capitalize">Email</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} className="w-full rounded bg-[#0b213f] p-3 text-white" required />
        </div>

        <div>
          <label className="mb-2 block capitalize">Phone</label>
          <input type="text" name="phone" value={form.phone} onChange={handleChange} className="w-full rounded bg-[#0b213f] p-3 text-white" required />
        </div>

        <hr className="my-8 md:col-span-2" />

        <div>
          <label className="mb-2 block capitalize">Industry</label>
          <select name="industry" value={form.industry} onChange={handleChange} className="w-full rounded bg-[#0b213f] p-3 text-white" required>
            <option value="">Select industry</option>
            <option>Construction</option>
            <option>Manufacturing</option>
            <option>Retail</option>
            <option>Technology</option>
            <option>Healthcare</option>
            <option>Transportation</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block capitalize">Years in Business</label>
          <select name="yearsInBusiness" value={form.yearsInBusiness} onChange={handleChange} className="w-full rounded bg-[#0b213f] p-3 text-white" required>
            <option value="">Select range</option>
            <option>0–1</option>
            <option>1–2</option>
            <option>2–3</option>
            <option>3–5</option>
            <option>5+</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block capitalize">Annual Revenue</label>
          <select name="annualRevenue" value={form.annualRevenue} onChange={handleChange} className="w-full rounded bg-[#0b213f] p-3 text-white" required>
            <option value="">Select range</option>
            <option>Under 250k</option>
            <option>250k–500k</option>
            <option>500k–1M</option>
            <option>1M+</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block capitalize">Monthly Revenue</label>
          <select name="monthlyRevenue" value={form.monthlyRevenue} onChange={handleChange} className="w-full rounded bg-[#0b213f] p-3 text-white" required>
            <option value="">Select range</option>
            <option>Under 25k</option>
            <option>25k–50k</option>
            <option>50k–100k</option>
            <option>100k+</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block capitalize">Accounts Receivable</label>
          <select name="accountsReceivable" value={form.accountsReceivable} onChange={handleChange} className="w-full rounded bg-[#0b213f] p-3 text-white" required>
            <option value="">Select range</option>
            <option>Under 50k</option>
            <option>50k–100k</option>
            <option>100k–250k</option>
            <option>250k+</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block capitalize">Available Collateral</label>
          <select name="availableCollateral" value={form.availableCollateral} onChange={handleChange} className="w-full rounded bg-[#0b213f] p-3 text-white" required>
            <option value="">Select collateral</option>
            <option>No Collateral Available</option>
            <option>$1 to $100,000</option>
            <option>$100,001 to $250,000</option>
            <option>$250,001 to $500,000</option>
            <option>Over $500,000</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <button type="submit" className="btn-primary">
            Check Readiness
          </button>
        </div>
      </form>
    </section>
  );
}
