export type ProductSlug =
  | "line-of-credit"
  | "term-loan"
  | "invoice-factoring"
  | "equipment-financing"
  | "purchase-order-financing";

export type Product = {
  slug: ProductSlug;
  title: string;
  tagline: string;
  shortDescription: string;
  bestFor: string[];
  structureHighlights: [string, string, string];
  heroImage: string;
  ctaLabel: string;
  href: string;
};

export const products: Product[] = [
  {
    slug: "line-of-credit",
    title: "Line of Credit",
    tagline: "Revolving liquidity for fast-moving operations",
    shortDescription:
      "Flexible access to capital for payroll, supplier timing gaps, and working capital swings without over-borrowing.",
    bestFor: ["Seasonal cash flow variability", "Short-cycle operating expenses", "Businesses with recurring receivables"],
    structureHighlights: ["Draw as needed", "Reusable as repaid", "Fast access for ongoing needs"],
    heroImage: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=1400&q=80",
    ctaLabel: "Apply for Line of Credit",
    href: "/products/line-of-credit",
  },
  {
    slug: "term-loan",
    title: "Term Loan",
    tagline: "Predictable capital for expansion initiatives",
    shortDescription:
      "Installment-based funding built for growth projects, acquisitions, and strategic investments with fixed repayment discipline.",
    bestFor: ["Expansion and hiring plans", "Facility upgrades", "Defined ROI projects"],
    structureHighlights: ["Lump-sum funding", "Fixed amortization", "Longer duration options"],
    heroImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80",
    ctaLabel: "Apply for Term Loan",
    href: "/products/term-loans",
  },
  {
    slug: "invoice-factoring",
    title: "Invoice Factoring",
    tagline: "Unlock cash trapped in receivables",
    shortDescription:
      "Turn approved invoices into immediate liquidity to reduce payment lag pressure and maintain operational continuity.",
    bestFor: ["B2B companies with net terms", "Rapidly growing receivables", "Working capital stabilization"],
    structureHighlights: ["AR-backed advances", "Accelerated cash conversion", "Scales with invoice volume"],
    heroImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1400&q=80",
    ctaLabel: "Apply for Factoring",
    href: "/products/factoring",
  },
  {
    slug: "equipment-financing",
    title: "Equipment Financing",
    tagline: "Acquire assets while preserving liquidity",
    shortDescription:
      "Finance mission-critical machinery, vehicles, and tools with repayment aligned to useful life and cash generation.",
    bestFor: ["Fleet and machinery purchases", "Modernization initiatives", "Asset-heavy operators"],
    structureHighlights: ["Asset-secured", "Lifecycle-aligned terms", "Protects operating cash"],
    heroImage: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1400&q=80",
    ctaLabel: "Apply for Equipment Financing",
    href: "/products/equipment-financing",
  },
  {
    slug: "purchase-order-financing",
    title: "Purchase Order Financing",
    tagline: "Fund supplier costs tied to confirmed demand",
    shortDescription:
      "Execute larger customer orders by funding supplier deposits and production costs before final collection.",
    bestFor: ["Large confirmed purchase orders", "Supplier prepayment pressure", "Growth without working capital strain"],
    structureHighlights: ["Order-backed structure", "Supplier payment support", "Scales with demand"],
    heroImage: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1400&q=80",
    ctaLabel: "Apply for PO Financing",
    href: "/products/purchase-order-financing",
  },
];

export const productsBySlug = Object.fromEntries(products.map((product) => [product.slug, product])) as Record<ProductSlug, Product>;
