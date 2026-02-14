import { Link } from "wouter";

export default function IndustryCard({ industry }: { industry: string }) {
  return (
    <Link href={`/industries/${industry.toLowerCase()}`} className="group">
      <div className="overflow-hidden rounded bg-neutral-900 shadow-lg transition hover:shadow-2xl">
        <img
          src={`/images/industries/${industry.toLowerCase()}.jpg`}
          alt={industry}
          className="h-48 w-full object-cover transition group-hover:scale-105"
        />
        <div className="p-6">
          <h2 className="mb-2 text-xl font-semibold">{industry}</h2>
          <p className="text-sm text-neutral-400">
            Strategic capital solutions designed for {industry.toLowerCase()} businesses.
          </p>
        </div>
      </div>
    </Link>
  );
}
