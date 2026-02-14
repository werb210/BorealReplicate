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
      "Market pressures from labor shortages, price volatility, and margin compression on fixed-bid contracts.",
      "Cash flow cycles stretched by retainage, progress billing delays, and seasonal project slowdowns.",
      "Capital bottlenecks when deposits, mobilization costs, and equipment needs hit before collections.",
      "Growth constraints caused by capacity limits when larger contracts require upfront working capital.",
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
      "Market pressures from input cost inflation and shifting customer demand forecasts.",
      "Cash flow cycles impacted by long procurement windows and delayed B2B receivable collections.",
      "Capital bottlenecks around machinery upgrades, maintenance events, and peak-order inventory buildup.",
      "Growth constraints when larger purchase commitments exceed existing borrowing capacity.",
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
      "Market pressures from margin compression, variable demand, and promotional competition.",
      "Cash flow cycles driven by inventory purchases ahead of sale-through and delayed payout schedules.",
      "Capital bottlenecks when replenishment, staffing, and marketing all require cash at the same time.",
      "Growth constraints opening new channels or locations without overextending operating liquidity.",
    ],
  },
  {
    slug: "media",
    title: "Media",
    name: "Media",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80",
    description: "Contract-backed financing for agencies, creators, and production-led teams.",
    summary: "Funding aligned with retainers, milestones, and campaign billing schedules.",
    heroImage: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1800&q=80",
    advisory:
      "Media companies often carry execution costs before receiving milestone payments. Boreal helps bridge project delivery timelines so teams can scale without cash disruption.",
    challenges: [
      "Market pressures from client concentration, project churn, and variable contract timing.",
      "Cash flow cycles where payroll and production costs precede receivable inflows.",
      "Capital bottlenecks funding campaign execution, subcontractors, and media buying commitments.",
      "Growth constraints hiring talent or taking larger retainers without reliable working capital depth.",
    ],
  },
  {
    slug: "distribution",
    title: "Distribution",
    name: "Distribution",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=80",
    description: "PO and inventory-aligned facilities for import, wholesale, and fulfillment businesses.",
    summary: "Capital built for supplier terms, transit windows, and receivable-based repayment.",
    heroImage: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=1800&q=80",
    advisory:
      "Distributors manage supplier prepayment, transit lag, and concentration risk in major accounts. Boreal structures capital so order volume can increase without straining operations.",
    challenges: [
      "Market pressures from freight swings, supplier terms, and customer pricing demands.",
      "Cash flow cycles stretched by import timelines and extended B2B payment terms.",
      "Capital bottlenecks when large orders require supplier deposits before delivery and invoicing.",
      "Growth constraints expanding SKU breadth or geographies without dependable revolving capacity.",
    ],
  },
  {
    slug: "healthcare",
    title: "Healthcare",
    name: "Healthcare",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1400&q=80",
    description: "Capital for practices and providers balancing staffing, equipment, and payer delays.",
    summary: "Structures designed for reimbursement timelines, expansion plans, and service continuity.",
    heroImage: "https://images.unsplash.com/photo-1666214277655-fdd3f5fe0f80?auto=format&fit=crop&w=1800&q=80",
    advisory:
      "Healthcare operators face reimbursement lag, workforce pressure, and rising equipment costs. Boreal builds financing structures that support service delivery and controlled expansion.",
    challenges: [
      "Market pressures from reimbursement complexity, staffing shortages, and compliance costs.",
      "Cash flow cycles delayed by insurer or payer remittance timing.",
      "Capital bottlenecks around equipment upgrades, new service lines, and facility improvements.",
      "Growth constraints adding locations or capacity while preserving day-to-day operating liquidity.",
    ],
  },
];

export default industries;
