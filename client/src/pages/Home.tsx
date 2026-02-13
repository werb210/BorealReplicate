import { useEffect } from "react";
import { Link } from "wouter";
import SEO from "@/components/SEO";
import { APPLY_URL } from "@/config/site";
import { scrollToTop } from "@/utils/scrollToTop";

const verticals = [
  {
    title: "Distribution",
    description: "Inventory, receivables, and order-flow structuring for fast-moving operations.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    link: "/industries/distribution",
  },
  {
    title: "Media",
    description: "Campaign and production capital aligned to milestone-based delivery.",
    image: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&w=1200&q=80",
    link: "/industries/media",
  },
  {
    title: "Healthcare",
    description: "Growth financing built around continuity, staffing, and equipment plans.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80",
    link: "/industries/healthcare",
  },
];

export default function Home() {
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <>
      <SEO title="Boreal Financial | Boutique Capital Advisory" description="Boutique advisory capital structuring with AI-guided packaging." />
      <main>
        <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Boutique Capital Advisory</p>
            <h1 className="mt-4 text-5xl font-semibold leading-tight text-slate-900">Strategic financing, structured with precision.</h1>
            <p className="mt-6 text-lg text-slate-600">We build lender-ready files for complex business capital needs.</p>
            <div className="mt-8 flex gap-3">
              <a href={APPLY_URL} className="rounded-lg bg-slate-900 px-6 py-3 text-white">Apply Now</a>
              <Link href="/contact" className="rounded-lg border border-slate-300 px-6 py-3 text-slate-900">Speak With Advisor</Link>
            </div>
          </div>
          <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80" alt="Capital advisory team" className="h-[420px] w-full rounded-2xl object-cover shadow-xl" />
        </section>

        <section className="bg-slate-50 py-16">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-4xl font-semibold text-slate-900">Industry expertise, advisory execution.</h2>
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {verticals.map((vertical) => (
                <article key={vertical.title} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                  <img src={vertical.image} alt={vertical.title} className="h-48 w-full object-cover" />
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold text-slate-900">{vertical.title}</h3>
                    <p className="mt-3 text-slate-600">{vertical.description}</p>
                    <Link href={vertical.link} className="mt-5 inline-block text-sm font-semibold text-slate-900">View Industry →</Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
