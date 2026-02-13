import { Link } from "wouter";

const industries = [
  { slug: "distribution", name: "Distribution", overview: "Inventory velocity, supplier timing, and receivable-cycle financing." },
  { slug: "media", name: "Media", overview: "Campaign-backed projects, production cycles, and contract-timed funding." },
  { slug: "healthcare", name: "Healthcare", overview: "Practice growth, equipment requirements, and continuity-focused capital." },
];

export default function Industries() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-bold">Industries</h1>
      <p className="mt-3 max-w-3xl text-slate-600">Select an industry to view boutique advisory financing examples.</p>
      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
        {industries.map((industry) => (
          <article key={industry.slug} className="rounded-lg border p-5">
            <h2 className="text-xl font-semibold">{industry.name}</h2>
            <p className="mt-2 text-sm text-slate-600">{industry.overview}</p>
            <Link href={`/industries/${industry.slug}`} className="mt-3 inline-block text-sm font-semibold underline underline-offset-4">
              Learn more
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
