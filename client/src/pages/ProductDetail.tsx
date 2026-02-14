import { Link } from "wouter";
import { industries } from "@/data/industries";
import { products } from "@/data/products";

type ProductDetailProps = {
  slug: string;
};

const slugAliases: Record<string, string> = {
  "line-of-credit": "loc",
  "lines-of-credit": "loc",
  "term-loans": "term-loan",
  "purchase-order-financing": "po-financing",
};

export default function ProductDetail({ slug }: ProductDetailProps) {
  const resolvedSlug = slugAliases[slug] ?? slug;
  const product = products.find((item) => item.slug === resolvedSlug);

  if (!product) {
    return <div className="min-h-screen bg-black px-4 py-12 text-white">Product not found.</div>;
  }

  const relatedIndustries = industries.filter((industry) => product.relatedIndustries.includes(industry.name));

  return (
    <div className="min-h-screen bg-[#020817] pb-12 pt-10 text-white md:pb-16">
      <section className="relative overflow-hidden">
        <img src={product.image} alt={product.name} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative mx-auto max-w-7xl px-5 py-14 md:px-6 md:py-16">
          <h1 className="text-4xl font-bold md:text-6xl">{product.name}</h1>
          <p className="mt-4 max-w-3xl text-base text-slate-200 md:text-lg">{product.heroSummary}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-10 md:px-6 md:py-12">
        <h2 className="text-2xl font-bold md:text-3xl">Product overview</h2>
        <p className="mt-4 max-w-4xl text-slate-200">{product.whatItDoes}</p>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-10 md:px-6 md:py-12">
        <h2 className="text-2xl font-bold md:text-3xl">Best use cases</h2>
        <div className="mt-5 grid gap-3 md:grid-cols-3">
          {product.useCases.map((useCase) => (
            <div key={useCase} className="rounded-xl border border-white/10 bg-[#08132a] p-4 text-sm text-slate-200">
              {useCase}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-10 md:px-6 md:py-12">
        <h2 className="text-2xl font-bold md:text-3xl">How it works</h2>
        <div className="mt-5 grid gap-3 md:grid-cols-3">
          <div className="rounded-xl border border-white/10 bg-[#08132a] p-4 text-sm text-slate-200">1. Share your operating profile and funding objectives.</div>
          <div className="rounded-xl border border-white/10 bg-[#08132a] p-4 text-sm text-slate-200">2. Boreal structures options aligned to cash-flow and collateral realities.</div>
          <div className="rounded-xl border border-white/10 bg-[#08132a] p-4 text-sm text-slate-200">3. Move forward with the best-fit facility and ongoing advisory support.</div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-10 md:px-6 md:py-12">
        <h2 className="text-2xl font-bold md:text-3xl">Typical structure</h2>
        <p className="mt-2 text-sm text-slate-300">Ranges shown are indicative and subject to underwriting.</p>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-white/10 bg-[#08132a] p-4"><p className="text-xs uppercase text-blue-200">Typical range</p><p className="mt-2">{product.typicalRange}</p></div>
          <div className="rounded-xl border border-white/10 bg-[#08132a] p-4"><p className="text-xs uppercase text-blue-200">Term range</p><p className="mt-2">{product.term}</p></div>
          <div className="rounded-xl border border-white/10 bg-[#08132a] p-4"><p className="text-xs uppercase text-blue-200">Rate range</p><p className="mt-2">{product.rateRange}</p></div>
          <div className="rounded-xl border border-white/10 bg-[#08132a] p-4"><p className="text-xs uppercase text-blue-200">Repayment</p><p className="mt-2">{product.repayment}</p></div>
          <div className="rounded-xl border border-white/10 bg-[#08132a] p-4"><p className="text-xs uppercase text-blue-200">Collateral</p><p className="mt-2">{product.collateral}</p></div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-10 md:px-6 md:py-12">
        <h2 className="text-2xl font-bold md:text-3xl">Why it is a strong fit</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-200">
          {product.goodFit.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-10 md:px-6 md:py-12">
        <h2 className="text-2xl font-bold md:text-3xl">Related industries</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {relatedIndustries.map((industry) => (
            <Link key={industry.slug} href={`/industries/${industry.slug}`} className="rounded-2xl border border-white/10 bg-[#08132a] p-4 hover:bg-[#0f1d3a]">
              <p className="text-lg font-semibold">{industry.name}</p>
              <p className="mt-2 text-sm text-slate-300">{industry.summary}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-10 md:px-6 md:pb-12">
        <div className="rounded-2xl border border-white/10 bg-black/40 p-6 text-center md:p-8">
          <h2 className="text-2xl font-bold">Want to evaluate this structure in detail?</h2>
          <div className="mt-4 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/credit-readiness" className="inline-block rounded-full border border-white px-6 py-2.5 font-semibold text-white">Check Capital Readiness</Link>
            <a href="https://client.boreal.financial" className="inline-block rounded-full bg-white px-6 py-2.5 font-semibold text-black">Apply Now</a>
          </div>
        </div>
      </section>
    </div>
  );
}
