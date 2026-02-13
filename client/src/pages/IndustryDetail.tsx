import { Link } from "wouter";
import { APPLY_URL } from "@/config/site";
import { industryBySlug, productCatalog } from "@/data/industries";

type Props = {
  slug: string;
};

export default function IndustryDetail({ slug }: Props) {
  const industry = industryBySlug[slug];

  if (!industry) {
    return (
      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <h1 className="text-3xl font-semibold text-slate-900">Industry not found</h1>
        <p className="mt-3 text-slate-600">Please return to the industries page to continue exploring solutions.</p>
        <Link href="/industries" className="mt-6 inline-flex rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white">
          Back to Industries
        </Link>
      </section>
    );
  }

  return (
    <div className="bg-slate-50">
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <img src={industry.heroImage} alt={industry.name} className="absolute inset-0 h-full w-full object-cover opacity-35" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#081328] via-[#10233f]/90 to-[#10233f]/65" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-300">{industry.subtitle}</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight md:text-6xl">{industry.name} Financing Solutions</h1>
          <p className="mt-5 max-w-3xl text-lg text-slate-200">{industry.heroDescription}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            {industry.heroBullets.map((bullet) => (
              <span key={bullet} className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm text-slate-100 backdrop-blur">
                {bullet}
              </span>
            ))}
          </div>

          <a href={APPLY_URL} className="mt-9 inline-flex rounded-full bg-white px-7 py-3 text-sm font-semibold text-slate-900 shadow-lg transition hover:bg-slate-200">
            Apply Now
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Structured Solutions</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">Capital programs tailored to your operating model</h2>
        </div>

        <div className="space-y-10">
          {industry.solutions.map((solution, idx) => (
            <article key={solution.title} className="grid items-center gap-8 rounded-2xl bg-white p-5 shadow-sm md:grid-cols-2 md:p-8">
              <img
                src={solution.image}
                alt={solution.title}
                className={`h-72 w-full rounded-xl object-cover ${idx % 2 === 1 ? "md:order-2" : ""}`}
                loading="lazy"
              />
              <div className={idx % 2 === 1 ? "md:order-1" : ""}>
                <h3 className="text-2xl font-semibold text-slate-900">{solution.title}</h3>
                <p className="mt-4 text-base leading-7 text-slate-600">{solution.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Products Available</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">Funding structures most used in {industry.name}</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {industry.productsAvailable.map((key) => {
            const product = productCatalog[key];
            return (
              <article
                key={key}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 text-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <img src={product.image} alt={product.name} className="absolute inset-0 h-full w-full object-cover opacity-40" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#081328] via-[#0f2240]/80 to-transparent" />
                <div className="relative p-6">
                  <h3 className="text-2xl font-semibold">{product.name}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-200">{product.description}</p>
                  <Link
                    href={product.href}
                    className="mt-5 inline-flex rounded-full border border-white/40 px-4 py-2 text-sm font-semibold transition hover:border-white hover:bg-white hover:text-slate-900"
                  >
                    Learn More
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}
