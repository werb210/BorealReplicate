export type ReadinessTier = "green" | "yellow" | "red";

export type ReadinessScoreInput = {
  yearsInBusiness: string;
  annualRevenue: string;
  monthlyRevenue: string;
  arBalance: string;
  collateral: string;
};

function pointsFromYears(yearsInBusiness: ReadinessScoreInput["yearsInBusiness"]) {
  switch (yearsInBusiness) {
    case "Over 3 Years":
      return 28;
    case "1 to 3 Years":
      return 22;
    case "Under 1 Year":
      return 12;
    case "Zero":
    default:
      return 6;
  }
}

function scoreByLabel(input: string, table: Record<string, number>, fallback = 6) {
  return table[input] ?? fallback;
}

export function calculateReadinessScore(input: ReadinessScoreInput) {
  let score = 20;

  score += pointsFromYears(input.yearsInBusiness);
  score += scoreByLabel(input.annualRevenue, {
    "Over $3,000,000": 22,
    "$1,000,001 to $3,000,000": 18,
    "$500,001 to $1,000,000": 14,
    "$150,001 to $500,000": 10,
    "Zero to $150,000": 6,
  });

  score += scoreByLabel(input.monthlyRevenue, {
    "Over $100,000": 16,
    "$30,001 to $100,000": 12,
    "$10,001 to $30,000": 8,
    "Under $10,000": 4,
  });

  score += scoreByLabel(input.arBalance, {
    "Over $3,000,000": 12,
    "$1,000,000 to $3,000,000": 10,
    "$500,000 to $1,000,000": 8,
    "$250,000 to $500,000": 6,
    "$100,000 to $250,000": 4,
    "Zero to $100,000": 2,
    "No Account Receivables": 0,
  }, 0);

  score += scoreByLabel(input.collateral, {
    "Over $1 million": 12,
    "$500,001 to $1 million": 10,
    "$250,001 to $500,000": 8,
    "$100,001 to $250,000": 6,
    "$1 to $100,000": 4,
    "No Collateral Available": 0,
  }, 0);

  return Math.max(0, Math.min(100, score));
}

export function tierFromScore(score: number): ReadinessTier {
  if (score >= 80) return "green";
  if (score >= 50) return "yellow";
  return "red";
}
