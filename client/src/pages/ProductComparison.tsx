import { APPLY_URL } from "@/config/site";
import { products } from "@/data/products";

export default function ProductComparison() {
  return (
    <div className="bg-[#020817] text-white">
      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-200">Comparison</p>
        <h1 className="mt-3 text-5xl font-bold md:text-6xl">Compare Capital Structures</h1>
        <p className="mt-4 max-w-3xl text-lg text-slate-300">Review positioning and structure highlights across all products.</p>
      </section>

      <section className="mx-auto max-w-7xl space-y-8 px-6 pb-16">
        {products.map((product) => (
          <article key={product.slug} className="relative overflow-hidden rounded-3xl">
            <img src={product.heroImage} alt={product.title} className="h-[360px] w-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-[#06152f]/75 to-black/40" />
            <div className="relative grid gap-6 p-8 md:grid-cols-[1fr_auto] md:items-end">
              <div>
                <h2 className="text-4xl font-bold">{product.title}</h2>
                <p className="mt-2 text-slate-200">{product.tagline}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-100">
                  {product.structureHighlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2"><span className="mt-1.5 h-2 w-2 rounded-full bg-blue-400" />{highlight}</li>
                  ))}
                </ul>
              </div>
              <a href={APPLY_URL} className="inline-flex h-fit rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-500">Apply</a>
            </div>
          </article>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-4 rounded-2xl bg-[#0a1731] p-6 ring-1 ring-white/10 md:grid-cols-3">
          <div><p className="text-xs uppercase tracking-[0.2em] text-blue-200">Speed</p><p className="mt-1 text-slate-200">LOC + Factoring + PO typically move fastest.</p></div>
          <div><p className="text-xs uppercase tracking-[0.2em] text-blue-200">Scale</p><p className="mt-1 text-slate-200">Term + Equipment best for planned expansion.</p></div>
          <div><p className="text-xs uppercase tracking-[0.2em] text-blue-200">Flexibility</p><p className="mt-1 text-slate-200">Blend products to match your cash conversion cycle.</p></div>
        </div>
      </section>
    </div>
  );
}
