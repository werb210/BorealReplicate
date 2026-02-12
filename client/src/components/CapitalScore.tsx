import { useState } from "react";

export default function CapitalScore() {
  const [revenue, setRevenue] = useState("");
  const [years, setYears] = useState("");

  const score =
    revenue && years
      ? Math.min(
          100,
          Math.round(Number(revenue) / 10000 + Number(years) * 10)
        )
      : null;

  return (
    <div className="bg-white shadow rounded-xl p-8 max-w-2xl mx-auto">
      <h3 className="text-2xl font-bold mb-4">
        Capital Readiness Preview
      </h3>

      <input
        type="number"
        placeholder="Annual Revenue"
        className="border p-3 w-full mb-4"
        value={revenue}
        onChange={(e) => setRevenue(e.target.value)}
      />

      <input
        type="number"
        placeholder="Years in Business"
        className="border p-3 w-full mb-6"
        value={years}
        onChange={(e) => setYears(e.target.value)}
      />

      {score && (
        <div className="text-xl font-semibold">
          Estimated Strength Score: {score}/100
        </div>
      )}
    </div>
  );
}
