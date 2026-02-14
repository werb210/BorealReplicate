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
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h1 className="mb-6 text-4xl font-bold">{product.name}</h1>

            <p className="mb-6 text-gray-300">{product.description}</p>

            <ul className="space-y-2 text-gray-400">
              <li>• Fast underwriting and responsive execution</li>
              <li>• Flexible facility design aligned to cash flow</li>
              <li>• Structured for growth, liquidity, and stability</li>
              <li>• Advisory support through funding and beyond</li>
            </ul>

            <div className="mt-8">
              <a href="https://client.boreal.financial" className="rounded bg-blue-600 px-6 py-3">
                Apply Now
              </a>
            </div>
          </div>

          <div>
            <img
              src={product.image}
              alt={product.name}
              onError={(event) => {
                event.currentTarget.src = "/images/products/term-loan.jpg";
              }}
              className="rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
