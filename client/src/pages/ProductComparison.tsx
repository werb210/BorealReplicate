export default function ProductComparison() {
  const products = [
    "Term Loan",
    "Line of Credit",
    "Equipment Financing",
    "Purchase Order Financing",
    "Factoring",
    "Merchant Cash Advance",
    "Asset Based Lending",
    "Media Financing",
  ];

  return (
    <div className="min-h-screen bg-[#0c1a2b] px-6 py-16 text-white">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-10 text-4xl font-bold">Product Comparison</h1>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-white/10">
                <th className="px-4 py-4 text-white/60">Product</th>
                <th className="px-4 py-4 text-white/60">Best For</th>
                <th className="px-4 py-4 text-white/60">Speed</th>
                <th className="px-4 py-4 text-white/60">Collateral</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product} className="border-b border-white/5 hover:bg-white/5">
                  <td className="px-4 py-4 font-semibold">{product}</td>
                  <td className="px-4 py-4">Structured financing solution</td>
                  <td className="px-4 py-4">1–10 business days</td>
                  <td className="px-4 py-4">Varies by structure</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
