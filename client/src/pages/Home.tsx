import { Link } from "wouter";
import SEO from "@/components/SEO";
import { APPLY_URL } from "@/config/site";
import { industries } from "@/data/industries";
import { products } from "@/data/products";
import { buildApplyUrl, getReadinessSessionToken } from "@/utils/session";

export default function Home() {
  const readinessToken = getReadinessSessionToken();
  const applyHref = buildApplyUrl(APPLY_URL, readinessToken);

  return (
    <>
      <SEO title="Boreal Financial | Boutique Capital Advisory" description="Boutique advisory capital structuring with AI-guided packaging." />
      <main className="bg-[#020817] text-white">
        {readinessToken ? (
          <section className="mx-auto max-w-7xl px-5 pt-4 md:px-6">
            <div className="flex flex-col gap-3 rounded-2xl border border-blue-200/30 bg-blue-900/30 px-4 py-3 md:flex-row md:items-center md:justify-between">
              <p className="font-semibold text-blue-100">Continuing your application</p>
              <a href={applyHref} className="w-full rounded-full bg-white px-5 py-2 text-center text-sm font-semibold text-black md:w-auto">Apply Now</a>
            </div>
          </section>
        ) : null}
        <section className="relative overflow-hidden">
          <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1800&q=80" alt="Capital advisory team" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-[#06152f]/85 to-black/45" />
          <div className="relative mx-auto max-w-7xl px-5 py-12 md:px-6 md:py-20">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-200">Boutique Capital Advisory</p>
            <h1 className="mt-3 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">Strategic financing structured with precision.</h1>
            <p className="mt-4 max-w-2xl text-base text-slate-200 md:text-lg">Institutional-grade financing strategy built for growth-stage and mature operators.</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href={applyHref} className="w-full rounded-full bg-blue-600 px-5 py-2.5 text-center font-semibold text-white sm:w-auto">{readinessToken ? "Continue Application" : "Apply Now"}</a>
              <Link href="/contact" className="w-full rounded-full border border-white/35 px-5 py-2.5 text-center font-semibold sm:w-auto">Speak With Advisor</Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-10 md:px-6 md:py-12">
          <h2 className="text-3xl font-bold md:text-4xl">Industries</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <Link key={industry.slug} href={`/industries/${industry.slug}`} className="group relative overflow-hidden rounded-2xl">
                <img src={industry.image} alt={industry.name} className="h-52 w-full object-cover transition duration-300 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
                <div className="absolute bottom-0 p-4"><h3 className="text-xl font-bold">{industry.name}</h3></div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 pb-10 md:px-6 md:pb-12">
          <h2 className="text-3xl font-bold md:text-4xl">Products</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
              <article key={product.slug} className="relative overflow-hidden rounded-2xl">
                <img src={product.image} alt={product.name} className="h-56 w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-4">
                  <h3 className="text-xl font-bold">{product.name}</h3>
                  <p className="mt-1 text-sm text-slate-200">{product.description}</p>
                  <Link href={`/products/${product.slug}`} className="mt-3 inline-flex w-fit rounded-full bg-blue-600 px-4 py-2 text-xs font-semibold">Learn More</Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
