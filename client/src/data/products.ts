export type Product = {
  slug: string;
  name: string;
  category: string;
  image: string;
  description: string;
  term: string;
  rateRange: string;
  bestFor: string;
  speed: string;
  bestUse: string;
  repayment: string;
  collateral: string;
};

export const products: Product[] = [
  {
    slug: "line-of-credit",
    name: "Line of Credit",
    category: "Working Capital",
    image: "/images/products/loc.jpg",
    description: "Flexible revolving capital for working capital needs.",
    term: "12–36 months",
    rateRange: "8%–16%",
    bestFor: "Managing recurring short-term cash flow needs",
    speed: "Fast",
    bestUse: "Working capital",
    repayment: "Flexible",
    collateral: "May be required",
  },
  {
    slug: "term-loan",
    name: "Term Loan",
    category: "Growth Capital",
    image: "/images/products/term-loan.jpg",
    description: "Structured financing with predictable repayment.",
    term: "24–84 months",
    rateRange: "7%–14%",
    bestFor: "Expansion and planned capital projects",
    speed: "Moderate",
    bestUse: "Expansion",
    repayment: "Fixed",
    collateral: "Often required",
  },
  {
    slug: "factoring",
    name: "Invoice Factoring",
    category: "Working Capital",
    image: "/images/products/factoring.jpg",
    description: "Unlock capital tied up in receivables.",
    term: "Ongoing",
    rateRange: "1%–5% per invoice period",
    bestFor: "B2B companies with slow-paying customers",
    speed: "Very fast",
    bestUse: "Cash flow",
    repayment: "Collected from receivables",
    collateral: "Receivables",
  },
  {
    slug: "po-financing",
    name: "Purchase Order Financing",
    category: "Working Capital",
    image: "/images/products/po.jpg",
    description: "Fund supplier orders before delivery.",
    term: "30–120 days",
    rateRange: "2%–8% per transaction",
    bestFor: "Fulfilling large customer purchase orders",
    speed: "Fast",
    bestUse: "Supplier funding",
    repayment: "From customer payment",
    collateral: "Confirmed purchase order",
  },
  {
    slug: "asset-based-lending",
    name: "Asset-Based Lending",
    category: "Working Capital",
    image: "/images/products/abl.jpg",
    description: "Leverage assets to increase borrowing capacity.",
    term: "12–60 months",
    rateRange: "9%–18%",
    bestFor: "Businesses with strong A/R, inventory, or equipment",
    speed: "Moderate",
    bestUse: "Balance-sheet leverage",
    repayment: "Flexible",
    collateral: "A/R, inventory, equipment",
  },
];

export default products;
