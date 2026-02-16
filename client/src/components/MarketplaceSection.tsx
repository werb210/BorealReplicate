import { useLocation } from "wouter";

export default function MarketplaceSection() {
  const [, navigate] = useLocation();

  return (
    <section className="bg-primary py-16 text-white">
      <div className="mx-auto max-w-7xl px-5 md:px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-10 lg:gap-[40px]">
          <div className="space-y-4 text-base leading-relaxed text-slate-200">
            <h2 className="text-3xl font-semibold text-white">A Marketplace for Capital</h2>
            <p>Boreal Financial is not a single-lender brokerage.</p>
            <p>We operate a structured capital marketplace where multiple vetted lenders compete for your business.</p>
            <p>
              When you apply, your file is professionally structured using AI-assisted analysis and strategic review. It is then
              matched against institutional lenders, banking partners, private capital providers, and specialized funding sources.
            </p>
            <p>Instead of shopping blindly, you enter a controlled, competitive process.</p>
            <p>
              We don’t “blast” your deal to the market.
              <br />
              We position it with precision.
            </p>
          </div>

          <div className="space-y-4 text-base leading-relaxed text-slate-200">
            <h3 className="text-3xl font-semibold text-white">How It Works</h3>
            <div className="space-y-4 border-l-2 border-white/50 pl-5">
              <div>
                <strong className="text-white">1. Intelligent Structuring</strong>
                <p>Your application is analyzed to identify strengths, risks, and optimal capital pathways.</p>
              </div>
              <div>
                <strong className="text-white">2. Targeted Lender Matching</strong>
                <p>Your profile is presented only to lenders aligned with your industry, credit profile, and funding objective.</p>
              </div>
              <div>
                <strong className="text-white">3. Competitive Offers</strong>
                <p>Qualified capital sources compete by submitting structured terms so you can compare real options.</p>
              </div>
              <div>
                <strong className="text-white">4. Strategic Selection</strong>
                <p>We guide you through offers and help you select the right structure, not just the lowest rate.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/20 pt-10">
          <h3 className="text-3xl font-semibold text-white">Why This Matters</h3>
          <div className="mt-6 grid gap-6 text-base text-slate-200 md:grid-cols-2">
            <div>
              <p className="font-semibold text-white">Traditional financing relies on:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>One bank</li>
                <li>One credit committee</li>
                <li>One decision</li>
                <li>One set of terms</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-white">Our model creates:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Multiple funding sources</li>
                <li>Competitive leverage</li>
                <li>Structured positioning</li>
                <li>Faster decision timelines</li>
                <li>Greater capital flexibility</li>
              </ul>
            </div>
          </div>
          <p className="mt-6 text-base text-slate-200">You gain leverage. You gain visibility. You gain optionality.</p>
        </div>

        <section className="py-20 text-center">
          <h2 className="mb-6 text-3xl font-semibold">Would you like to see if you are ready for financing?</h2>
          <button
            onClick={() => navigate("/credit-readiness")}
            className="rounded-lg bg-white px-8 py-3 font-medium text-black"
          >
            Check Credit Readiness
          </button>
        </section>
      </div>
    </section>
  );
}
