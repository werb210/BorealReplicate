export type Product = {
  slug: string;
  name: string;
  problem: string;
  howItWorks: string[];
  eligibility: string[];
  documents: string[];
};

export type Industry = {
  slug: string;
  name: string;
  challenges: string[];
  marketplaceHelp: string[];
  products: string[];
  faqs: Array<{ question: string; answer: string }>;
};

export const products: Product[] = [
  {
    slug: "term-loan",
    name: "Term Loan",
    problem: "Need predictable capital for expansion and high-ticket opportunities.",
    howItWorks: ["Submit intake once", "Boreal packages the file", "Lenders compete with structured terms"],
    eligibility: ["6+ months in business", "$250k+ annual revenue", "Commercial operations in Canada or US"],
    documents: ["Bank statements", "Financial statements", "AR/AP aging report"],
  },
  {
    slug: "line-of-credit",
    name: "Line of Credit",
    problem: "Cash flow fluctuates and working capital needs spike throughout the month.",
    howItWorks: ["One smart intake", "Marketplace lender matching", "Choose revolving option"],
    eligibility: ["Operating business bank account", "Recurring receivables", "Minimum credit profile"],
    documents: ["Recent bank statements", "Receivable summary", "Government ID"],
  },
  {
    slug: "factoring",
    name: "Factoring",
    problem: "Slow-paying invoices are constraining payroll and vendor obligations.",
    howItWorks: ["Upload invoice sample", "Lenders evaluate debtor quality", "Advance offer selection"],
    eligibility: ["B2B invoices", "Creditworthy debtors", "No major tax arrears"],
    documents: ["Invoice aging", "Customer list", "Bank statements"],
  },
  {
    slug: "equipment-finance",
    name: "Equipment Finance",
    problem: "Need machinery or fleet upgrades without draining working capital.",
    howItWorks: ["Share quote and specs", "Lender bids by risk profile", "Select best structure"],
    eligibility: ["Business use equipment", "Verifiable revenue", "Clear purchase objective"],
    documents: ["Equipment quote", "Financials", "Ownership documents"],
  },
  {
    slug: "purchase-order-finance",
    name: "Purchase Order Finance",
    problem: "Large purchase orders outpace available cash for production and fulfillment.",
    howItWorks: ["Submit PO and supplier details", "Lenders assess contract quality", "Funding is staged to suppliers"],
    eligibility: ["Confirmed purchase order", "Reliable supplier", "Positive delivery history"],
    documents: ["Purchase order", "Supplier agreement", "Bank statements"],
  },
];

export const industries: Industry[] = [
  {
    slug: "construction",
    name: "Construction",
    challenges: ["Retainage delays", "Seasonal labor ramps", "Project mobilization costs"],
    marketplaceHelp: ["Lenders with draw-cycle expertise", "Options for project-backed structures"],
    products: ["Term Loan", "Line of Credit", "Equipment Finance"],
    faqs: [
      { question: "Can Boreal support progress billing cycles?", answer: "Yes. Boreal lenders underwrite around milestone billing and retainage timing." },
      { question: "Do you fund mobilization?", answer: "Many lenders in the marketplace can structure upfront mobilization support." },
    ],
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    challenges: ["Raw material purchase timing", "Inventory carrying costs", "Equipment upgrades"],
    marketplaceHelp: ["Inventory-aware underwriting", "Options tied to receivable conversion cycles"],
    products: ["Line of Credit", "Factoring", "Equipment Finance"],
    faqs: [
      { question: "Can I finance new equipment and working capital together?", answer: "Yes, Boreal can present mixed structures through multiple lenders." },
      { question: "What if customer terms are net-60?", answer: "Factoring and revolving facilities can help bridge long receivable periods." },
    ],
  },
  {
    slug: "logistics",
    name: "Logistics",
    challenges: ["Fuel volatility", "Slow broker pay", "Fleet maintenance costs"],
    marketplaceHelp: ["Transportation-specialist lenders", "Structured offers for fleet-heavy operators"],
    products: ["Factoring", "Line of Credit", "Equipment Finance"],
    faqs: [
      { question: "Do lenders understand freight broker receivables?", answer: "Yes. Boreal includes lenders that regularly finance freight and transport receivables." },
      { question: "Can I refinance existing equipment debt?", answer: "Many marketplace lenders can evaluate consolidation and refinance requests." },
    ],
  },
  {
    slug: "other",
    name: "Other",
    challenges: ["Irregular cash conversion cycles", "Growth capital pressure", "Complex deal structures"],
    marketplaceHelp: ["Broad lender panel", "Custom structuring and layered products"],
    products: ["Term Loan", "Line of Credit", "Purchase Order Finance"],
    faqs: [
      { question: "Do you support niche B2B verticals?", answer: "Yes. Boreal can route files to lenders based on sector fit and risk appetite." },
      { question: "How fast are decisions?", answer: "Initial lender feedback typically arrives within 24-48 hours." },
    ],
  },
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getIndustryBySlug(slug: string) {
  return industries.find((industry) => industry.slug === slug);
}
