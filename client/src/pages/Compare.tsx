export default function Compare() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-16 pt-24 text-white md:px-6">
      <h1 className="mb-8 text-4xl font-bold">Compare Financing Products</h1>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr>
              <th className="p-3 text-left">Product</th>
              <th className="p-3">Speed</th>
              <th className="p-3">Best Use</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-gray-700"><td className="p-3">Line of Credit</td><td className="p-3">Fast</td><td className="p-3">Working Capital</td></tr>
            <tr className="border-t border-gray-700"><td className="p-3">Term Loan</td><td className="p-3">Moderate</td><td className="p-3">Expansion</td></tr>
            <tr className="border-t border-gray-700"><td className="p-3">Equipment Financing</td><td className="p-3">Moderate</td><td className="p-3">Asset Purchase</td></tr>
            <tr className="border-t border-gray-700"><td className="p-3">Invoice Factoring</td><td className="p-3">Fast</td><td className="p-3">Cash Flow</td></tr>
            <tr className="border-t border-gray-700"><td className="p-3">Purchase Order Financing</td><td className="p-3">Fast</td><td className="p-3">Supplier Funding</td></tr>
            <tr className="border-t border-gray-700"><td className="p-3">Asset Based Lending</td><td className="p-3">Moderate</td><td className="p-3">Working Capital</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
