import { Link } from "wouter";
import { industries } from "@/data/industries";

export default function Industries() {
  return (
    <div className="bg-slate-50">
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Industries Served</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">Built for the realities of your sector</h1>
        <p className="mt-5 max-w-3xl text-lg text-slate-600">
          Explore industry-specific financing pathways designed around cash cycles, growth plans, and operational timing.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <article
              key={industry.slug}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <img src={industry.heroImage} alt={industry.name} className="h-52 w-full object-cover" loading="lazy" />
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">{industry.subtitle}</p>
                <h2 className="mt-2 text-2xl font-semibold text-slate-900">{industry.name}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">{industry.heroTagline}</p>
                <Link
                  href={`/industries/${industry.slug}`}
                  className="mt-5 inline-flex items-center rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition group-hover:bg-blue-600"
                >
                  View Industry
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
