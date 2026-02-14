import industries from "../data/industries";

export default function Industries() {
  return (
    <div className="mx-auto max-w-7xl px-4 pb-16 pt-24 text-white md:px-6">
      <h1 className="mb-6 text-4xl font-bold">Industries We Serve</h1>

      <div className="mb-8 overflow-x-auto whitespace-nowrap">
        <div className="inline-flex gap-2">
          {industries.map((industry) => (
            <a
              key={industry.slug}
              href={`/industries/${industry.slug}`}
              className="rounded-full border border-white/20 px-4 py-2 text-sm text-white/90 hover:bg-white/10"
            >
              {industry.name}
            </a>
          ))}
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {industries.map((industry) => (
          <div key={industry.slug}>
            <img src={industry.image} className="mb-4 rounded-xl" alt={industry.name} loading="lazy" />
            <h3 className="mb-2 text-xl font-semibold">{industry.name}</h3>
            <p className="mb-3 text-white/70">{industry.problems}</p>
            <p className="text-sm text-blue-300">{industry.solutions}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
