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
    advisory: "Construction operators balance material inflation, payroll pressure, and delayed receivables. Boreal structures funding built for long billing cycles and growth contracts.",
    challenges: [
      "Retainage and progress billing delays create working-capital gaps.",
      "Equipment and mobilization costs arrive before project cash inflows.",
      "Labor and subcontractor obligations concentrate in short windows.",
      "New contract wins can outpace current financing limits.",
    ],
  },
  {
    slug: "manufacturing",
    title: "Manufacturing",
    name: "Manufacturing",
    image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1400&q=80",
    description: "Working-capital and asset-backed structures tailored to production and inventory timelines.",
    summary: "Facilities designed for raw material procurement, throughput expansion, and fulfillment pacing.",
    heroImage: "https://images.unsplash.com/photo-1581092921461-eab10380d6df?auto=format&fit=crop&w=1800&q=80",
    advisory: "Manufacturers navigate supply volatility, lead-time gaps, and capex demands. Boreal aligns capital to production flow so growth is not delayed by liquidity constraints.",
    challenges: [
      "Input cost volatility creates margin pressure and planning risk.",
      "Procurement cycles and B2B terms stretch the cash conversion cycle.",
      "Machinery upgrades can consume liquidity unexpectedly.",
      "Large POs require working capital before cash collection.",
    ],
  },
  {
    slug: "transportation",
    title: "Transportation",
    name: "Transportation",
    image: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=1400&q=80",
    description: "Funding support for fleet operations, route growth, and fuel-driven volatility.",
    summary: "Facilities aligned to delivery cycles, fleet maintenance, and contract timing.",
    heroImage: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1800&q=80",
    advisory: "Transportation operators manage fuel swings, maintenance schedules, and payment-term gaps. Boreal structures facilities that support uptime and route expansion.",
    challenges: [
      "Fuel and insurance shifts can rapidly impact monthly cash flow.",
      "Fleet replacement and maintenance are capital-intensive.",
      "Broker and shipper terms may lag payroll and operating expenses.",
      "Adding contracts often requires immediate staffing and asset spend.",
    ],
  },
  {
    slug: "distribution",
    title: "Distribution",
    name: "Distribution",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=80",
    description: "Purchase-order and receivables-focused financing for wholesale and supply-chain operators.",
    summary: "Capital support for inventory in transit, supplier prepayments, and receivable timing gaps.",
    heroImage: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1800&q=80",
    advisory: "Distributors balance supplier terms, logistics costs, and customer payment delays. Boreal structures solutions that keep inventory and order flow moving.",
    challenges: [
      "Supplier deposits are due before customer collections clear.",
      "Inventory in transit ties up cash for extended periods.",
      "Seasonal volume changes create uneven liquidity demand.",
      "Contract growth can require larger facilities with short notice.",
    ],
  },
  {
    slug: "media",
    title: "Media",
    name: "Media",
    image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=1400&q=80",
    description: "Contract-backed and project-timeline financing for agencies, studios, and content operators.",
    summary: "Facilities structured for milestone billing, production costs, and delayed receivables.",
    heroImage: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1800&q=80",
    advisory: "Media teams manage upfront production spend while payment arrives on milestones. Boreal aligns facilities to campaign and production timelines.",
    challenges: [
      "Production and staffing costs are incurred before client payments.",
      "Campaign and project billing often follows milestone schedules.",
      "Cash flow can be uneven across launch and renewal cycles.",
      "Scaling delivery requires immediate working capital.",
    ],
  },
  {
    slug: "healthcare",
    title: "Healthcare",
    name: "Healthcare",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=1400&q=80",
    description: "Capital structures for clinics, providers, and healthcare service organizations.",
    summary: "Facilities built for reimbursement timing, staffing continuity, and equipment investment.",
    heroImage: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1800&q=80",
    advisory: "Healthcare providers balance payroll, equipment acquisition, and reimbursement cycles. Boreal structures financing aligned with operating and growth realities.",
    challenges: [
      "Reimbursement timing can lag payroll and operating commitments.",
      "Specialized equipment purchases require planned capital.",
      "Expansion into new locations can strain liquidity.",
      "Administrative overhead creates recurring cash-flow pressure.",
    ],
  },
];

export default industries;
