import { Link } from "wouter";
import { APPLY_URL } from "@/config/site";
import { industriesBySlug } from "@/data/industries";
import { productsBySlug } from "@/data/products";

type Props = { slug: string };

export default function IndustryDetail({ slug }: Props) {
  const industry = industriesBySlug[slug];

  if (!industry) {
    return (
      <section className="mx-auto max-w-4xl px-6 py-20 text-center text-white">
        <h1 className="text-3xl font-bold">Industry not found</h1>
        <Link href="/industries" className="mt-6 inline-flex rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white">Back to Industries</Link>
      </section>
    );
  }

  return (
    <div className="bg-[#020817] text-white">
      <section className="relative overflow-hidden">
        <img src={industry.heroImage} alt={industry.title} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/95 via-[#0b1a37]/88 to-[#0b1a37]/45" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-200">{industry.title} Solutions</p>
          <h1 className="mt-4 max-w-3xl text-5xl font-bold leading-tight md:text-6xl">{industry.heroHeadline}</h1>
          <p className="mt-5 max-w-3xl text-lg text-slate-200">{industry.heroSubtext}</p>
          <ul className="mt-8 grid max-w-3xl gap-3 sm:grid-cols-3">
            {industry.bullets.map((bullet) => (
              <li key={bullet} className="rounded-xl border border-white/25 bg-white/10 px-4 py-3 text-sm backdrop-blur">{bullet}</li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={APPLY_URL} className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-500">Apply Now</a>
            <Link href="/contact" className="rounded-full border border-white/35 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">Learn More</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl space-y-10 px-6 py-20">
        {industry.solutionSections.map((solution, idx) => (
          <article key={solution.title} className="grid items-center gap-8 rounded-3xl bg-[#0a1731] p-6 ring-1 ring-white/10 md:grid-cols-2 md:p-8">
            <img src={solution.image} alt={solution.title} className={`h-80 w-full rounded-2xl object-cover ${idx % 2 === 1 ? "md:order-2" : ""}`} loading="lazy" />
            <div className={idx % 2 === 1 ? "md:order-1" : ""}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-200">Structured Solutions</p>
              <h2 className="mt-3 text-3xl font-bold">{solution.title}</h2>
              <p className="mt-4 text-slate-300">{solution.body}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16">
        <h2 className="text-4xl font-bold">Products Available</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {industry.featuredProducts.map((slugKey) => {
            const product = productsBySlug[slugKey];
            return (
              <article key={product.slug} className="group relative overflow-hidden rounded-2xl">
                <img src={product.heroImage} alt={product.title} className="h-72 w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                <div className="absolute inset-0 p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-blue-200">{product.tagline}</p>
                  <h3 className="mt-2 text-2xl font-bold">{product.title}</h3>
                  <p className="mt-2 text-sm text-slate-200">{product.shortDescription}</p>
                  <a href={APPLY_URL} className="mt-4 inline-flex rounded-full bg-blue-600 px-4 py-2 text-xs font-semibold text-white">Apply Now</a>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-24">
        <blockquote className="rounded-3xl bg-[#0a1731] p-10 text-center ring-1 ring-blue-300/25">
          <p className="text-2xl font-semibold leading-relaxed text-slate-100">“{industry.testimonial.quote}”</p>
          <footer className="mt-6 text-sm text-blue-200">
            {industry.testimonial.name} · {industry.testimonial.company}
          </footer>
        </blockquote>
      </section>
    </div>
  );
}
