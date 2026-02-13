import { Link } from "wouter";
import SEO from "@/components/SEO";
import { APPLY_URL } from "@/config/site";
import { industries } from "@/data/industries";
import { products } from "@/data/products";

export default function Home() {
  return (
    <>
      <SEO title="Boreal Financial | Boutique Capital Advisory" description="Boutique advisory capital structuring with AI-guided packaging." />
      <main className="bg-[#020817] text-white">
        <section className="relative overflow-hidden">
          <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1800&q=80" alt="Capital advisory team" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-[#06152f]/85 to-black/45" />
          <div className="relative mx-auto max-w-7xl px-6 py-24">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-200">Boutique Capital Advisory</p>
            <h1 className="mt-4 max-w-4xl text-5xl font-bold leading-tight md:text-6xl">Strategic financing structured with precision.</h1>
            <p className="mt-6 max-w-2xl text-lg text-slate-200">Institutional-grade financing strategy built for growth-stage and mature operators.</p>
            <div className="mt-8 flex gap-3">
              <a href={APPLY_URL} className="rounded-full bg-blue-600 px-6 py-3 font-semibold text-white">Apply Now</a>
              <Link href="/contact" className="rounded-full border border-white/35 px-6 py-3 font-semibold">Speak With Advisor</Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="text-4xl font-bold">Industries</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {industries.map((industry) => (
              <Link key={industry.slug} href={`/industries/${industry.slug}`} className="group relative overflow-hidden rounded-2xl">
                <img src={industry.heroImage} alt={industry.title} className="h-64 w-full object-cover transition group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
                <div className="absolute bottom-0 p-5"><h3 className="text-2xl font-bold">{industry.title}</h3></div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-24">
          <h2 className="text-4xl font-bold">Products</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
              <article key={product.slug} className="relative overflow-hidden rounded-2xl">
                <img src={product.heroImage} alt={product.title} className="h-60 w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-5">
                  <h3 className="text-2xl font-bold">{product.title}</h3>
                  <p className="mt-1 text-sm text-slate-200">{product.tagline}</p>
                  <Link href="/products" className="mt-4 inline-flex w-fit rounded-full bg-blue-600 px-4 py-2 text-xs font-semibold">Explore Product</Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
