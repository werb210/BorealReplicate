export default function ProductComparison() {
  return (
    <div className="bg-black px-4 pb-16 pt-24 text-white">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-8 text-3xl font-semibold">Compare Financing Solutions</h2>

        <div className="overflow-x-auto rounded-xl border border-white/10 bg-[#0a1731] p-4">
          <table className="w-full text-left text-white">
            <thead>
              <tr>
                <th className="p-3">Product</th>
                <th className="p-3">Speed</th>
                <th className="p-3">Best Use</th>
                <th className="p-3">Repayment</th>
                <th className="p-3">Collateral</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-white/10">
                <td className="p-3">Line of Credit</td>
                <td className="p-3">Fast</td>
                <td className="p-3">Working Capital</td>
                <td className="p-3">Flexible</td>
                <td className="p-3">Unsecured/Secured</td>
              </tr>
              <tr className="border-t border-white/10">
                <td className="p-3">PO Financing</td>
                <td className="p-3">Moderate</td>
                <td className="p-3">Purchase Orders</td>
                <td className="p-3">Per Transaction</td>
                <td className="p-3">Invoice Backed</td>
              </tr>
              <tr className="border-t border-white/10">
                <td className="p-3">Asset-Based Lending</td>
                <td className="p-3">Structured</td>
                <td className="p-3">Large Facilities</td>
                <td className="p-3">Revolving</td>
                <td className="p-3">Receivables / Assets</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
