import industries from "../data/industries";

export default function Industries() {
  return (
    <div className="mx-auto max-w-7xl px-6 pt-28 text-white">
      <h1 className="mb-10 text-4xl font-bold">Industries We Serve</h1>

      <div className="grid gap-8 md:grid-cols-3">
        {industries.map((ind) => (
          <div key={ind.slug}>
            <img src={ind.image} className="mb-4 rounded-xl" alt={ind.name} loading="lazy" />
            <h3 className="mb-2 text-xl font-semibold">{ind.name}</h3>
            <p className="mb-3 text-white/70">{ind.problems}</p>
            <p className="text-sm text-blue-400">{ind.solutions}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
