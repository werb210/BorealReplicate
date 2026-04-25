import { Link, Navigate, useParams } from "react-router-dom";
import { SEOFAQ } from "@/components/SEOFAQ";

const APPLY_URL = (import.meta.env.VITE_APPLY_URL as string) ?? "https://client.boreal.financial";

type LandingContent = {
  title: string;
  subtitle: string;
  heroImage: string;
  benefits?: string[];
  faq?: { question: string; answer: string }[];
};

const CONTENT_BY_SLUG: Record<string, LandingContent> = {
  trucking: base("Trucking Financing", "/images/hero-truck.jpg"),
  construction: base("Construction Financing", "/images/hero-equipment.webp"),
  manufacturing: base("Manufacturing Financing", "/images/hero-warehouse.jpg"),
  retail: base("Retail Financing", "/images/hero-marketplace.webp"),
  healthcare: base("Healthcare Financing", "/images/hero-financial-advisor.webp"),
  hospitality: base("Hospitality Financing", "/images/hero-conference.jpg"),
  agriculture: base("Agriculture Financing", "/images/hero-skyline.jpg"),
  logistics: base("Logistics Financing", "/images/hero-team.jpg"),
  "line-of-credit": base("Business Line of Credit", "/images/hero-handshake.png"),
  "term-loan": base("Business Term Loans", "/images/hero-meeting.webp"),
  "equipment-finance": base("Equipment Finance", "/images/hero-equipment.webp"),
  factoring: base("Invoice Factoring", "/images/hero-laptop-graph.webp"),
  "purchase-order-finance": base("Purchase Order Finance", "/images/hero-handshake.png"),
  mca: base("Merchant Cash Advance", "/images/hero-marketplace.webp"),
  "startup-capital": base("Startup Capital", "/images/hero-diverse-team.webp"),
  "sba-government": base("SBA & Government Programs", "/images/hero-conference.jpg"),
  "asset-based-lending": base("Asset Based Lending", "/images/hero-warehouse.jpg"),
};

function base(title: string, heroImage: string): LandingContent {
  return {
    title,
    subtitle: `Flexible ${title.toLowerCase()} solutions for Canadian and US businesses.`,
    heroImage,
    benefits: [
      "Fast approvals and lender matching",
      "Structured terms built for your cash-flow cycle",
      "Dedicated advisory support through funding",
    ],
    faq: [
      {
        question: `How quickly can I get approved for ${title.toLowerCase()}?`,
        answer: "Many files can receive approvals within 24–72 hours once documentation is complete.",
      },
      {
        question: "What documents are usually required?",
        answer: "Typically recent financial statements, bank statements, and basic business details.",
      },
    ],
  };
}

function FeatureGrid({ items }: { items: string[] }) {
  return (
    <div className="mt-10 grid gap-4 md:grid-cols-3">
      {items.map((item) => (
        <article key={item} className="rounded-xl border border-white/10 bg-white/5 p-4">
          <p>{item}</p>
        </article>
      ))}
    </div>
  );
}

export default function SeoLandingPage() {
  const params = useParams();
  const slug = (params.slug ?? "").toLowerCase();
  const c = CONTENT_BY_SLUG[slug];

  if (!c) return <Navigate to="/" replace />;

  return (
    <section className="container-bf py-16 text-white">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div>
          <h1 className="text-4xl font-semibold md:text-5xl">{c.title}</h1>
          <p className="mt-4 text-white/80">{c.subtitle}</p>
          <a href={APPLY_URL} className="mt-6 inline-block rounded-md bg-blue-500 px-6 py-3">
            Apply now
          </a>
          <Link to="/contact" className="ml-3 mt-6 inline-block rounded-md border border-white/20 px-6 py-3">
            Talk to us
          </Link>
        </div>
        <img src={c.heroImage} alt={c.title} className="rounded-2xl" />
      </div>
      {c.benefits ? <FeatureGrid items={c.benefits} /> : null}
      {c.faq ? <SEOFAQ faqs={c.faq} /> : null}
    </section>
  );
}
