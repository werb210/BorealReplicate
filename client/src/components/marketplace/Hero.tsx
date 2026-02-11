import { Link } from "wouter";

export function Hero() {
  return (
    <section className="bg-slate-900 py-16 text-white md:py-20">
      <div className="mx-auto grid max-w-6xl gap-5 px-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">Boreal Marketplace</p>
        <h1 className="max-w-3xl text-3xl font-bold leading-tight md:text-5xl">One application. Multiple lender offers.</h1>
        <p className="max-w-2xl text-base text-slate-200 md:text-lg">
          Boreal is a marketplace built for business owners who want options fast. Apply once and compare offers side-by-side with no lender-to-lender back-and-forth.
        </p>
        <p className="text-sm text-slate-300">Canada first. U.S. supported.</p>
        <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:gap-5">
          <Link href="/apply" className="rounded-md bg-white px-5 py-3 text-center font-semibold text-slate-900">Apply Now</Link>
          <a href="#how-it-works" className="text-sm font-semibold text-white underline underline-offset-4">How it works</a>
        </div>
      </div>
    </section>
  );
}
