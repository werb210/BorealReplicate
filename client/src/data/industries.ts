import type { ProductSlug } from "@/data/products";

export type Industry = {
  slug: string;
  title: string;
  heroImage: string;
  heroHeadline: string;
  heroSubtext: string;
  bullets: [string, string, string];
  featuredProducts: ProductSlug[];
  testimonial: {
    quote: string;
    name: string;
    company: string;
  };
  solutionSections: [
    {
      title: string;
      body: string;
      image: string;
    },
    {
      title: string;
      body: string;
      image: string;
    },
  ];
};

export const industries: Industry[] = [
  {
    slug: "construction",
    title: "Construction",
    heroImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1800&q=80",
    heroHeadline: "Construction capital that keeps projects moving",
    heroSubtext: "Bridge mobilization, payroll, and material timing with structures designed for milestone billing cycles.",
    bullets: ["Progress draw support", "Crew payroll continuity", "Equipment + fleet pathways"],
    featuredProducts: ["line-of-credit", "equipment-financing", "invoice-factoring", "term-loan"],
    solutionSections: [
      {
        title: "Mobilization and cash-flow continuity",
        body: "Fund labor and subcontractors before draws land so high-value projects stay on time and protected from avoidable delays.",
        image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1400&q=80",
      },
      {
        title: "Asset financing for long-duration jobs",
        body: "Align heavy equipment repayment to useful life and backlog visibility while preserving operating cash for field execution.",
        image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1400&q=80",
      },
    ],
    testimonial: {
      quote: "Boreal helped us smooth draw timing across three projects and keep every crew paid without disruption.",
      name: "Avery Chen",
      company: "Northline Civil Group",
    },
  },
  {
    slug: "manufacturing",
    title: "Manufacturing",
    heroImage: "https://images.unsplash.com/photo-1581092787765-e3feb951d987?auto=format&fit=crop&w=1800&q=80",
    heroHeadline: "Manufacturing facilities funded for throughput and growth",
    heroSubtext: "Stabilize inventory turns, production output, and modernization plans with layered capital structures.",
    bullets: ["Inventory cycle support", "Capacity expansion financing", "Order-driven growth support"],
    featuredProducts: ["term-loan", "equipment-financing", "line-of-credit", "purchase-order-financing"],
    solutionSections: [
      {
        title: "Inventory and raw material timing",
        body: "Use revolving liquidity to secure inputs early and maintain production velocity through fluctuating demand windows.",
        image: "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=1400&q=80",
      },
      {
        title: "Automation and plant upgrades",
        body: "Finance machinery and process upgrades with repayment tied to productivity gains and margin improvement.",
        image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&w=1400&q=80",
      },
    ],
    testimonial: {
      quote: "We expanded two lines without squeezing operations—Boreal structured capital exactly around our production rhythm.",
      name: "Mia Patel",
      company: "ForgePeak Components",
    },
  },
  {
    slug: "logistics",
    title: "Logistics",
    heroImage: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1800&q=80",
    heroHeadline: "Logistics financing for fleet, fuel, and delivery pace",
    heroSubtext: "Keep routes moving with liquidity designed for dispatch operations and delayed receivable cycles.",
    bullets: ["Fuel and payroll buffers", "Fleet expansion options", "Receivable acceleration"],
    featuredProducts: ["invoice-factoring", "line-of-credit", "equipment-financing", "term-loan"],
    solutionSections: [
      {
        title: "Dispatch-aligned liquidity",
        body: "Bridge daily route costs and payroll needs with flexible facilities that move at operating speed.",
        image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1400&q=80",
      },
      {
        title: "Fleet growth without cash strain",
        body: "Layer asset financing with growth capital so service expansion does not compromise resilience.",
        image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1400&q=80",
      },
    ],
    testimonial: {
      quote: "Our expansion lanes launched on schedule because Boreal synchronized fleet financing with our contract ramp.",
      name: "Jordan Reyes",
      company: "Vector Freight Systems",
    },
  },
  {
    slug: "distribution",
    title: "Distribution",
    heroImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1800&q=80",
    heroHeadline: "Distribution capital built for order velocity",
    heroSubtext: "Move inventory faster and protect supplier relationships with financing tuned to warehouse and receivable cycles.",
    bullets: ["Supplier term support", "Warehouse cycle coverage", "Large order execution"],
    featuredProducts: ["purchase-order-financing", "line-of-credit", "invoice-factoring", "term-loan"],
    solutionSections: [
      {
        title: "Supplier timing optimization",
        body: "Improve purchasing power and preserve liquidity by structuring short-cycle capital around supplier schedules.",
        image: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1400&q=80",
      },
      {
        title: "Order fulfillment at scale",
        body: "Fund large confirmed orders confidently while maintaining operational flexibility during fulfillment.",
        image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=1400&q=80",
      },
    ],
    testimonial: {
      quote: "We took on bigger accounts without choking cash flow. Boreal gave us a structure that scaled with demand.",
      name: "Nora Bennett",
      company: "Summit Distribution Co.",
    },
  },
  {
    slug: "media",
    title: "Media",
    heroImage: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=1800&q=80",
    heroHeadline: "Media funding aligned to campaign and production windows",
    heroSubtext: "Bridge launch timelines, creative execution costs, and delayed receivables without losing momentum.",
    bullets: ["Production bridge funding", "Campaign cash-flow smoothing", "Contract-backed growth"],
    featuredProducts: ["invoice-factoring", "line-of-credit", "term-loan", "purchase-order-financing"],
    solutionSections: [
      {
        title: "Production and post cost bridging",
        body: "Fund teams, studios, and post-production before client milestone payouts are released.",
        image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1400&q=80",
      },
      {
        title: "Contract-paced growth capital",
        body: "Pair receivable solutions with strategic term capital to scale agency capacity and output.",
        image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=1400&q=80",
      },
    ],
    testimonial: {
      quote: "Campaign season used to create cash pressure—now we fund production confidently and deliver faster.",
      name: "Leah Morgan",
      company: "Northstar Creative Studio",
    },
  },
  {
    slug: "healthcare",
    title: "Healthcare",
    heroImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1800&q=80",
    heroHeadline: "Healthcare capital for continuity, staffing, and expansion",
    heroSubtext: "Support patient care growth with financing built around reimbursement timing and clinical investment needs.",
    bullets: ["Practice expansion support", "Medical equipment pathways", "Revenue-cycle liquidity"],
    featuredProducts: ["equipment-financing", "term-loan", "line-of-credit", "invoice-factoring"],
    solutionSections: [
      {
        title: "Clinical infrastructure investment",
        body: "Finance diagnostics, treatment rooms, and service expansion while maintaining care continuity.",
        image: "https://images.unsplash.com/photo-1580281657525-47f249e8f4df?auto=format&fit=crop&w=1400&q=80",
      },
      {
        title: "Reimbursement cycle stabilization",
        body: "Use structured working capital to reduce stress from payer delays and maintain staffing reliability.",
        image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=1400&q=80",
      },
    ],
    testimonial: {
      quote: "Boreal structured growth financing that let us expand capacity without compromising patient operations.",
      name: "Dr. Ethan Cole",
      company: "Harborview Medical Partners",
    },
  },
];

export const industriesBySlug = Object.fromEntries(industries.map((industry) => [industry.slug, industry])) as Record<string, Industry>;
