import { Link } from "wouter";
import { industries } from "@/data/industries";

export default function Industries() {
  return (
    <section className="mx-auto max-w-7xl bg-[#020817] px-5 py-10 text-white md:px-6 md:py-12">
      <h1 className="text-3xl font-bold md:text-5xl">Industries We Advise</h1>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {industries.map((industry) => (
          <Link key={industry.slug} href={`/industries/${industry.slug}`} className="group overflow-hidden rounded-2xl border border-white/10 bg-[#08132a]">
            <img src={industry.image} className="h-52 w-full object-cover transition duration-300 group-hover:scale-105" alt={industry.name} />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{industry.name}</h3>
              <p className="mt-2 text-sm text-slate-300">{industry.summary}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
