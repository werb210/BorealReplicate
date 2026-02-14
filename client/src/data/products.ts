export type Product = {
  slug: string;
  name: string;
  category: string;
  image: string;
  description: string;
  heroSummary: string;
  whatItDoes: string;
  useCases: string[];
  term: string;
  typicalRange: string;
  rateRange: string;
  speed: string;
  collateral: string;
  bestUse: string;
  repayment: string;
  goodFit: string[];
  relatedIndustries: string[];
};

export const products: Product[] = [
  {
    slug: "loc",
    name: "Line of Credit",
    category: "Working Capital",
    image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&w=1600&q=80",
    description: "Flexible revolving capital to bridge routine cash-flow gaps and preserve operating momentum.",
    heroSummary: "A revolving facility that allows draw, repay, and redraw as working capital needs change.",
    whatItDoes: "Line of Credit gives your business flexible access to liquidity for payroll, vendor payments, and recurring operating costs while you wait on receivables.",
    useCases: ["Seasonal inventory purchases", "Payroll bridge during long AR cycles", "Short-term operating volatility"],
    term: "12–36 months",
    typicalRange: "$100K–$2M",
    rateRange: "Varies by collateral quality and structure",
    speed: "Fast",
    collateral: "May be required depending on underwriting",
    bestUse: "Working Capital",
    repayment: "Interest-only draw periods with structured repayment terms",
    goodFit: [
      "You have reliable revenue but periodic timing gaps.",
      "You need flexible access instead of one-time lump-sum funding.",
      "You want to preserve cash reserves during growth.",
    ],
    relatedIndustries: ["Construction", "Retail", "Restaurant / Food Service", "Technology", "Healthcare", "Transportation", "Professional Services", "Real Estate", "Agriculture", "Energy", "Other"],
  },
  {
    slug: "term-loan",
    name: "Term Loan",
    category: "Growth Capital",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80",
    description: "Structured lump-sum financing for expansion, strategic projects, and refinancing needs.",
    heroSummary: "Predictable amortized financing for major business initiatives and long-horizon investments.",
    whatItDoes: "Term Loans provide fixed-amount capital with planned repayment over a defined horizon, helping businesses execute expansion projects with clearer budgeting.",
    useCases: ["Opening locations", "Debt consolidation", "Large project execution"],
    term: "24–84 months",
    typicalRange: "$250K–$5M",
    rateRange: "Varies by collateral quality and structure",
    speed: "Moderate",
    collateral: "Often required depending on structure",
    bestUse: "Expansion",
    repayment: "Fixed scheduled payments",
    goodFit: [
      "You are funding a defined expansion plan.",
      "You value predictable repayment structure.",
      "You can document stable operating performance.",
    ],
    relatedIndustries: ["Construction", "Manufacturing", "Retail", "Restaurant / Food Service", "Technology", "Healthcare", "Transportation", "Professional Services", "Real Estate", "Agriculture", "Energy", "Other"],
  },
  {
    slug: "equipment-financing",
    name: "Equipment Financing",
    category: "Asset Purchase Capital",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1600&q=80",
    description: "Fund machinery, vehicles, and technology with repayment structured around asset life.",
    heroSummary: "Acquire productive assets while preserving operating liquidity.",
    whatItDoes: "Equipment Financing provides dedicated capital for business-critical equipment purchases so growth projects can move forward without full upfront cash deployment.",
    useCases: ["Fleet upgrades", "Manufacturing machinery", "Medical and specialized equipment"],
    term: "24–84 months",
    typicalRange: "$50K–$3M",
    rateRange: "Varies by collateral quality and structure",
    speed: "Moderate",
    collateral: "Financed equipment",
    bestUse: "Asset Purchase",
    repayment: "Fixed periodic payments",
    goodFit: [
      "You are purchasing or replacing revenue-driving equipment.",
      "You want to preserve working capital for operations.",
      "You need terms aligned to asset useful life.",
    ],
    relatedIndustries: ["Construction", "Manufacturing", "Restaurant / Food Service", "Healthcare", "Transportation", "Agriculture", "Energy", "Other"],
  },
  {
    slug: "factoring",
    name: "Factoring",
    category: "Receivables Finance",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1600&q=80",
    description: "Advance capital against eligible invoices to convert receivables into immediate liquidity.",
    heroSummary: "Monetize outstanding B2B invoices without waiting through long customer payment terms.",
    whatItDoes: "Factoring unlocks cash from approved invoices so businesses can fund payroll, supplier obligations, and growth while receivables remain outstanding.",
    useCases: ["Extended customer payment terms", "Rapidly growing invoice volume", "B2B cash-flow stabilization"],
    term: "Ongoing / revolving against eligible invoices",
    typicalRange: "$100K–$10M",
    rateRange: "Varies by collateral quality and structure",
    speed: "Fast",
    collateral: "Receivables",
    bestUse: "Cash Flow",
    repayment: "Collected through invoice settlement flow",
    goodFit: [
      "You invoice B2B clients on 30–90 day terms.",
      "You need predictable liquidity tied to sales activity.",
      "You want capital that scales with receivable volume.",
    ],
    relatedIndustries: ["Construction", "Manufacturing", "Retail", "Restaurant / Food Service", "Technology", "Healthcare", "Transportation", "Professional Services", "Real Estate", "Agriculture", "Energy", "Other"],
  },
  {
    slug: "po-financing",
    name: "PO Financing",
    category: "Order Fulfillment Capital",
    image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=1600&q=80",
    description: "Supplier and production funding aligned to confirmed customer purchase orders.",
    heroSummary: "Finance fulfillment costs for large orders before customer payment is received.",
    whatItDoes: "PO Financing supports supplier and production costs tied to validated customer orders so your business can fulfill more volume without depleting cash reserves.",
    useCases: ["Large confirmed customer orders", "Supplier prepayment requirements", "Growth through larger contract volume"],
    term: "30–180 days per transaction",
    typicalRange: "$50K–$2M per order",
    rateRange: "Varies by collateral quality and structure",
    speed: "Moderate",
    collateral: "Confirmed purchase orders and transaction flow",
    bestUse: "Large Purchase Orders",
    repayment: "Settled from end-customer payment events",
    goodFit: [
      "You have purchase orders from credible buyers.",
      "Supplier terms require prepayment or production deposits.",
      "You need to scale fulfillment capacity quickly.",
    ],
    relatedIndustries: ["Construction", "Manufacturing", "Retail", "Restaurant / Food Service", "Technology", "Healthcare", "Transportation", "Professional Services", "Real Estate", "Agriculture", "Energy", "Other"],
  },
  {
    slug: "asset-based-lending",
    name: "Asset Based Lending",
    category: "Collateral-Backed Capital",
    image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&w=1600&q=80",
    description: "Leverage receivables, inventory, or equipment to secure larger borrowing capacity.",
    heroSummary: "Structured borrowing base facilities for businesses with strong asset profiles.",
    whatItDoes: "Asset Based Lending uses eligible collateral pools such as A/R, inventory, and equipment to create scalable borrowing availability tied to asset values.",
    useCases: ["Higher credit limits tied to assets", "Complex working-capital cycles", "Growth with balance-sheet leverage"],
    term: "12–60 months",
    typicalRange: "$500K–$15M",
    rateRange: "Varies by collateral quality and structure",
    speed: "Moderate",
    collateral: "A/R, inventory, equipment, or mixed collateral pool",
    bestUse: "Leverage Assets",
    repayment: "Structured around borrowing-base mechanics",
    goodFit: [
      "You maintain reporting on collateral assets.",
      "You need larger limits than unsecured facilities.",
      "Your cash cycle benefits from flexible draw capacity.",
    ],
    relatedIndustries: ["Construction", "Manufacturing", "Retail", "Restaurant / Food Service", "Technology", "Healthcare", "Transportation", "Professional Services", "Real Estate", "Agriculture", "Energy", "Other"],
  },
];

export default products;
