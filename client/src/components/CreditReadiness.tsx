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
    existingDebt: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section className="py-12">
      <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
          <input type="text" name="yearsInBusiness" value={form.yearsInBusiness} onChange={handleChange} className="w-full p-3 rounded bg-[#0b213f] text-white" required />
        </div>

        <div>
          <label className="block mb-2 capitalize">Monthly Revenue</label>
          <input type="text" name="monthlyRevenue" value={form.monthlyRevenue} onChange={handleChange} className="w-full p-3 rounded bg-[#0b213f] text-white" required />
        </div>

        <div>
          <label className="block mb-2 capitalize">Annual Revenue</label>
          <input type="text" name="annualRevenue" value={form.annualRevenue} onChange={handleChange} className="w-full p-3 rounded bg-[#0b213f] text-white" required />
        </div>

        <div>
          <label className="block mb-2 capitalize">Accounts Receivable</label>
          <input type="text" name="arOutstanding" value={form.arOutstanding} onChange={handleChange} className="w-full p-3 rounded bg-[#0b213f] text-white" required />
        </div>

        <div>
          <label className="block mb-2 capitalize">Existing Debt</label>
          <select
            name="existingDebt"
            value={form.existingDebt}
            onChange={handleChange}
            className="w-full p-3 rounded bg-[#0b213f] text-white"
            required
          >
            <option value="">Select</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
      </form>
    </section>
  );
}
