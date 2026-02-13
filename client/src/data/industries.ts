export interface Industry {
  slug: string;
  name: string;
  heroImage: string;
  summary: string;
}

export const industries: Industry[] = [
  {
    slug: "construction",
    name: "Construction",
    heroImage: "/images/industries/construction.jpg",
    summary:
      "Working capital, equipment financing, and project-based funding solutions tailored for contractors and builders.",
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    heroImage: "/images/industries/manufacturing.jpg",
    summary:
      "Inventory, machinery, and operational financing designed for Canadian manufacturers.",
  },
  {
    slug: "transportation",
    name: "Transportation",
    heroImage: "/images/industries/transportation.jpg",
    summary:
      "Fleet expansion, fuel advances, and receivables financing for logistics and trucking companies.",
  },
  {
    slug: "distribution",
    name: "Distribution",
    heroImage: "/images/industries/distribution.jpg",
    summary:
      "Inventory-backed facilities and receivable-based structures for wholesalers and distributors.",
  },
  {
    slug: "media",
    name: "Media",
    heroImage: "/images/industries/media.jpg",
    summary:
      "Revenue smoothing and production capital for digital, broadcast, and creative firms.",
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    heroImage: "/images/industries/healthcare.jpg",
    summary:
      "Practice financing, receivable advances, and growth capital for clinics and operators.",
  },
];
