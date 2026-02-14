export default function ProductComparison() {
  return (
    <div className="mx-auto max-w-6xl px-6 pt-28 text-white">
      <h1 className="mb-10 text-4xl font-bold">Compare Financing Products</h1>

      <div className="overflow-x-auto">
        <table className="w-full border border-white/20">
          <thead className="bg-white text-black">
            <tr>
              <th className="p-4 text-left">Product</th>
              <th className="p-4 text-left">Speed</th>
              <th className="p-4 text-left">Best Use</th>
              <th className="p-4 text-left">Repayment</th>
              <th className="p-4 text-left">Collateral</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-white/20">
              <td className="p-4">Line of Credit</td>
              <td className="p-4">Fast</td>
              <td className="p-4">Working Capital</td>
              <td className="p-4">Flexible</td>
              <td className="p-4">Sometimes</td>
            </tr>
            <tr className="border-t border-white/20">
              <td className="p-4">Term Loan</td>
              <td className="p-4">Moderate</td>
              <td className="p-4">Expansion</td>
              <td className="p-4">Fixed</td>
              <td className="p-4">Often</td>
            </tr>
            <tr className="border-t border-white/20">
              <td className="p-4">Equipment Financing</td>
              <td className="p-4">Moderate</td>
              <td className="p-4">Asset Purchase</td>
              <td className="p-4">Fixed</td>
              <td className="p-4">Equipment</td>
            </tr>
            <tr className="border-t border-white/20">
              <td className="p-4">Invoice Factoring</td>
              <td className="p-4">Fast</td>
              <td className="p-4">Cash Flow</td>
              <td className="p-4">Variable</td>
              <td className="p-4">Receivables</td>
            </tr>
            <tr className="border-t border-white/20">
              <td className="p-4">Purchase Order Financing</td>
              <td className="p-4">Fast</td>
              <td className="p-4">Supplier Funding</td>
              <td className="p-4">Transaction</td>
              <td className="p-4">Confirmed PO</td>
            </tr>
            <tr className="border-t border-white/20">
              <td className="p-4">Asset Based Lending</td>
              <td className="p-4">Moderate</td>
              <td className="p-4">Balance Sheet Leverage</td>
              <td className="p-4">Flexible</td>
              <td className="p-4">Inventory + AR</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
