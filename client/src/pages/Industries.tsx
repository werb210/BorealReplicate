import { Link } from "wouter";
import { industries } from "@/data/industries";

export default function Industries() {
  return (
    <section className="grid gap-8 bg-black px-8 py-12 text-white md:grid-cols-3">
      {industries.map((industry) => (
        <Link key={industry.slug} href={`/industries/${industry.slug}`} className="rounded bg-gray-900 p-6 shadow">
          <img src={industry.image} className="mb-4 rounded" alt={industry.name} />
          <h3 className="text-xl font-semibold">{industry.name}</h3>
        </Link>
      ))}
    </section>
  );
}
