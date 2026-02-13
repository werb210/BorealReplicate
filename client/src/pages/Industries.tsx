import { industries } from "@/data/industries";
import { Link } from "wouter";

export default function Industries() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-semibold mb-10">Industries We Serve</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {industries.map((industry) => (
          <Link
            key={industry.slug}
            href={`/industries/${industry.slug}`}
            className="group"
          >
            <div className="overflow-hidden rounded shadow-lg">
              <img
                src={industry.heroImage}
                alt={industry.name}
                className="w-full h-56 object-cover group-hover:scale-105 transition"
              />
            </div>
            <h2 className="mt-4 text-xl font-medium">{industry.name}</h2>
            <p className="text-gray-300 text-sm mt-2">{industry.summary}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
