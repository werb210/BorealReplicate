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
    description: "Working capital, equipment financing, and project-based funding for contractors and builders.",
    summary: "Working capital, equipment financing, and project-based funding for contractors and builders.",
    heroImage: "/images/industries/construction.jpg",
    problems: "Project mobilization costs and delayed draws can create near-term liquidity pressure.",
    solutions: "Progress draw bridge facilities, equipment financing, and AR-backed working capital.",
  },
  {
    slug: "manufacturing",
    title: "Manufacturing",
    name: "Manufacturing",
    image: "/images/industries/manufacturing.jpg",
    description: "Inventory, machinery, and operational financing designed for Canadian manufacturers.",
    summary: "Inventory, machinery, and operational financing designed for Canadian manufacturers.",
    heroImage: "/images/industries/manufacturing.jpg",
    problems: "Raw material purchases and labor overhead often arrive before finished-goods conversion.",
    solutions: "Inventory and equipment-backed facilities aligned to production and receivable cycles.",
  },
  {
    slug: "transportation",
    title: "Transportation",
    name: "Transportation",
    image: "/images/industries/transportation.jpg",
    description: "Fleet expansion, fuel advances, and receivables financing for logistics and trucking companies.",
    summary: "Fleet expansion, fuel advances, and receivables financing for logistics and trucking companies.",
    heroImage: "/images/industries/transportation.jpg",
    problems: "Operator expenses are immediate while broker and shipper payments are delayed.",
    solutions: "Factoring, fleet financing, and revolving working capital matched to lane volume.",
  },
  {
    slug: "distribution",
    title: "Distribution",
    name: "Distribution",
    image: "/images/industries/distribution.jpg",
    description: "Inventory-backed facilities and receivable structures for wholesalers.",
    summary: "Inventory-backed facilities and receivable structures for wholesalers.",
    heroImage: "/images/industries/distribution.jpg",
    problems: "Supplier payment terms can outpace customer collections.",
    solutions: "Inventory-backed structures and receivable-based lines sized to turnover.",
  },
  {
    slug: "media",
    title: "Media",
    name: "Media",
    image: "/images/industries/media.jpg",
    description: "Revenue smoothing and production capital for digital and broadcast firms.",
    summary: "Revenue smoothing and production capital for digital and broadcast firms.",
    heroImage: "/images/industries/media.jpg",
    problems: "Project-based revenue timing can cause uneven working capital availability.",
    solutions: "Production financing and receivable advances to smooth cash cycles.",
  },
  {
    slug: "healthcare",
    title: "Healthcare",
    name: "Healthcare",
    image: "/images/industries/healthcare.jpg",
    description: "Practice financing, receivable advances, and growth capital for clinics.",
    summary: "Practice financing, receivable advances, and growth capital for clinics.",
    heroImage: "/images/industries/healthcare.jpg",
    problems: "Delayed reimbursements and expansion costs can constrain growth.",
    solutions: "Practice financing, equipment facilities, and working capital lines sized to receivables.",
  },
];

export default industries;
