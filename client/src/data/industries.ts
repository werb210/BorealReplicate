export interface Industry {
  slug: string;
  title: string;
  name: string;
  image: string;
  description: string;
  summary: string;
  heroImage: string;
  problems: string;
  solutions: string;
}

const industryNames = [
  "Construction",
  "Manufacturing",
  "Retail",
  "Restaurant/Food Service",
  "Technology",
  "Healthcare",
  "Transportation",
  "Professional Services",
  "Real Estate",
  "Agriculture",
  "Energy",
  "Distribution",
  "Media",
  "Other",
];

function toSlug(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export const industries: Industry[] = industryNames.map((name) => {
  const slug = toSlug(name);

  return {
    slug,
    title: name,
    name,
    image: `/images/industries/${slug}.jpg`,
    description: `Tailored financing structures for ${name.toLowerCase()} operators.`,
    summary: `Tailored financing structures for ${name.toLowerCase()} operators.`,
    heroImage: `/images/industries/${slug}.jpg`,
    problems: `Businesses in ${name} face liquidity pressure, growth constraints, and capital access complexity.`,
    solutions: "Boreal structures tailored facilities including Lines of Credit, Term Loans, Factoring, PO Financing and Asset Based Lending.",
  };
});

export default industries;
