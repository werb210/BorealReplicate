import { industries } from "@/data/industries";
import { Link } from "wouter";

export default function Industries() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <h1 className="mb-12 text-4xl font-semibold text-white">Industries We Serve</h1>

      <div className="grid gap-8 md:grid-cols-3">
        {industries.map((ind) => (
          <Link
            key={ind.slug}
            href={`/industries/${ind.slug}`}
            className="overflow-hidden rounded-xl bg-[#0B1C33] transition hover:scale-[1.02]"
          >
            <img src={ind.image} className="h-52 w-full object-cover" alt={ind.title} loading="lazy" />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-white">{ind.title}</h3>
              <p className="mt-2 text-sm text-white/60">{ind.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
