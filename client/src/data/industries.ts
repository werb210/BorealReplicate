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
    description: "Structured financing for bid cycles, mobilization costs, and contract-driven draw timing.",
    summary: "Capital structures aligned with retainage, project progress billing, and labor-heavy cash cycles.",
    heroImage: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1800&q=80",
    advisory: "Construction operators manage upfront equipment and labor spend while receivables clear through milestone billing. Boreal aligns facilities to contract timing and growth opportunities.",
    challenges: [
      "Retainage and progress billing delays create liquidity pressure between project phases.",
      "Mobilization, equipment, and subcontractor expenses arrive before customer collections.",
      "Seasonality and weather interruptions can cause sudden revenue and cash flow variance.",
      "New project awards can exceed existing financing capacity with little lead time.",
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
    advisory: "Manufacturers navigate procurement volatility, production bottlenecks, and equipment capex. Boreal structures capital that supports output growth without compromising operating resilience.",
    challenges: [
      "Input cost swings and supplier minimums tighten working-capital flexibility.",
      "Long production cycles delay cash conversion from inventory to collections.",
      "Equipment modernization demands significant upfront investment.",
      "Large customer orders can require immediate funding for materials and labor.",
    ],
  },
  {
    slug: "retail",
    title: "Retail",
    name: "Retail",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1400&q=80",
    description: "Inventory, receivables, and seasonal financing tailored to merchandising and demand cycles.",
    summary: "Capital support for stocking, promotions, and omnichannel fulfillment timing gaps.",
    heroImage: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=1800&q=80",
    advisory: "Retail businesses balance supplier terms, seasonal inventory investments, and margin-sensitive operations. Boreal aligns funding to buying windows and sales velocity.",
    challenges: [
      "Seasonal inventory purchases require cash well before peak sales periods.",
      "Promotions and markdowns can compress margins and strain operating liquidity.",
      "Omnichannel fulfillment adds logistics and returns complexity.",
      "Rapidly changing demand can create stockout or overstock risk.",
    ],
  },
  {
    slug: "restaurant-food-service",
    title: "Restaurant/Food Service",
    name: "Restaurant/Food Service",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1400&q=80",
    description: "Flexible capital for payroll, inventory turnover, and high-frequency operating expenses.",
    summary: "Facilities structured for hospitality cash cycles, expansion projects, and equipment refreshes.",
    heroImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1800&q=80",
    advisory: "Restaurant and food-service operators manage variable traffic, labor intensity, and input-cost movement. Boreal structures financing that protects cash flow while supporting growth plans.",
    challenges: [
      "Payroll and supplier obligations are frequent and timing-sensitive.",
      "Food, packaging, and utility costs can fluctuate rapidly.",
      "Renovations and new locations require upfront investment before stabilized sales.",
      "Equipment breakdowns create urgent unplanned capital needs.",
    ],
  },
  {
    slug: "technology",
    title: "Technology",
    name: "Technology",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80",
    description: "Growth capital for product development, hiring, and customer acquisition cycles.",
    summary: "Facilities aligned with recurring revenue, contract milestones, and scaling operations.",
    heroImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1800&q=80",
    advisory: "Technology teams invest ahead of revenue through product and GTM cycles. Boreal aligns capital to runway planning, enterprise payment terms, and expansion milestones.",
    challenges: [
      "Customer acquisition and product investment often precede cash realization.",
      "Enterprise payment terms can lag service delivery and payroll cycles.",
      "Headcount growth increases burn before recurring revenue catches up.",
      "Infrastructure and platform costs can scale quickly with demand.",
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
    advisory: "Healthcare providers balance staffing requirements, reimbursement delays, and specialized equipment costs. Boreal structures facilities that prioritize continuity of care and operational stability.",
    challenges: [
      "Reimbursement schedules can lag payroll and core operating expenses.",
      "Clinical equipment upgrades require meaningful capital outlays.",
      "Demand growth increases staffing pressure before cash receipts normalize.",
      "Compliance and service standards require consistent investment in systems and training.",
    ],
  },
];
