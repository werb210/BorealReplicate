import { FormEvent, useState } from "react";
import { INDUSTRIES } from "@/config/industries";

export default function CreditReadiness() {
  const [showScore, setShowScore] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setShowScore(true);
  }

  return (
    <section className="py-12">
      <div className="mx-auto max-w-5xl">
        {!showScore ? (
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block font-medium">What are you looking for?</label>
              <select className="w-full rounded border px-3 py-2">
                <option value="">Select</option>
                <option>Capital</option>
                <option>Equipment Financing</option>
                <option>Both Capital and Equipment</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block font-medium">How much funding are you seeking?</label>
              <input type="text" placeholder="$ Enter amount" className="w-full rounded border px-3 py-2" />
            </div>

            <div>
              <label className="mb-2 block font-medium">Business Location</label>
              <select className="w-full rounded border px-3 py-2">
                <option value="">Select</option>
                <option>Canada</option>
                <option>United States</option>
                <option>Neither</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block font-medium">Industry</label>
              <select className="w-full rounded border px-3 py-2">
                <option value="">Select industry</option>
                {INDUSTRIES.map((industry) => (
                  <option key={industry} value={industry}>
                    {industry}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-2 block font-medium">Purpose of Funds</label>
              <select className="w-full rounded border px-3 py-2">
                <option value="">Select</option>
                <option>Working Capital</option>
                <option>Expansion</option>
                <option>Inventory</option>
                <option>Equipment</option>
                <option>Marketing</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block font-medium">Years in Business</label>
              <select className="w-full rounded border px-3 py-2">
                <option value="">Select</option>
                <option>Zero</option>
                <option>Under 1 Year</option>
                <option>1 to 3 Years</option>
                <option>Over 3 Years</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block font-medium">Revenue (Last 12 Months)</label>
              <select className="w-full rounded border px-3 py-2">
                <option value="">Select</option>
                <option>Zero to $150,000</option>
                <option>$150,001 to $500,000</option>
                <option>$500,001 to $1,000,000</option>
                <option>$1,000,001 to $3,000,000</option>
                <option>Over $3,000,000</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block font-medium">Average Monthly Revenue (Last 3 Months)</label>
              <select className="w-full rounded border px-3 py-2">
                <option value="">Select</option>
                <option>Under $10,000</option>
                <option>$10,001 to $30,000</option>
                <option>$30,001 to $100,000</option>
                <option>Over $100,000</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block font-medium">Current Account Receivables</label>
              <select className="w-full rounded border px-3 py-2">
                <option>No Account Receivables</option>
                <option>Zero to $100,000</option>
                <option>$100,000 to $250,000</option>
                <option>$250,000 to $500,000</option>
                <option>$500,000 to $1,000,000</option>
                <option>$1,000,000 to $3,000,000</option>
                <option>Over $3,000,000</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block font-medium">Fixed Assets Value</label>
              <select className="w-full rounded border px-3 py-2">
                <option>Zero</option>
                <option>Zero to $100,000</option>
                <option>$100,001 to $500,000</option>
                <option>$500,001 to $1,000,000</option>
                <option>$1,000,001 to $3,000,000</option>
                <option>Over $3,000,000</option>
              </select>
            </div>

            <div className="text-right md:col-span-2">
              <button type="submit" className="rounded bg-primary px-6 py-3 text-white">
                Check Preliminary Score
              </button>
            </div>
          </form>
        ) : (
          <div className="space-y-6 text-center">
            <h3 className="text-2xl font-semibold">Preliminary Match Score</h3>
            <div className="text-5xl font-bold">82%</div>
            <a href="/apply/step-1" className="inline-block rounded bg-primary px-6 py-3 text-white">
              Continue Application
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
