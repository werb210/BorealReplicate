import { productsBySlug, type ProductSlug } from "@/data/products";

type ProductDetailProps = {
  slug: string;
};

export default function ProductDetail({ slug }: ProductDetailProps) {
  const product = productsBySlug[slug as ProductSlug];

  if (!product) return null;

  return (
    <div className="mx-auto max-w-6xl px-6 pb-16 pt-28 text-white">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <img src={product.image} className="w-full rounded-xl" alt={product.name} loading="lazy" />

        <div>
          <h1 className="mb-6 text-4xl font-bold">{product.name}</h1>
          <p className="mb-6 text-lg">{product.description}</p>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-blue-400">Best For</h3>
              <p>{product.bestFor.join(" ")}</p>
            </div>

            <div>
              <h3 className="font-semibold text-blue-400">Typical Terms</h3>
              <p>{product.terms}</p>
            </div>

            <div>
              <h3 className="font-semibold text-blue-400">Rates</h3>
              <p>{product.rates}</p>
            </div>

            <div>
              <h3 className="font-semibold text-blue-400">Why It Works</h3>
              <p>{product.why}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
