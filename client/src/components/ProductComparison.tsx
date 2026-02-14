export default function ProductComparison() {
  const products = [
    "Line of Credit",
    "Term Loan",
    "Invoice Financing",
    "PO Financing",
    "Asset Based Lending",
  ];

  return (
    <div className="bg-neutral-100 py-20 text-black">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-12 text-center text-3xl font-semibold">Compare Financing Solutions</h2>

        <div className="overflow-auto">
          <table className="min-w-full rounded bg-white shadow">
            <thead>
              <tr>
                <th className="p-4 text-left">Category</th>
                {products.map((product) => (
                  <th key={product} className="p-4 text-left">
                    {product}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-4 font-medium">Best Use</td>
                <td className="p-4">Working Capital</td>
                <td className="p-4">Expansion</td>
                <td className="p-4">A/R Liquidity</td>
                <td className="p-4">Purchase Orders</td>
                <td className="p-4">Asset Growth</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
