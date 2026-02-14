export type ProductSlug =
  | "line-of-credit"
  | "term-loan"
  | "equipment-financing"
  | "invoice-factoring"
  | "po-financing"
  | "asset-based-lending";

export type Product = {
  slug: ProductSlug;
  name: string;
  title: string;
  image: string;
  heroImage: string;
  description: string;
  shortDescription: string;
  bestFor: string[];
  terms: string;
  rates: string;
  why: string;
  tagline: string;
  structureHighlights: [string, string, string];
  ctaLabel: string;
  href: string;
};

export const products: Product[] = [
  {
    slug: "line-of-credit",
    name: "Line of Credit",
    title: "Line of Credit",
    image: "/images/business-handshake-close-up.jpg",
    heroImage: "/images/business-handshake-close-up.jpg",
    description: "Flexible revolving working capital facility.",
    shortDescription: "Flexible revolving working capital facility.",
    bestFor: ["Seasonal cash flow swings and payroll timing gaps."],
    terms: "Revolving facility, renewable annually.",
    rates: "Prime + margin or structured non-bank rate.",
    why: "Allows fast access to capital without over-borrowing.",
    tagline: "Revolving liquidity for fast-moving operations",
    structureHighlights: ["Draw as needed", "Reusable as repaid", "Fast access for ongoing needs"],
    ctaLabel: "Learn More",
    href: "/products/line-of-credit",
  },
  {
    slug: "term-loan",
    name: "Term Loan",
    title: "Term Loan",
    image: "/images/premium_photo-1661962673986-dcffa2a05e07.jpg",
    heroImage: "/images/premium_photo-1661962673986-dcffa2a05e07.jpg",
    description: "Structured installment funding.",
    shortDescription: "Structured installment funding.",
    bestFor: ["Expansion, hiring, and strategic initiatives."],
    terms: "1–5 year amortization.",
    rates: "Fixed or structured rate depending on risk profile.",
    why: "Predictable repayment and structured growth capital.",
    tagline: "Predictable capital for expansion initiatives",
    structureHighlights: ["Lump-sum funding", "Fixed amortization", "Longer duration options"],
    ctaLabel: "Learn More",
    href: "/products/term-loan",
  },
  {
    slug: "equipment-financing",
    name: "Equipment Financing",
    title: "Equipment Financing",
    image: "/images/Take possession of your new manufacturing equipment.jpeg",
    heroImage: "/images/Take possession of your new manufacturing equipment.jpeg",
    description: "Finance machinery, vehicles, and assets.",
    shortDescription: "Finance machinery, vehicles, and assets.",
    bestFor: ["Asset-heavy operators."],
    terms: "Aligned to useful life of equipment.",
    rates: "Fixed rate.",
    why: "Preserves liquidity while acquiring assets.",
    tagline: "Acquire assets while preserving liquidity",
    structureHighlights: ["Asset-secured", "Lifecycle-aligned terms", "Protects operating cash"],
    ctaLabel: "Learn More",
    href: "/products/equipment-financing",
  },
  {
    slug: "invoice-factoring",
    name: "Invoice Factoring",
    title: "Invoice Factoring",
    image: "/images/factoring-financing.jpeg",
    heroImage: "/images/factoring-financing.jpeg",
    description: "Turn receivables into immediate liquidity.",
    shortDescription: "Turn receivables into immediate liquidity.",
    bestFor: ["B2B companies with net terms."],
    terms: "Facility based on receivable aging.",
    rates: "Fee-based structure.",
    why: "Improves cash cycle stability.",
    tagline: "Unlock cash trapped in receivables",
    structureHighlights: ["AR-backed advances", "Accelerated cash conversion", "Scales with invoice volume"],
    ctaLabel: "Learn More",
    href: "/products/invoice-factoring",
  },
  {
    slug: "po-financing",
    name: "Purchase Order Financing",
    title: "Purchase Order Financing",
    image: "/images/An image of two groups of business people shaking hands over a meeting table celebrating signing a deal to merge.jpeg.webp",
    heroImage:
      "/images/An image of two groups of business people shaking hands over a meeting table celebrating signing a deal to merge.jpeg.webp",
    description: "Fund supplier costs tied to confirmed demand.",
    shortDescription: "Fund supplier costs tied to confirmed demand.",
    bestFor: ["Large confirmed purchase orders."],
    terms: "Transaction-based.",
    rates: "Structured margin per transaction.",
    why: "Execute growth without working capital strain.",
    tagline: "Fund supplier costs tied to confirmed demand",
    structureHighlights: ["Order-backed structure", "Supplier payment support", "Scales with demand"],
    ctaLabel: "Learn More",
    href: "/products/po-financing",
  },
  {
    slug: "asset-based-lending",
    name: "Asset Based Lending",
    title: "Asset Based Lending",
    image: "/images/tohcyytw4kftsfv6ivr2.jpg",
    heroImage: "/images/tohcyytw4kftsfv6ivr2.jpg",
    description: "Borrow against business assets.",
    shortDescription: "Borrow against business assets.",
    bestFor: ["Inventory and receivable-heavy businesses."],
    terms: "Borrowing base facility.",
    rates: "Prime + structured spread.",
    why: "Unlock liquidity from balance sheet assets.",
    tagline: "Borrow against business assets to unlock working capital",
    structureHighlights: ["Asset-backed facilities", "Flexible borrowing base", "Scalable with asset growth"],
    ctaLabel: "Learn More",
    href: "/products/asset-based-lending",
  },
];

export default products;
export const productsBySlug = Object.fromEntries(products.map((product) => [product.slug, product])) as Record<ProductSlug, Product>;
