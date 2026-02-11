export type ProductItem = {
  slug: string;
  name: string;
  shortDescription: string;
  longDescription: string;
};

export type IndustryItem = {
  slug: string;
  name: string;
  description: string;
  painPoints: string[];
};

export const products: ProductItem[] = [
  {
    slug: "term-loans",
    name: "Term Loans",
    shortDescription: "Predictable capital for expansion, refinancing, and major projects.",
    longDescription:
      "Term loans provide structured repayment and scalable borrowing limits for businesses that need reliable capital planning.",
  },
  {
    slug: "lines-of-credit",
    name: "Lines of Credit",
    shortDescription: "Flexible revolving access to working capital as cash flow changes.",
    longDescription:
      "Lines of credit help bridge payroll, inventory, and receivable cycles without committing to a one-time lump sum.",
  },
  {
    slug: "factoring",
    name: "Factoring",
    shortDescription: "Convert outstanding invoices into immediate operating cash.",
    longDescription:
      "Factoring accelerates access to capital by advancing funds against approved receivables from creditworthy customers.",
  },
  {
    slug: "purchase-order-financing",
    name: "Purchase Order Financing",
    shortDescription: "Fulfill large customer orders without straining supplier payments.",
    longDescription:
      "PO financing helps fund supplier and production costs so businesses can deliver on high-value contracts with confidence.",
  },
  {
    slug: "equipment-financing",
    name: "Equipment Financing",
    shortDescription: "Acquire or upgrade equipment while preserving working capital.",
    longDescription:
      "Equipment financing supports machinery, fleet, and hard-asset purchases with payment structures aligned to usage and revenue cycles.",
  },
];

export const industries: IndustryItem[] = [
  {
    slug: "construction",
    name: "Construction",
    description: "Finance labor, materials, and project timing with lenders who understand progress billing.",
    painPoints: ["Retainage delays", "Seasonal labor ramps", "Project mobilization costs"],
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    description: "Support production runs and inventory turns with marketplace lenders focused on industrial operations.",
    painPoints: ["Raw material purchases", "Equipment modernization", "PO-led production cycles"],
  },
  {
    slug: "logistics",
    name: "Logistics",
    description: "Stabilize fleet-heavy cash flow and contract payment gaps with tailored structures.",
    painPoints: ["Fuel and maintenance volatility", "Broker receivable terms", "Fleet replacement cycles"],
  },
  {
    slug: "other",
    name: "Other Industries",
    description: "Boreal supports additional B2B sectors that need structured commercial funding options.",
    painPoints: ["Uneven receivable timing", "Rapid growth needs", "Complex deal structures"],
  },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getIndustry(slug: string) {
  return industries.find((industry) => industry.slug === slug);
}
