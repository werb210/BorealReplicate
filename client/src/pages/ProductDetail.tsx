import { products } from "@/data/products";

type ProductDetailProps = {
  slug: string;
};

export default function ProductDetail({ slug }: ProductDetailProps) {
  const normalizedSlug = slug === "po-financing" ? "purchase-order-financing" : slug;
  const product = products.find((item) => item.slug === normalizedSlug);

  return (
    <div className="min-h-screen bg-white text-black">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <img
          src={product?.heroImage ?? `/images/products/${normalizedSlug}.jpg`}
          alt={product?.name ?? normalizedSlug}
          onError={(event) => {
            event.currentTarget.src = "/images/products/term.jpg";
          }}
          className="mb-10 h-72 w-full rounded object-cover"
        />

        <h1 className="mb-6 text-4xl font-semibold capitalize">{normalizedSlug.replaceAll("-", " ")}</h1>

        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="mb-4 text-xl font-semibold">What This Product Does</h3>
            <p className="leading-relaxed text-neutral-700">
              Flexible capital designed to improve liquidity, stabilize cash flow, and accelerate growth.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-semibold">Typical Structure</h3>
            <ul className="space-y-2 text-neutral-700">
              <li>• Competitive market rates</li>
              <li>• Flexible repayment structures</li>
              <li>• Structured to match cash flow cycles</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
