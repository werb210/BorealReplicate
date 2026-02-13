import { Link } from "wouter";
import { products } from "@/data/products";

export default function Products() {
  return (
    <div className="bg-[#020817] text-white">
      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-200">Products</p>
        <h1 className="mt-3 text-5xl font-bold md:text-6xl">Capital Structures Built for Growth</h1>
      </section>

      <section className="mx-auto max-w-7xl space-y-10 px-6 pb-24">
        {products.map((product, idx) => (
          <article key={product.slug} className="grid gap-8 rounded-3xl bg-[#0a1731] p-6 ring-1 ring-white/10 md:grid-cols-2 md:p-8">
            <img src={product.heroImage} alt={product.title} className={`h-80 w-full rounded-2xl object-cover ${idx % 2 === 1 ? "md:order-2" : ""}`} loading="lazy" />
            <div className={idx % 2 === 1 ? "md:order-1" : ""}>
              <p className="text-sm uppercase tracking-[0.2em] text-blue-200">{product.tagline}</p>
              <h2 className="mt-2 text-4xl font-bold">{product.title}</h2>
              <p className="mt-4 text-slate-300">{product.shortDescription}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-200">
                {product.bestFor.map((item) => (
                  <li key={item} className="flex items-start gap-2"><span className="mt-1.5 h-2 w-2 rounded-full bg-blue-400" />{item}</li>
                ))}
              </ul>
              <Link href={product.href} className="mt-6 inline-block rounded-full bg-blue-600 px-6 py-3">
                Learn More
              </Link>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
