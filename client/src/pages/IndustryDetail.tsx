import { AlertTriangle, ArrowRight, BarChart3, CircleDollarSign, TrendingUp } from "lucide-react";
import { Link } from "wouter";
import { APPLY_URL } from "@/config/site";
import { industries } from "@/data/industries";
import { products } from "@/data/products";

type Props = { slug: string };

const productOrder = ["loc", "term-loan", "factoring", "po-financing", "asset-based-lending"];

const challengeIcons = [AlertTriangle, CircleDollarSign, BarChart3, TrendingUp];
const steps = ["Capital Assessment", "Structuring", "Lender Match", "Funding"];

export default function IndustryDetail({ slug }: Props) {
  const industry = industries.find((item) => item.slug === slug);
  const industryProducts = productOrder.map((productSlug) => products.find((product) => product.slug === productSlug)).filter(Boolean);

  if (!industry) return <div className="bg-black px-6 py-16 text-white">Industry not found.</div>;

  return (
    <div className="bg-[#020817] text-white">
      <section className="relative overflow-hidden">
        <img src={industry.heroImage} alt={industry.name} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative mx-auto max-w-7xl px-5 py-14 md:px-6 md:py-20">
          <h1 className="text-4xl font-bold md:text-6xl">{industry.name}</h1>
          <p className="mt-4 max-w-3xl text-base text-slate-200 md:text-lg">{industry.advisory}</p>
          <a href={APPLY_URL} className="mt-6 inline-flex rounded-full bg-white px-5 py-2.5 font-semibold text-black">Apply Now</a>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-10 md:px-6 md:py-12">
        <h2 className="text-2xl font-bold md:text-3xl">Industry Challenges</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {industry.challenges.map((challenge, index) => {
            const Icon = challengeIcons[index] ?? AlertTriangle;
            return (
              <article key={challenge} className="rounded-2xl border border-white/10 bg-[#08132a] p-4">
                <Icon className="mb-3 text-blue-300" size={18} />
                <p className="text-sm text-slate-200 md:text-base">{challenge}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-10 md:px-6 md:py-12">
        <h2 className="text-2xl font-bold md:text-3xl">How Boreal Solves It</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {industryProducts.map((product) => (
            <article key={product!.slug} className="overflow-hidden rounded-2xl border border-white/10 bg-[#08132a]">
              <img src={product!.image} alt={product!.name} className="h-40 w-full object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{product!.name}</h3>
                <p className="mt-2 text-sm text-slate-300">{product!.description}</p>
                <Link href={`/products/${product!.slug}`} className="mt-4 inline-flex items-center gap-2 rounded bg-white px-3 py-2 text-xs font-semibold text-black">
                  Learn More <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-10 md:px-6 md:py-12">
        <h2 className="text-2xl font-bold md:text-3xl">Timeline Process</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-4">
          {steps.map((step, index) => (
            <article key={step} className="rounded-2xl border border-white/10 bg-[#08132a] p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-blue-200">Step {index + 1}</p>
              <h3 className="mt-2 text-lg font-semibold">{step}</h3>
              {index === 0 ? (
                <a href={APPLY_URL} className="mt-4 inline-block rounded bg-white px-3 py-2 text-xs font-semibold text-black">Apply Now</a>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-black/40">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-8 text-center md:flex-row md:px-6 md:text-left">
          <h2 className="text-2xl font-bold">Need a structure built for {industry.name}?</h2>
          <a href={APPLY_URL} className="rounded-full bg-white px-6 py-2.5 font-semibold text-black">Apply Now</a>
        </div>
      </section>
    </div>
  );
}
