const comparisonProducts = [
  {
    title: "Term Loan",
    bestFor: "Planned growth and long-term projects",
    structure: "Lump-sum funding with fixed repayment schedule",
    speed: "3-10 business days",
    collateral: "Often required depending on size and profile",
    idealUseCase: "Expansion, acquisitions, refinancing existing debt",
  },
  {
    title: "Line of Credit",
    bestFor: "Ongoing working capital flexibility",
    structure: "Revolving facility you draw from as needed",
    speed: "2-7 business days",
    collateral: "Can be secured or unsecured",
    idealUseCase: "Managing cash flow cycles and short-term operating gaps",
  },
  {
    title: "Equipment Financing",
    bestFor: "Purchasing or upgrading business-critical equipment",
    structure: "Asset-backed financing aligned to equipment life",
    speed: "3-8 business days",
    collateral: "Primarily the equipment being financed",
    idealUseCase: "Machinery, vehicles, production tools, technology upgrades",
  },
  {
    title: "Purchase Order Financing",
    bestFor: "Fulfilling large confirmed purchase orders",
    structure: "Transaction-based advance tied to supplier payments",
    speed: "2-5 business days",
    collateral: "Strength of purchase order and end buyer",
    idealUseCase: "When demand outpaces immediate cash on hand",
  },
  {
    title: "Factoring",
    bestFor: "Unlocking cash from unpaid invoices",
    structure: "Sell receivables at a discount for immediate liquidity",
    speed: "1-4 business days",
    collateral: "Accounts receivable",
    idealUseCase: "B2B businesses with strong invoice volume and payment terms",
  },
  {
    title: "Merchant Cash Advance (MCA)",
    bestFor: "Revenue-based businesses needing fast access to capital",
    structure: "Advance repaid from daily or weekly card/deposit sales",
    speed: "1-3 business days",
    collateral: "Typically unsecured, based on sales performance",
    idealUseCase: "Short-term growth opportunities and urgent operating needs",
  },
  {
    title: "Asset Based Lending",
    bestFor: "Businesses with strong collateral assets",
    structure: "Credit facility borrowing against eligible assets",
    speed: "5-15 business days",
    collateral: "Receivables, inventory, equipment, or other assets",
    idealUseCase: "Scaling operations with larger borrowing requirements",
  },
  {
    title: "Media Financing",
    bestFor: "Campaign funding and media-driven growth",
    structure: "Structured capital tied to advertising and receivables",
    speed: "3-7 business days",
    collateral: "Contracts, receivables, or campaign assets",
    idealUseCase: "Agencies, publishers, and brands managing campaign cash flow",
  },
];

export default function ProductComparison() {
  return (
    <main className="mx-auto max-w-7xl px-5 pb-16 pt-12 text-white md:px-6">
      <header className="max-w-3xl">
        <h1 className="text-4xl font-bold md:text-5xl">Product Comparison</h1>
        <p className="mt-4 text-slate-300">
          Compare structured financing options side-by-side to identify the best path for your timing,
          collateral profile, and growth goals.
        </p>
      </header>

      <section className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {comparisonProducts.map((product) => (
          <article key={product.title} className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
            <h2 className="text-2xl font-semibold text-white">{product.title}</h2>

            <dl className="mt-4 space-y-3 text-sm text-slate-300">
              <div>
                <dt className="font-semibold text-slate-100">Best For</dt>
                <dd>{product.bestFor}</dd>
              </div>
              <div>
                <dt className="font-semibold text-slate-100">Structure</dt>
                <dd>{product.structure}</dd>
              </div>
              <div>
                <dt className="font-semibold text-slate-100">Speed</dt>
                <dd>{product.speed}</dd>
              </div>
              <div>
                <dt className="font-semibold text-slate-100">Collateral</dt>
                <dd>{product.collateral}</dd>
              </div>
              <div>
                <dt className="font-semibold text-slate-100">Ideal Use Case</dt>
                <dd>{product.idealUseCase}</dd>
              </div>
            </dl>
          </article>
        ))}
      </section>

      <section className="mt-14 rounded-2xl border border-blue-300/30 bg-blue-950/40 p-8 text-center">
        <h2 className="text-2xl font-semibold">Compare Your Options With an Advisor</h2>
        <p className="mt-2 text-slate-200">Get a tailored recommendation based on your business model and current financing objectives.</p>
        <a href="/apply" className="mt-6 inline-flex rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
          Start Application
        </a>
      </section>
    </main>
  );
}
