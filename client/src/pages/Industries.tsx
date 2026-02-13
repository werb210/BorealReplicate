import { Link } from "wouter";
import { industries } from "@/data/industries";

export default function Industries() {
  return (
    <div className="bg-[#020817] text-white">
      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-200/80">Industries</p>
        <h1 className="mt-4 text-5xl font-bold leading-tight md:text-6xl">Built for sector-specific capital complexity</h1>
        <p className="mt-5 max-w-3xl text-lg text-slate-300">
          Explore premium financing programs designed around operating cadence, growth timing, and cash conversion realities.
        </p>

        <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <article key={industry.slug} className="group relative overflow-hidden rounded-3xl">
              <img src={industry.heroImage} alt={industry.title} className="h-[360px] w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/60 to-transparent" />
              <div className="absolute inset-0 rounded-3xl ring-1 ring-white/20 transition group-hover:shadow-[0_0_35px_rgba(59,130,246,0.45)]" />

              <div className="absolute bottom-0 p-7">
                <h2 className="text-3xl font-bold">{industry.title}</h2>
                <p className="mt-2 text-sm text-slate-200">{industry.heroSubtext}</p>
                <Link
                  href={`/industries/${industry.slug}`}
                  className="mt-5 inline-flex rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition duration-300 group-hover:scale-[1.03] group-hover:bg-blue-500"
                >
                  Explore {industry.title}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
