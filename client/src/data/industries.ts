export interface Industry {
  slug: string;
  title: string;
  name: string;
  image: string;
  description: string;
  summary: string;
  heroImage: string;
  problems: string;
  solutions: string;
}

export const industries: Industry[] = [
  {
    slug: "construction",
    title: "Construction",
    name: "Construction",
    image: "/images/industries/construction.jpg",
    description: "Equipment financing, progress billing support, and working capital structured for project-based cash flow.",
    summary: "Equipment financing, progress billing support, and working capital structured for project-based cash flow.",
    heroImage: "/images/industries/construction.jpg",
    problems: "Project mobilization costs and delayed draws can create near-term liquidity pressure.",
    solutions: "Progress draw bridge facilities, equipment financing, PO financing, and asset-based working capital.",
  },
  {
    slug: "manufacturing",
    title: "Manufacturing",
    name: "Manufacturing",
    image: "/images/industries/manufacturing.jpg",
    description: "Inventory lines, asset-based lending, and equipment facilities aligned with production cycles.",
    summary: "Inventory lines, asset-based lending, and equipment facilities aligned with production cycles.",
    heroImage: "/images/industries/manufacturing.jpg",
    problems: "Raw material purchases and labor overhead often arrive before finished-goods conversion.",
    solutions: "Inventory and equipment-backed facilities aligned to production and receivable cycles.",
  },
  {
    slug: "retail",
    title: "Retail",
    name: "Retail",
    image: "/images/industries/retail.jpg",
    description: "Seasonal working capital, inventory financing, and growth funding for brick-and-mortar and ecommerce.",
    summary: "Seasonal working capital, inventory financing, and growth funding for brick-and-mortar and ecommerce.",
    heroImage: "/images/industries/retail.jpg",
    problems: "Inventory stocking cycles and promotional periods can tighten working capital.",
    solutions: "Seasonal lines, inventory financing, and growth facilities sized to sales cycles.",
  },
  {
    slug: "healthcare",
    title: "Healthcare",
    name: "Healthcare",
    image: "/images/industries/healthcare.jpg",
    description: "Equipment, receivables, and operating capital for clinics, practices, and service providers.",
    summary: "Equipment, receivables, and operating capital for clinics, practices, and service providers.",
    heroImage: "/images/industries/healthcare.jpg",
    problems: "Delayed reimbursements and expansion costs can constrain growth.",
    solutions: "Practice financing, equipment facilities, and working capital lines sized to receivables.",
  },
  {
    slug: "distribution",
    title: "Distribution",
    name: "Distribution",
    image: "/images/industries/distribution.jpg",
    description: "PO financing, A/R facilities, and revolving lines for supply-chain-driven businesses.",
    summary: "PO financing, A/R facilities, and revolving lines for supply-chain-driven businesses.",
    heroImage: "/images/industries/distribution.jpg",
    problems: "Supplier payment terms can outpace customer collections.",
    solutions: "Inventory-backed structures and receivable-based lines sized to turnover.",
  },
  {
    slug: "media",
    title: "Media",
    name: "Media",
    image: "/images/industries/media.jpg",
    description: "Revenue-based financing, contract-backed advances, and structured capital for agencies and creators.",
    summary: "Revenue-based financing, contract-backed advances, and structured capital for agencies and creators.",
    heroImage: "/images/industries/media.jpg",
    problems: "Project-based revenue timing can cause uneven working capital availability.",
    solutions: "Production financing and receivable advances to smooth cash cycles.",
  },
];

export default industries;
