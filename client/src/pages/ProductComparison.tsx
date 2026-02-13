const rows = [
  { feature: "Speed", loc: "Fast", term: "Moderate", factoring: "Fast", equipment: "Moderate", po: "Fast" },
  { feature: "Best Use", loc: "Working capital", term: "Growth projects", factoring: "Invoice liquidity", equipment: "Asset purchases", po: "Order fulfillment" },
  { feature: "Repayment", loc: "Revolving", term: "Fixed schedule", factoring: "From invoice settlement", equipment: "Term-based", po: "From completed sale" },
  { feature: "Collateral", loc: "Varies", term: "Can be required", factoring: "Receivables", equipment: "Financed asset", po: "Purchase order + buyer quality" },
];

export default function ProductComparison() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="mb-6 text-4xl font-semibold">Product Comparison</h1>
      <div className="overflow-x-auto rounded-lg border">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-slate-100">
            <tr>
              <th className="p-3">Category</th><th className="p-3">LOC</th><th className="p-3">Term Loan</th><th className="p-3">Factoring</th><th className="p-3">Equipment</th><th className="p-3">PO</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.feature} className="border-t">
                <td className="p-3 font-medium">{row.feature}</td>
                <td className="p-3">{row.loc}</td>
                <td className="p-3">{row.term}</td>
                <td className="p-3">{row.factoring}</td>
                <td className="p-3">{row.equipment}</td>
                <td className="p-3">{row.po}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
