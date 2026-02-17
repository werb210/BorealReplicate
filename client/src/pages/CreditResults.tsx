import { getReadinessSessionToken } from "@/utils/session";

export default function CreditResults() {
  const sessionToken = getReadinessSessionToken() ?? "";

  return (
    <main className="mx-auto max-w-4xl px-5 py-16 text-white md:px-6 md:py-20">
      <section className="rounded-2xl border border-white/10 bg-slate-900/60 p-8">
        <h1 className="text-4xl font-bold md:text-5xl">You’re Closer Than You Think</h1>
        <p className="mt-4 text-lg text-slate-300">
          Your credit readiness snapshot shows meaningful momentum and clear pathways to structured financing.
        </p>
      </section>

      <section className="mt-8 rounded-2xl border border-white/10 bg-slate-900/60 p-8">
        <h2 className="text-2xl font-semibold">Strength Indicators Based on Your Inputs</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-300">
          <li>Business profile data gives lenders a clearer underwriting picture.</li>
          <li>Revenue and operating history details help establish capacity and stability.</li>
          <li>Receivables and collateral information can unlock additional structure options.</li>
          <li>Your submission provides a strong starting point for tailored lender matching.</li>
        </ul>
      </section>

      <section className="mt-8 rounded-2xl border border-white/10 bg-slate-900/60 p-8">
        <h2 className="text-2xl font-semibold">What This Means For You</h2>
        <p className="mt-4 text-slate-300">
          Lenders evaluate risk using a blend of cash flow consistency, time in business, leverage position,
          and asset support. A structured application organizes these factors so your strengths are easy to
          understand, helping position your request for the right product, terms, and speed.
        </p>
      </section>

      <section className="mt-8 rounded-2xl border border-blue-300/30 bg-blue-950/40 p-8 text-center">
        <h2 className="text-2xl font-semibold">Start Your Structured Application</h2>
        <p className="mt-3 text-slate-200">Continue now to convert this momentum into a complete financing recommendation.</p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href={`https://client.boreal.financial/apply?readiness=${sessionToken}`} className="rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
            Start Your Structured Application
          </a>
          <a href="/contact" className="rounded-full border border-white/40 px-6 py-3 font-semibold text-white transition hover:border-white">
            Speak With an Advisor
          </a>
        </div>
      </section>
    </main>
  );
}
