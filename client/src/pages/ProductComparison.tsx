export default function ProductComparison() {
  const products = [
    "Term Loan",
    "Line of Credit",
    "Equipment Financing",
    "Purchase Order Financing",
    "Factoring",
    "Merchant Cash Advance",
    "Asset Based Lending",
    "Media Financing"
  ];

  const rows = [
    {
      label: "Best For",
      values: [
        "Expansion & long-term projects",
        "Working capital flexibility",
        "Equipment upgrades",
        "Fulfilling large purchase orders",
        "Unlocking invoice cash",
        "Fast revenue-based capital",
        "Leveraging balance sheet assets",
        "Funding media receivables"
      ]
    },
    {
      label: "Speed",
      values: [
        "3–10 days",
        "2–7 days",
        "3–8 days",
        "2–5 days",
        "1–4 days",
        "1–3 days",
        "5–15 days",
        "7–21 days"
      ]
    },
    {
      label: "Collateral",
      values: [
        "Often required",
        "Secured or unsecured",
        "Equipment itself",
        "Confirmed PO",
        "Invoices",
        "Sales volume",
        "Assets (AR/Inventory)",
        "Media contracts"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#0b1220] text-white px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-semibold mb-12">Product Comparison</h1>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-left p-4 border-b border-white/10">Product</th>
                {rows.map((row) => (
                  <th key={row.label} className="p-4 border-b border-white/10">
                    {row.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {products.map((product, i) => (
                <tr key={product} className="border-b border-white/5">
                  <td className="p-4 font-medium">{product}</td>
                  {rows.map((row) => (
                    <td key={row.label} className="p-4 text-white/80">
                      {row.values[i]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
