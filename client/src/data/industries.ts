export interface Industry {
  slug: string;
  title: string;
  name: string;
  image: string;
  description: string;
  summary: string;
  heroImage: string;
  advisory: string;
  challenges: string[];
}

export const industries: Industry[] = [
  {
    slug: "construction",
    title: "Construction",
    name: "Construction",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=80",
    description: "Structured financing for bid cycles, equipment deployment, and project-based draw timing.",
    summary: "Capital structures aligned with contracts, retainage, and labor-heavy payment cycles.",
    heroImage: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1800&q=80",
    advisory:
      "Construction operators balance material inflation, payroll pressure, and delayed project receivables. Boreal structures funding built for long billing cycles and growth contracts.",
    challenges: [
      "Labor shortages and material volatility pressure bid margins and execution reliability.",
      "Retainage and progress billing delays can create significant working-capital timing gaps.",
      "Equipment and mobilization costs often arrive before project cash inflows.",
      "Growth contracts require more upfront capital than existing facilities can support.",
    ],
  },
  {
    slug: "manufacturing",
    title: "Manufacturing",
    name: "Manufacturing",
    image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1400&q=80",
    description: "Working capital and asset-backed structures tailored to production and inventory timelines.",
    summary: "Facilities designed for raw material procurement, throughput expansion, and fulfillment pacing.",
    heroImage: "https://images.unsplash.com/photo-1581092921461-eab10380d6df?auto=format&fit=crop&w=1800&q=80",
    advisory:
      "Manufacturers navigate supply volatility, lead-time gaps, and equipment investment demands. Boreal aligns capital to production flow so growth is not delayed by liquidity.",
    challenges: [
      "Input cost volatility and demand shifts create margin pressure and planning risk.",
      "Procurement cycles and long B2B terms stretch cash conversion timelines.",
      "Machinery upgrades and maintenance events can consume liquidity unexpectedly.",
      "Large new orders may exceed current borrowing capacity without structured financing.",
    ],
  },
  {
    slug: "retail",
    title: "Retail",
    name: "Retail",
    image: "https://images.unsplash.com/photo-1604719312566-8912e9c8a213?auto=format&fit=crop&w=1400&q=80",
    description: "Seasonal and inventory-focused financing for omni-channel retail operators.",
    summary: "Capital solutions built for inventory turns, campaign windows, and margin stability.",
    heroImage: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1800&q=80",
    advisory:
      "Retail businesses face high seasonality, inventory timing risk, and rising customer acquisition costs. Boreal structures facilities that preserve flexibility during peak and off-peak periods.",
    challenges: [
      "Promotional competition and channel fees compress operating margins.",
      "Inventory commitments happen before sell-through and payout events.",
      "Marketing, staffing, and replenishment costs often converge at once.",
      "Expansion into new channels can strain operating liquidity.",
    ],
  },
  {
    slug: "technology",
    title: "Technology",
    name: "Technology",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80",
    description: "Growth capital for software, services, and infrastructure-led technology businesses.",
    summary: "Financing aligned to recurring revenue, implementation cycles, and product investment.",
    heroImage: "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=1800&q=80",
    advisory:
      "Technology operators balance hiring plans, product delivery, and customer acquisition timelines. Boreal aligns facilities to recurring revenue and expansion milestones.",
    challenges: [
      "Revenue growth often trails front-loaded payroll and platform costs.",
      "Enterprise contracts can include lengthy implementation and payment cycles.",
      "Scaling teams quickly creates immediate cash requirements.",
      "Infrastructure and security investments can delay broader growth plans.",
    ],
  },
  {
    slug: "healthcare",
    title: "Healthcare",
    name: "Healthcare",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=1400&q=80",
    description: "Capital structures for clinics, providers, and healthcare service organizations.",
    summary: "Facilities built for reimbursement timing, staffing continuity, and equipment investment.",
    heroImage: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1800&q=80",
    advisory:
      "Healthcare teams often navigate reimbursement delays and rising staffing costs. Boreal helps structure funding that protects service delivery while supporting growth.",
    challenges: [
      "Reimbursement lag creates receivable-heavy cash flow cycles.",
      "Clinical staffing and compliance costs require consistent liquidity.",
      "Equipment procurement can demand significant upfront deployment.",
      "Service expansion requires capital before reimbursement volume matures.",
    ],
  },
  {
    slug: "transportation",
    title: "Transportation",
    name: "Transportation",
    image: "https://images.unsplash.com/photo-1494412685616-a5d310fbb07d?auto=format&fit=crop&w=1400&q=80",
    description: "Working capital and fleet-focused financing for logistics and transportation operators.",
    summary: "Facilities aligned with route density, fuel exposure, and receivable timing.",
    heroImage: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1800&q=80",
    advisory:
      "Transportation businesses manage fuel volatility, fleet maintenance, and delayed invoice cycles. Boreal structures capital to keep routes moving and growth plans on schedule.",
    challenges: [
      "Fuel and maintenance costs can shift rapidly and pressure margins.",
      "Longer payment terms from shippers delay cash collections.",
      "Fleet additions and repairs often require immediate funding.",
      "Scaling routes requires liquidity depth beyond existing facilities.",
    ],
  },
];

export default industries;
