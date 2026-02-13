export default function ProductComparison() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-semibold mb-10">Compare Financing Products</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-white/20">
          <thead className="bg-gray-100 text-black">
            <tr>
              <th className="p-4 text-left">Product</th>
              <th className="p-4">Speed</th>
              <th className="p-4">Best Use</th>
              <th className="p-4">Repayment</th>
              <th className="p-4">Collateral</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-white/20">
              <td className="p-4 font-medium">Line of Credit</td>
              <td className="p-4">Fast</td>
              <td className="p-4">Working Capital</td>
              <td className="p-4">Flexible</td>
              <td className="p-4">Sometimes</td>
            </tr>

            <tr className="border-t border-white/20">
              <td className="p-4 font-medium">Term Loan</td>
              <td className="p-4">Moderate</td>
              <td className="p-4">Expansion</td>
              <td className="p-4">Fixed</td>
              <td className="p-4">Often</td>
            </tr>

            <tr className="border-t border-white/20">
              <td className="p-4 font-medium">Equipment Financing</td>
              <td className="p-4">Moderate</td>
              <td className="p-4">Asset Purchase</td>
              <td className="p-4">Fixed</td>
              <td className="p-4">Equipment</td>
            </tr>

            <tr className="border-t border-white/20">
              <td className="p-4 font-medium">A/R Financing</td>
              <td className="p-4">Fast</td>
              <td className="p-4">Cash Flow</td>
              <td className="p-4">Variable</td>
              <td className="p-4">Receivables</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
