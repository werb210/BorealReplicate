import { productsBySlug, type ProductSlug } from "@/data/products";

type ProductDetailProps = {
  slug: string;
};

export default function ProductDetail({ slug }: ProductDetailProps) {
  const product = productsBySlug[slug as ProductSlug];

  if (!product) {
    return (
      <div className="min-h-screen bg-[#050B1A] px-6 pt-32 text-white">
        <h1 className="mb-6 text-4xl font-bold">Product not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050B1A] px-6 pt-32 text-white">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-6 text-4xl font-bold">{product.title}</h1>
        <p className="max-w-2xl text-white/70">
          Detailed overview of this financing product, eligibility, structure, collateral, and ideal use cases.
        </p>
      </div>
    </div>
  );
}
