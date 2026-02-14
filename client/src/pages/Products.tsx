import { Link } from "wouter";
import { products } from "@/data/products";

export default function Products() {
  return (
    <div className="bg-[#020817] text-white">
      <section className="mx-auto max-w-7xl px-6 py-12">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-200">Products</p>
        <h1 className="mt-3 text-5xl font-bold md:text-6xl">Products Available</h1>
      </section>

      <section className="mx-auto max-w-7xl space-y-8 px-6 pb-12">
        {products.map((product) => (
          <article key={product.slug} className="grid gap-8 rounded-3xl bg-[#0a1731] p-6 ring-1 ring-white/10 md:grid-cols-2 md:p-8">
            <img src={product.image} alt={product.name} className="h-80 w-full rounded-2xl object-cover" loading="lazy" />
            <div>
              <h2 className="mt-2 text-4xl font-bold">{product.name}</h2>
              <p className="mt-4 text-slate-300">{product.description}</p>
              <Link href={`/products/${product.slug}`} className="mt-6 inline-block rounded bg-white px-4 py-2 text-black">
                Learn More
              </Link>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
