import { useEffect } from "react";
import { Link } from "wouter";
import SEO from "@/components/SEO";
import LenderLogos from "@/components/LenderLogos";
import { scrollToTop } from "@/utils/scrollToTop";

const verticals = [
  {
    title: "Construction",
    description: "Progress draws, equipment financing, and receivables structuring for project-based cash cycles.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
    link: "/construction",
  },
  {
    title: "Manufacturing",
    description: "Inventory, machinery, and PO-backed facilities aligned to production velocity and margin protection.",
    image: "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=1200&q=80",
    link: "/manufacturing",
  },
  {
    title: "Logistics",
    description: "Fleet, fuel, and AR facilities designed to keep freight moving without liquidity compression.",
    image: "https://images.unsplash.com/photo-1485083269755-a7b559a4fe5e?auto=format&fit=crop&w=1200&q=80",
    link: "/logistics",
  },
];

export default function Home() {
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <>
      <SEO title="Boreal Financial | Boutique Capital Advisory" description="Boutique advisory for construction, manufacturing, and logistics capital structuring." />
      <main>
        <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Boutique Capital Advisory</p>
            <h1 className="mt-4 text-5xl font-semibold leading-tight text-slate-900">AI-guided structuring for complex capital files.</h1>
            <p className="mt-6 text-lg text-slate-600">We prepare lender-ready packages for construction, manufacturing, and logistics operators that need speed without compromising structure.</p>
            <div className="mt-8 flex gap-3">
              <Link href="/apply" className="rounded-lg bg-slate-900 px-6 py-3 text-white">Apply Now</Link>
              <Link href="/contact" className="rounded-lg border border-slate-300 px-6 py-3 text-slate-900">Speak With Advisor</Link>
            </div>
          </div>
          <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80" alt="Capital advisory team" className="h-[420px] w-full rounded-2xl object-cover shadow-xl" />
        </section>

        <section className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-4xl font-semibold text-slate-900">Vertical expertise, structured execution.</h2>
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {verticals.map((vertical) => (
                <article key={vertical.title} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                  <img src={vertical.image} alt={vertical.title} className="h-48 w-full object-cover" />
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold text-slate-900">{vertical.title}</h3>
                    <p className="mt-3 text-slate-600">{vertical.description}</p>
                    <Link href={vertical.link} className="mt-5 inline-block text-sm font-semibold text-slate-900">View Vertical →</Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-4xl font-semibold text-slate-900">AI-Driven Capital Structuring</h2>
          <p className="mx-auto mt-4 max-w-4xl text-lg text-slate-600">Boreal’s AI underwriting engine analyzes banking trends, contract structures, and capital stack positioning before submission to increase approval probability and reduce structuring friction.</p>
          <div className="mt-10 grid grid-cols-2 gap-4 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm md:grid-cols-4">
            {['Intake', 'AI Packaging', 'Lender Match', 'Structured Offer'].map((step) => (
              <div key={step} className="rounded-xl bg-slate-50 p-4 text-sm font-semibold text-slate-700">{step}</div>
            ))}
          </div>
        </section>

        <section className="bg-[#0f1f36] text-center text-white">
          <h2 className="text-4xl font-semibold">Capital clarity. Structured execution.</h2>
          <Link href="/apply" className="mt-6 inline-block rounded-lg bg-white px-6 py-3 font-semibold text-slate-900">Apply Now</Link>
        </section>

        <LenderLogos />
      </main>
    </>
  );
}
