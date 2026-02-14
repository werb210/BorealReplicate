export interface Industry {
  slug: string;
  name: string;
  image: string;
  heroImage: string;
  summary: string;
  problems: string;
  solutions: string;
}

const industries: Industry[] = [
  {
    slug: "construction",
    name: "Construction",
    image: "/images/68b6a8f361e1aadb77072041_excavator-loan-vs-lease.webp",
    heroImage: "/images/68b6a8f361e1aadb77072041_excavator-loan-vs-lease.webp",
    summary: "Project-driven cash cycles, material lead times, and progress billing can compress liquidity.",
    problems: "Project mobilization costs hit before draw schedules and receivables clear.",
    solutions: "Progress draw bridge facilities, equipment financing, and AR-backed working capital.",
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    image: "/images/Take possession of your new manufacturing equipment.jpeg",
    heroImage: "/images/Take possession of your new manufacturing equipment.jpeg",
    summary: "Inventory buildup and production lead times can strain operating cash.",
    problems: "Raw material purchases and labor overhead arrive before finished-goods conversion.",
    solutions: "Inventory and equipment-backed facilities aligned to production and receivable cycles.",
  },
  {
    slug: "retail",
    name: "Retail",
    image: "/images/An image of two groups of business people shaking hands over a meeting table celebrating signing a deal to merge.jpeg.webp",
    heroImage: "/images/An image of two groups of business people shaking hands over a meeting table celebrating signing a deal to merge.jpeg.webp",
    summary: "Seasonal demand spikes and inventory purchases can strain short-term liquidity.",
    problems: "Stocking costs and supplier terms often arrive before customer sales fully convert to cash.",
    solutions: "Purchase order and inventory-supported facilities to match demand cycles.",
  },
  {
    slug: "technology",
    name: "Technology",
    image: "/images/pngtree-diverse-team-of-professionals-collaborating-in-a-modern-office-setting-with-image_20052579.webp",
    heroImage: "/images/pngtree-diverse-team-of-professionals-collaborating-in-a-modern-office-setting-with-image_20052579.webp",
    summary: "Growth-stage product teams need capital to scale delivery and hiring.",
    problems: "Operating burn and customer payment timing can create funding gaps during expansion.",
    solutions: "Recurring-revenue-informed term facilities and working capital solutions.",
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    image: "/images/what-is-a-financial-consultant.webp",
    heroImage: "/images/what-is-a-financial-consultant.webp",
    summary: "Practice growth and equipment upgrades require stable access to capital.",
    problems: "Operator expansion can be constrained by delayed reimbursements and staffing costs.",
    solutions: "Practice financing, equipment facilities, and working capital lines sized to receivables.",
  },
  {
    slug: "transportation",
    name: "Transportation",
    image: "/images/tohcyytw4kftsfv6ivr2.jpg",
    heroImage: "/images/tohcyytw4kftsfv6ivr2.jpg",
    summary: "Fuel, payroll, and maintenance create ongoing pressure between receivable collections.",
    problems: "Operator expenses are immediate while broker and shipper payments are delayed.",
    solutions: "Factoring, fleet financing, and revolving working capital matched to lane volume.",
  },
];

export { industries };
export default industries;
