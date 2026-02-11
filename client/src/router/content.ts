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
    intro: "Stable funding for major purchases, expansion, or refinancing with predictable payments.",
    bestFor: ["Expansion projects", "High-ticket inventory or contracts", "Debt consolidation with fixed terms"],
    howItWorks: [
      "Complete one application for a full credit package",
      "Boreal shares your file with multiple term-loan lenders",
      "Compare repayment schedules and total cost before you choose",
    ],
    requirements: ["6+ months in business", "Operating revenue history", "Business bank account in Canada or U.S."],
  },
  {
    slug: "loc",
    name: "Lines of Credit",
    heroImage: "/images/old-man.webp",
    intro: "Flexible working capital you can draw as needed for payroll, inventory, and short-term cash-flow gaps.",
    bestFor: ["Seasonal cash-flow swings", "Recurring working-capital needs", "Businesses with steady receivables"],
    howItWorks: [
      "Submit one intake with your current financial profile",
      "Marketplace lenders review and propose revolving limits",
      "Use funds when needed and repay to restore available credit",
    ],
    requirements: ["Business chequing account", "Recent bank statements", "Baseline business credit and operating history"],
  },
  {
    slug: "factoring",
    name: "Factoring",
    heroImage: "/images/factoring-financing.jpeg",
    intro: "Turn unpaid invoices into immediate working capital without waiting on long payment terms.",
    bestFor: ["B2B companies paid on net terms", "Payroll and supplier timing pressure", "Fast-growing receivables books"],
    howItWorks: [
      "Share an invoice sample and aging summary",
      "Lenders evaluate customer payment quality",
      "Receive advance offers and choose the best fit",
    ],
    requirements: ["Invoice-based B2B revenue", "Trackable accounts receivable aging", "Valid customer contracts or purchase records"],
  },
  {
    slug: "equipment",
    name: "Equipment Financing",
    heroImage: "/images/Take possession of your new manufacturing equipment.jpeg",
    intro: "Preserve cash while acquiring vehicles, machinery, or tools your business depends on.",
    bestFor: ["Fleet or machinery upgrades", "Replacing aging equipment", "Keeping working capital free for operations"],
    howItWorks: [
      "Provide equipment quote and business details",
      "Lenders price terms based on asset type and profile",
      "Choose lease or loan structure that fits cash flow",
    ],
    requirements: ["Commercial-use equipment quote", "Basic financial statements", "Business registration and ownership details"],
  },
  {
    slug: "purchase-order-finance",
    name: "Purchase Order Financing",
    heroImage: "/images/An image of two groups of business people shaking hands over a meeting table celebrating signing a deal to merge.jpeg.webp",
    intro: "Fund supplier costs tied to confirmed purchase orders so you can deliver larger contracts.",
    bestFor: ["Large confirmed orders", "Supplier prepayment requirements", "Businesses scaling fulfillment capacity"],
    howItWorks: [
      "Submit purchase order and supplier information",
      "Lenders evaluate buyer strength and delivery terms",
      "Funding is advanced to support production and fulfillment",
    ],
    requirements: ["Confirmed purchase order", "Reliable supplier relationship", "Track record of successful delivery"],
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
