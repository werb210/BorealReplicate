import { industries } from "@/data/industries";
import { Link } from "wouter";

export default function Industries() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <h1 className="mb-10 text-4xl font-semibold">Industries We Serve</h1>

      <div className="grid gap-8 md:grid-cols-3">
        {industries.map((industry) => (
          <Link
            key={industry.slug}
            href={`/industries/${industry.slug}`}
            className="group"
          >
            <div className="relative h-56 overflow-hidden rounded shadow-lg">
              <img
                src={industry.heroImage}
                alt={industry.name}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <h2 className="mt-4 text-xl font-medium">{industry.name}</h2>
            <p className="mt-2 text-sm text-gray-300">{industry.summary}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
