const industries = ["Construction", "Manufacturing", "Logistics", "Other"];

export function IndustryCards() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <h2 className="text-2xl font-semibold">Industries we support</h2>
      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-4">
        {industries.map((industry) => (
          <article key={industry} className="rounded-lg border bg-white p-4">
            <h3 className="font-medium">{industry}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}
