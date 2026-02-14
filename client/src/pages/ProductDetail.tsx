import { products } from "@/data/products";

type ProductDetailProps = {
  slug: string;
};

export default function ProductDetail({ slug }: ProductDetailProps) {
  const normalizedSlug = slug === "po-financing" ? "purchase-order-financing" : slug;
  const product = products.find((item) => item.slug === normalizedSlug);

  return (
    <div className="min-h-screen bg-black pb-16 pt-24 text-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h1 className="mb-6 text-4xl font-bold capitalize">{normalizedSlug.replaceAll("-", " ")}</h1>

            <p className="mb-6 text-gray-300">
              Designed to provide flexible capital aligned with operational needs and growth objectives.
            </p>

            <ul className="space-y-2 text-gray-400">
              <li>• Typical Terms: 6–60 months</li>
              <li>• Competitive market-based rates</li>
              <li>• Structured around cash flow</li>
              <li>• Fast underwriting</li>
            </ul>

            <div className="mt-8">
              <a href="https://client.boreal.financial" className="rounded bg-blue-600 px-6 py-3">
                Apply Now
              </a>
            </div>
          </div>

          <div>
            <img
              src={product?.heroImage ?? `/images/products/${normalizedSlug}.jpg`}
              alt={product?.name ?? normalizedSlug}
              onError={(event) => {
                event.currentTarget.src = "/images/products/term.jpg";
              }}
              className="rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
