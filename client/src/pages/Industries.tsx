import { INDUSTRIES } from "@/config/industries";

export default function Industries() {
  return (
    <section className="grid gap-8 bg-black px-8 py-16 text-white md:grid-cols-3">
      {INDUSTRIES.map((industry) => (
        <div key={industry} className="rounded bg-gray-900 p-6 shadow">
          <img src={`/images/${industry.toLowerCase()}.jpg`} className="mb-4 rounded" alt={industry} />
          <h3 className="text-xl font-semibold">{industry}</h3>
        </div>
      ))}
    </section>
  );
}
