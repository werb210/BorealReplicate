const steps = ["Smart Intake", "Lender Match", "Structured Offers", "Fund"];

export function MarketplaceSteps() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14">
      <h2 className="text-2xl font-semibold">How the marketplace works</h2>
      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-4">
        {steps.map((step, index) => (
          <article key={step} className="rounded-lg border p-4">
            <h3 className="font-semibold">{index + 1}. {step}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}
