import { Link } from "wouter";

export function Hero() {
  return (
    <section className="bg-slate-900 py-20 text-white">
      <div className="mx-auto grid max-w-6xl gap-6 px-4">
        <p className="text-sm uppercase tracking-wide text-slate-300">Boreal Marketplace</p>
        <h1 className="max-w-3xl text-4xl font-bold md:text-5xl">Submit once. Multiple lenders compete.</h1>
        <p className="max-w-2xl text-lg text-slate-200">Structured financing marketplace serving Canada and the United States.</p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href="/apply" className="rounded-md bg-white px-5 py-3 text-center font-semibold text-slate-900">Start Application</Link>
          <Link href="/how-it-works" className="rounded-md border border-white px-5 py-3 text-center font-semibold">How It Works</Link>
        </div>
      </div>
    </section>
  );
}
