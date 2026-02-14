export type ProductSlug =
  | "line-of-credit"
  | "term-loan"
  | "equipment-financing"
  | "invoice-factoring"
  | "purchase-order-financing"
  | "asset-based-lending";

export type Product = {
  slug: ProductSlug;
  title: string;
  name: string;
  image: string;
  summary: string;
  term: string;
  rates: string;
  description: string;
  shortDescription: string;
  terms: string;
  bestFor: string[];
  why: string;
  tagline: string;
  structureHighlights: [string, string, string];
  ctaLabel: string;
  href: string;
  heroImage: string;
};

export const products: Product[] = [
  {
    slug: "line-of-credit",
    title: "Line of Credit",
    name: "Line of Credit",
    image: "/images/products/loc.jpg",
    summary: "Flexible working capital facility.",
    term: "Revolving",
    rates: "From Prime + spread",
    description: "Flexible working capital facility.",
    shortDescription: "Flexible working capital facility.",
    terms: "Revolving",
    bestFor: ["Working capital and seasonal cash flow."],
    why: "Provides flexible liquidity that can be drawn and repaid as needed.",
    tagline: "Revolving liquidity for fast-moving operations",
    structureHighlights: ["Draw as needed", "Reusable as repaid", "Fast access for ongoing needs"],
    ctaLabel: "Learn More",
    href: "/products/line-of-credit",
    heroImage: "/images/products/loc.jpg",
  },
  {
    slug: "term-loan",
    title: "Term Loan",
    name: "Term Loan",
    image: "/images/products/term.jpg",
    summary: "Structured growth and expansion capital.",
    term: "12–60 months",
    rates: "Fixed or variable",
    description: "Structured growth and expansion capital.",
    shortDescription: "Structured growth and expansion capital.",
    terms: "12–60 months",
    bestFor: ["Expansion, hiring, and strategic initiatives."],
    why: "Predictable repayment structure supports planned growth.",
    tagline: "Predictable capital for expansion initiatives",
    structureHighlights: ["Lump-sum funding", "Fixed amortization", "Longer duration options"],
    ctaLabel: "Learn More",
    href: "/products/term-loan",
    heroImage: "/images/products/term.jpg",
  },
  {
    slug: "equipment-financing",
    title: "Equipment Financing",
    name: "Equipment Financing",
    image: "/images/products/equipment.jpg",
    summary: "Finance mission-critical assets.",
    term: "24–84 months",
    rates: "Asset-backed",
    description: "Finance mission-critical assets.",
    shortDescription: "Finance mission-critical assets.",
    terms: "24–84 months",
    bestFor: ["Asset-heavy operators and equipment upgrades."],
    why: "Preserves working capital while acquiring productive assets.",
    tagline: "Acquire assets while preserving liquidity",
    structureHighlights: ["Asset-secured", "Lifecycle-aligned terms", "Protects operating cash"],
    ctaLabel: "Learn More",
    href: "/products/equipment-financing",
    heroImage: "/images/products/equipment.jpg",
  },
  {
    slug: "invoice-factoring",
    title: "Invoice Factoring",
    name: "Invoice Factoring",
    image: "/images/products/factoring.jpg",
    summary: "Convert receivables to liquidity.",
    term: "Ongoing",
    rates: "Discount-based",
    description: "Convert receivables to liquidity.",
    shortDescription: "Convert receivables to liquidity.",
    terms: "Ongoing",
    bestFor: ["B2B companies with net terms."],
    why: "Accelerates cash conversion by unlocking value from open invoices.",
    tagline: "Unlock cash trapped in receivables",
    structureHighlights: ["AR-backed advances", "Accelerated cash conversion", "Scales with invoice volume"],
    ctaLabel: "Learn More",
    href: "/products/invoice-factoring",
    heroImage: "/images/products/factoring.jpg",
  },
  {
    slug: "purchase-order-financing",
    title: "Purchase Order Financing",
    name: "Purchase Order Financing",
    image: "/images/products/po.jpg",
    summary: "Fund supplier costs tied to confirmed demand.",
    term: "Per transaction",
    rates: "Transaction-based",
    description: "Fund supplier costs tied to confirmed demand.",
    shortDescription: "Fund supplier costs tied to confirmed demand.",
    terms: "Per transaction",
    bestFor: ["Large confirmed purchase orders."],
    why: "Helps fulfill larger orders without stressing operating cash.",
    tagline: "Fund supplier costs tied to confirmed demand",
    structureHighlights: ["Order-backed structure", "Supplier payment support", "Scales with demand"],
    ctaLabel: "Learn More",
    href: "/products/purchase-order-financing",
    heroImage: "/images/products/po.jpg",
  },
  {
    slug: "asset-based-lending",
    title: "Asset Based Lending",
    name: "Asset Based Lending",
    image: "/images/products/abl.jpg",
    summary: "Borrow against business assets.",
    term: "Revolving",
    rates: "Risk-adjusted",
    description: "Borrow against business assets.",
    shortDescription: "Borrow against business assets.",
    terms: "Revolving",
    bestFor: ["Inventory and receivable-heavy businesses."],
    why: "Unlocks liquidity based on the strength of balance sheet assets.",
    tagline: "Borrow against business assets",
    structureHighlights: ["Asset-backed facilities", "Flexible borrowing base", "Scalable with asset growth"],
    ctaLabel: "Learn More",
    href: "/products/asset-based-lending",
    heroImage: "/images/products/abl.jpg",
  },
];

export default products;
export const productsBySlug = Object.fromEntries(products.map((product) => [product.slug, product])) as Record<ProductSlug, Product>;
