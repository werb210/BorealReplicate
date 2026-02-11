export type Product = {
  slug: string;
  name: string;
  heroImage: string;
  intro: string;
  bestFor: string[];
  howItWorks: string[];
  requirements: string[];
};

export type Industry = {
  slug: string;
  name: string;
  overview: string;
  examples: string[];
};

export const products: Product[] = [
  {
    slug: "term-loans",
    name: "Term Loans",
    heroImage: "/images/business-handshake-close-up.jpg",
    intro: "Fixed or variable financing for growth investments, refinancing, and major capital expenditures.",
    bestFor: ["Expansion projects", "High-ticket inventory or contracts", "Debt consolidation with predictable terms"],
    howItWorks: [
      "Complete one application for a full credit package",
      "Boreal shares your file with multiple term-loan lenders",
      "Compare repayment schedules and total cost before you choose",
    ],
    requirements: ["6+ months in business", "Operating revenue history", "Business bank account in Canada or U.S."],
  },
  {
    slug: "lines-of-credit",
    name: "Lines of Credit",
    heroImage: "/images/pngtree-diverse-team-of-professionals-collaborating-in-a-modern-office-setting-with-image_20052579.webp",
    intro: "Flexible revolving capital for payroll, inventory, and short-term operating gaps.",
    bestFor: ["Seasonal swings", "Recurring working-capital needs", "Businesses with steady receivables"],
    howItWorks: [
      "Submit one intake with your current financial profile",
      "Marketplace lenders review and propose revolving limits",
      "Draw and repay as needed to restore available credit",
    ],
    requirements: ["Business chequing account", "Recent bank statements", "Baseline business credit and operating history"],
  },
  {
    slug: "factoring",
    name: "Factoring",
    heroImage: "/images/factoring-financing.jpeg",
    intro: "Turn unpaid invoices into immediate liquidity without waiting on net payment terms.",
    bestFor: ["B2B companies paid on terms", "Payroll and supplier timing pressure", "Fast-growing receivables books"],
    howItWorks: [
      "Share an invoice sample and AR aging summary",
      "Lenders evaluate customer payment quality",
      "Receive advance offers and choose the best fit",
    ],
    requirements: ["Invoice-based B2B revenue", "Trackable AR aging", "Valid customer contracts or purchase records"],
  },
  {
    slug: "equipment-financing",
    name: "Equipment Financing",
    heroImage: "/images/Take possession of your new manufacturing equipment.jpeg",
    intro: "Acquire vehicles and machinery while preserving working capital.",
    bestFor: ["Fleet or machinery upgrades", "Replacing aging equipment", "Balancing growth with cash retention"],
    howItWorks: [
      "Provide equipment quote and business details",
      "Lenders price terms based on asset type and profile",
      "Choose lease or loan structure that fits cash flow",
    ],
    requirements: ["Commercial-use equipment quote", "Basic financial statements", "Business registration and ownership details"],
  },
  {
    slug: "purchase-order-financing",
    name: "Purchase Order Financing",
    heroImage: "/images/An image of two groups of business people shaking hands over a meeting table celebrating signing a deal to merge.jpeg.webp",
    intro: "Fund supplier production costs tied to confirmed purchase orders.",
    bestFor: ["Large confirmed orders", "Supplier prepayment requirements", "Businesses scaling fulfillment"],
    howItWorks: [
      "Submit purchase order and supplier information",
      "Lenders evaluate buyer strength and delivery terms",
      "Funding supports production and delivery timelines",
    ],
    requirements: ["Confirmed purchase order", "Reliable supplier relationship", "Track record of successful delivery"],
  },
  {
    slug: "merchant-cash-advance",
    name: "Merchant Cash Advance",
    heroImage: "/images/premium_photo-1661962673986-dcffa2a05e07.jpg",
    intro: "Fast-access capital repaid from future card sales or daily receipts.",
    bestFor: ["Retail and hospitality operators", "Urgent short-term needs", "Businesses with strong card volume"],
    howItWorks: [
      "Share recent sales and bank activity",
      "Advance size is set against expected receipts",
      "Repayment flexes with sales performance",
    ],
    requirements: ["Consistent monthly sales", "Business bank statements", "Payment processing history"],
  },
  {
    slug: "asset-based-lending",
    name: "Asset-Based Lending",
    heroImage: "/images/tohcyytw4kftsfv6ivr2.jpg",
    intro: "Borrow against receivables, inventory, or equipment for scalable borrowing capacity.",
    bestFor: ["Asset-heavy businesses", "Complex cash cycles", "Growing firms with collateral"],
    howItWorks: [
      "Review eligible collateral pool",
      "Lenders issue borrowing base structures",
      "Facility limit adjusts based on asset values",
    ],
    requirements: ["Detailed AR/inventory reporting", "Financial statements", "Collateral documentation"],
  },
];

export const industries: Industry[] = [
  {
    slug: "construction",
    name: "Construction",
    overview: "Projects with milestone billing, retainage, and equipment-heavy operating cycles.",
    examples: ["General contractors", "Specialty trades", "Commercial renovation teams"],
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    overview: "Businesses balancing raw materials, production timelines, and receivable cycles.",
    examples: ["Food and beverage", "Light industrial", "Custom fabrication"],
  },
  {
    slug: "logistics",
    name: "Logistics",
    overview: "Operators managing freight timing, fuel costs, and delayed customer payments.",
    examples: ["Freight carriers", "Warehouse operators", "Distribution businesses"],
  },
  {
    slug: "other",
    name: "Other Industries",
    overview: "Boreal supports a wide range of B2B sectors beyond the examples above.",
    examples: ["Professional services", "Wholesale and distribution", "Technology-enabled businesses"],
  },
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getIndustryBySlug(slug: string) {
  return industries.find((industry) => industry.slug === slug);
}
