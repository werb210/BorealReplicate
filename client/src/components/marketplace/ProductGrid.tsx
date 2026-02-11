import { Link } from "wouter";

const products = [
  { label: "Term Loans", href: "/products/term-loan" },
  { label: "Lines of Credit", href: "/products/line-of-credit" },
  { label: "Factoring", href: "/products/factoring" },
  { label: "Purchase Order Financing", href: "/products/purchase-order-finance" },
  { label: "Equipment Financing", href: "/products/equipment-finance" },
];

export function ProductGrid() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-8 md:py-10">
      <div className="flex items-end justify-between gap-3">
        <h2 className="text-2xl font-semibold">Products</h2>
        <Link href="/apply" className="text-sm font-semibold underline underline-offset-4">Apply Now</Link>
      </div>
      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <article key={product.label} className="rounded-lg border p-4">
            <h3 className="text-sm font-semibold">{product.label}</h3>
            <Link href={product.href} className="mt-2 inline-block text-sm text-slate-700 underline underline-offset-4">Learn more</Link>
          </article>
        ))}
      </div>
    </section>
  );
}
