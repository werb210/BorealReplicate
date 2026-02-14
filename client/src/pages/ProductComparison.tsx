const products = [
  {
    name: "Line of Credit",
    speed: "Fast",
    bestUse: "Working Capital",
    repayment: "Flexible",
    collateral: "Sometimes",
  },
  {
    name: "Term Loan",
    speed: "Moderate",
    bestUse: "Expansion",
    repayment: "Fixed",
    collateral: "Often",
  },
  {
    name: "Equipment Financing",
    speed: "Moderate",
    bestUse: "Asset Purchase",
    repayment: "Fixed",
    collateral: "Equipment",
  },
  {
    name: "Accounts Receivable Financing",
    speed: "Fast",
    bestUse: "Cash Flow",
    repayment: "Variable",
    collateral: "Receivables",
  },
  {
    name: "PO Financing",
    speed: "Moderate",
    bestUse: "Large Purchase Orders",
    repayment: "Transaction",
    collateral: "Confirmed PO",
  },
  {
    name: "Asset Based Lending",
    speed: "Moderate",
    bestUse: "Leverage Assets",
    repayment: "Flexible",
    collateral: "Inventory + AR",
  },
];

export default function ProductComparison() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-16 pt-12 text-white md:px-6">
      <h1 className="mb-8 text-4xl font-bold">Compare Financing Products</h1>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr>
              <th className="p-3 text-left"></th>
              <th className="p-3">Speed</th>
              <th className="p-3">Best Use</th>
              <th className="p-3">Repayment</th>
              <th className="p-3">Collateral</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.name} className="border-t border-gray-700">
                <td className="p-3 font-semibold">{p.name}</td>
                <td className="p-3">{p.speed}</td>
                <td className="p-3">{p.bestUse}</td>
                <td className="p-3">{p.repayment}</td>
                <td className="p-3">{p.collateral}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
