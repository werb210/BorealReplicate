import { products } from "@/data/products";

type ProductDetailProps = {
  slug: string;
};

export default function ProductDetail({ slug }: ProductDetailProps) {
  const normalizedSlug = slug === "po-financing" ? "purchase-order-financing" : slug;
  const product = products.find((p) => p.slug === normalizedSlug);

  if (!product) return null;

  return (
    <section className="mx-auto max-w-5xl px-6 py-16 text-white">
      <h1 className="mb-6 text-4xl font-semibold">{product.title}</h1>

      <img src={product.image} className="mb-8 rounded-xl" alt={product.title} loading="lazy" />

      <p className="mb-6 text-white/70">{product.summary}</p>

      <div className="space-y-4 rounded-xl bg-[#0B1C33] p-8">
        <div>
          <span className="text-white/60">Typical Term:</span>
          <div>{product.term}</div>
        </div>
        <div>
          <span className="text-white/60">Rates:</span>
          <div>{product.rates}</div>
        </div>
      </div>
    </section>
  );
}
