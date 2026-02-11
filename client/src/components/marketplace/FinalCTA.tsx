import { Link } from "wouter";

export function FinalCTA() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14">
      <div className="rounded-xl bg-slate-900 p-8 text-white">
        <h2 className="text-2xl font-semibold">Ready to put your file in front of multiple lenders?</h2>
        <p className="mt-2 text-slate-200">Complete one application and receive structured offers in one place.</p>
        <Link href="/apply" className="mt-5 inline-block rounded-md bg-white px-5 py-3 font-semibold text-slate-900">Start Application</Link>
      </div>
    </section>
  );
}
