export type ProductKey = "loc" | "term-loan" | "factoring" | "equipment" | "po";

type IndustrySolution = {
  title: string;
  description: string;
  image: string;
};

export type Industry = {
  slug: string;
  name: string;
  subtitle: string;
  heroImage: string;
  heroTagline: string;
  heroBullets: [string, string, string];
  heroDescription: string;
  solutions: IndustrySolution[];
  productsAvailable: ProductKey[];
};

export const productCatalog: Record<ProductKey, { name: string; description: string; image: string; href: string }> = {
  loc: {
    name: "Line of Credit",
    description: "Flexible revolving access for payroll, receivables timing, and short-cycle operating liquidity.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    href: "/products/line-of-credit",
  },
  "term-loan": {
    name: "Term Loan",
    description: "Structured capital for expansions, large projects, and strategic growth investments.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    href: "/products/term-loans",
  },
  factoring: {
    name: "Invoice Factoring",
    description: "Turn approved invoices into immediate working capital to stabilize cash conversion cycles.",
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80",
    href: "/products/factoring",
  },
  equipment: {
    name: "Equipment Financing",
    description: "Acquire mission-critical machinery and fleet assets while preserving day-to-day liquidity.",
    image:
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80",
    href: "/products/equipment-financing",
  },
  po: {
    name: "Purchase Order Financing",
    description: "Fund supplier costs tied to confirmed customer orders so growth opportunities stay on track.",
    image:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1200&q=80",
    href: "/products/purchase-order-financing",
  },
};

export const industries: Industry[] = [
  {
    slug: "construction",
    name: "Construction",
    subtitle: "Project-Based Capital",
    heroImage:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80",
    heroTagline: "Fund draws, crews, and equipment with certainty.",
    heroDescription:
      "Construction businesses need financing that moves at the pace of mobilization, milestone billing, and seasonal ramp-ups.",
    heroBullets: ["Progress-draw friendly", "Payroll bridge support", "Equipment + fleet options"],
    solutions: [
      {
        title: "Mobilization & Payroll Continuity",
        description:
          "Bridge payroll and subcontractor obligations before draw disbursements arrive so projects stay on schedule.",
        image:
          "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Equipment Lifecycle Financing",
        description:
          "Match repayment structures to equipment life and project mix to reduce strain on operational cash flow.",
        image:
          "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80",
      },
    ],
    productsAvailable: ["loc", "equipment", "factoring", "term-loan"],
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    subtitle: "Production Cycle Financing",
    heroImage:
      "https://images.unsplash.com/photo-1581092787765-e3feb951d987?auto=format&fit=crop&w=1600&q=80",
    heroTagline: "Scale production without choking working capital.",
    heroDescription:
      "Manufacturers balance inventory purchases, lead times, and customer payment terms. Capital structures should reflect each stage.",
    heroBullets: ["Inventory cycle support", "Plant modernization funding", "PO-driven growth readiness"],
    solutions: [
      {
        title: "Raw Materials & Inventory Timing",
        description: "Use revolving structures to secure materials early and keep throughput consistent through demand swings.",
        image:
          "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Capacity Expansion Programs",
        description:
          "Finance automation and machinery upgrades with terms aligned to output gains and margin improvement.",
        image:
          "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&w=1200&q=80",
      },
    ],
    productsAvailable: ["term-loan", "equipment", "loc", "po"],
  },
  {
    slug: "logistics",
    name: "Logistics",
    subtitle: "Freight & Fleet Liquidity",
    heroImage:
      "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1600&q=80",
    heroTagline: "Finance fleet growth while smoothing route-level cash flow.",
    heroDescription:
      "Logistics operators face fuel volatility, payables pressure, and customer payment delays. Liquidity has to stay responsive.",
    heroBullets: ["Fleet acquisition pathways", "Fuel + payroll buffers", "Invoice acceleration"],
    solutions: [
      {
        title: "Dispatch-Aligned Working Capital",
        description:
          "Access revolving funding to handle fuel, driver payroll, and daily route execution with fewer cash interruptions.",
        image:
          "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Fleet Refresh & Growth",
        description:
          "Layer equipment financing with term capital to expand routes and maintain service-level consistency.",
        image:
          "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80",
      },
    ],
    productsAvailable: ["factoring", "loc", "equipment", "term-loan"],
  },
  {
    slug: "distribution",
    name: "Distribution",
    subtitle: "Inventory Velocity Capital",
    heroImage:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80",
    heroTagline: "Keep shelves moving and supplier terms under control.",
    heroDescription:
      "Distributors thrive on timing. Financing should bridge supplier terms, warehouse cycles, and receivable collections.",
    heroBullets: ["Supplier payment flexibility", "Warehouse cycle coverage", "Order-driven funding"],
    solutions: [
      {
        title: "Supplier Term Optimization",
        description:
          "Use short-cycle facilities to negotiate better supplier economics without compromising internal liquidity.",
        image:
          "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Order Fulfillment Scalability",
        description:
          "Deploy PO-backed capital to fulfill larger orders confidently while preserving working capital for operations.",
        image:
          "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=1200&q=80",
      },
    ],
    productsAvailable: ["po", "loc", "factoring", "term-loan"],
  },
  {
    slug: "media",
    name: "Media",
    subtitle: "Campaign & Production Financing",
    heroImage:
      "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=1600&q=80",
    heroTagline: "Bridge production timelines and client payment cycles.",
    heroDescription:
      "Media companies operate around launch windows, contract milestones, and delayed receivables. Capital must stay flexible.",
    heroBullets: ["Production bridge funding", "Campaign cash-flow smoothing", "Contract-backed options"],
    solutions: [
      {
        title: "Production Cost Bridging",
        description:
          "Fund crew, studio, and post-production costs before campaign or distribution payments are received.",
        image:
          "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Contract-Timed Growth Capital",
        description:
          "Pair term and receivables solutions to support agency growth while protecting operating cash reserves.",
        image:
          "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=1200&q=80",
      },
    ],
    productsAvailable: ["factoring", "loc", "term-loan"],
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    subtitle: "Practice Growth Capital",
    heroImage:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1600&q=80",
    heroTagline: "Expand care capacity with confidence and continuity.",
    heroDescription:
      "Clinics and healthcare operators need predictable financing for equipment, staffing, and patient-volume expansion.",
    heroBullets: ["Practice expansion support", "Medical equipment financing", "Revenue-cycle stability"],
    solutions: [
      {
        title: "Clinical Infrastructure Investment",
        description:
          "Finance rooms, diagnostics, and essential systems while protecting day-to-day patient service delivery.",
        image:
          "https://images.unsplash.com/photo-1580281657525-47f249e8f4df?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Revenue-Cycle Liquidity",
        description:
          "Bridge delayed reimbursements and payer timing with flexible capital matched to care operations.",
        image:
          "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=1200&q=80",
      },
    ],
    productsAvailable: ["equipment", "term-loan", "loc", "factoring"],
  },
];

export const industryBySlug = Object.fromEntries(industries.map((industry) => [industry.slug, industry])) as Record<string, Industry>;
