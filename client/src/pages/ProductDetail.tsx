import { products } from "@/data/products";

type ProductDetailProps = {
  slug: string;
};

export default function ProductDetail({ slug }: ProductDetailProps) {
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return <div className="min-h-screen bg-black px-4 py-12 text-white">Product not found.</div>;
  }

  return (
    <div className="min-h-screen bg-black pb-16 pt-24 text-white">
      <div className="mx-auto max-w-6xl px-4">
        <img src={product.image} alt={product.name} className="mb-8 w-full rounded" onError={(event) => {
          event.currentTarget.src = "/images/products/term-loan.jpg";
        }} />

        <h1 className="mb-6 text-4xl font-bold">{product.name}</h1>

        <p className="mb-6 text-lg text-gray-300">{product.description}</p>

        <ul className="space-y-2 text-gray-300">
          <li>
            <strong>Term:</strong> {product.term}
          </li>
          <li>
            <strong>Rates:</strong> {product.rateRange}
          </li>
          <li>
            <strong>Best For:</strong> {product.bestFor}
          </li>
        </ul>
      </div>
    </div>
  );
}
