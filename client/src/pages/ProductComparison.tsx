import { APPLY_URL } from "@/config/site";

type ProductCard = {
  name: string;
  summary: string;
  icon: string;
  highlights: string[];
  bestFor: string;
};

const productCards: ProductCard[] = [
  {
    name: "Line of Credit",
    summary: "Flexible revolving access for daily operating liquidity and short cash gaps.",
    icon: "↺",
    highlights: ["Draw only what you need", "Replenishes as repaid", "Good for payroll and vendor timing", "Fast access for recurring gaps"],
    bestFor: "Businesses managing variable month-to-month cash demands.",
  },
  {
    name: "Term Loan",
    summary: "Lump-sum capital with predictable repayment for strategic projects.",
    icon: "▣",
    highlights: ["Fixed repayment schedule", "Ideal for expansions", "Supports large one-time investments", "Longer amortization options"],
    bestFor: "Growth initiatives with clear ROI and defined timelines.",
  },
  {
    name: "Invoice Factoring",
    summary: "Accelerates receivable cash conversion by funding against invoices.",
    icon: "◫",
    highlights: ["Unlocks cash from AR", "Improves liquidity speed", "Reduces payment-delay pressure", "Scales with invoicing volume"],
    bestFor: "Companies with strong receivables and elongated customer terms.",
  },
  {
    name: "Equipment Financing",
    summary: "Acquire critical assets while preserving liquidity for operations.",
    icon: "⚙",
    highlights: ["Asset-backed structure", "Aligns repayment to useful life", "Protects working capital", "Supports modernization"],
    bestFor: "Operators purchasing machinery, vehicles, or specialized tools.",
  },
  {
    name: "PO Financing",
    summary: "Funds supplier costs for confirmed customer purchase orders.",
    icon: "✦",
    highlights: ["Supports larger orders", "Bridges supplier deposits", "Reduces fulfillment constraints", "Tied to verified demand"],
    bestFor: "Distributors and manufacturers scaling with purchase order demand.",
  },
];

const matrixRows = [
  { category: "Funding Speed", loc: "Fast", term: "Moderate", factoring: "Fast", equipment: "Moderate", po: "Fast" },
  { category: "Repayment Style", loc: "Revolving", term: "Fixed term", factoring: "Invoice settlement", equipment: "Asset-based term", po: "From completed sale" },
  { category: "Primary Use", loc: "Working capital", term: "Growth projects", factoring: "Receivable liquidity", equipment: "Asset acquisition", po: "Order fulfillment" },
  { category: "Collateral Profile", loc: "Varies", term: "Case-dependent", factoring: "Receivables", equipment: "Financed asset", po: "PO + buyer quality" },
  { category: "Typical Duration", loc: "12-24 months", term: "12-60 months", factoring: "Invoice cycle", equipment: "24-72 months", po: "Order duration" },
];

export default function ProductComparison() {
  return (
    <div className="bg-slate-50">
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Compare Funding Options</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">Choose the right capital product with confidence</h1>
          <p className="mt-5 text-lg text-slate-600">
            Explore each structure side by side to understand speed, use cases, and fit for your cash-flow model.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {productCards.map((card) => (
            <article
              key={card.name}
              className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-lg text-white">{card.icon}</span>
                <h2 className="text-xl font-semibold text-slate-900">{card.name}</h2>
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-600">{card.summary}</p>
              <ul className="mt-5 space-y-2 text-sm text-slate-700">
                {card.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-blue-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 rounded-lg bg-slate-100 p-3 text-sm text-slate-700">
                <span className="font-semibold text-slate-900">Best For:</span> {card.bestFor}
              </p>
              <a href={APPLY_URL} className="mt-6 inline-flex w-fit rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700">
                Apply Now
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Visual Comparison Matrix</h2>
        <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="hidden grid-cols-6 bg-slate-900 text-sm font-semibold text-white md:grid">
            <div className="p-4">Category</div>
            <div className="p-4">LOC</div>
            <div className="p-4">Term Loan</div>
            <div className="p-4">Factoring</div>
            <div className="p-4">Equipment</div>
            <div className="p-4">PO</div>
          </div>

          <div className="divide-y divide-slate-200">
            {matrixRows.map((row, idx) => (
              <div key={row.category} className={`grid gap-2 p-4 md:grid-cols-6 md:gap-0 md:p-0 ${idx % 2 === 1 ? "bg-slate-50" : "bg-white"}`}>
                <div className="font-semibold text-slate-900 md:p-4">{row.category}</div>
                <div className="rounded-md bg-slate-100 px-3 py-2 text-sm md:rounded-none md:bg-transparent md:p-4">{row.loc}</div>
                <div className="rounded-md bg-slate-100 px-3 py-2 text-sm md:rounded-none md:bg-transparent md:p-4">{row.term}</div>
                <div className="rounded-md bg-slate-100 px-3 py-2 text-sm md:rounded-none md:bg-transparent md:p-4">{row.factoring}</div>
                <div className="rounded-md bg-slate-100 px-3 py-2 text-sm md:rounded-none md:bg-transparent md:p-4">{row.equipment}</div>
                <div className="rounded-md bg-slate-100 px-3 py-2 text-sm md:rounded-none md:bg-transparent md:p-4">{row.po}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
