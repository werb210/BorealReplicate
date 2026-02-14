import { products } from "@/data/products";

const categories = ["Speed", "Best Use", "Repayment", "Collateral"] as const;

const categoryValueMap: Record<(typeof categories)[number], keyof (typeof products)[number]> = {
  Speed: "speed",
  "Best Use": "bestUse",
  Repayment: "repayment",
  Collateral: "collateral",
};

const orderedSlugs = [
  "loc",
  "term-loan",
  "equipment-financing",
  "invoice-factoring",
  "po-financing",
  "asset-based-lending",
];

export default function ProductComparison() {
  const orderedProducts = orderedSlugs.map((slug) => products.find((product) => product.slug === slug)).filter(Boolean);

  return (
    <section className="bg-[#020817] px-5 py-10 text-white md:px-6 md:py-12">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-6 text-3xl font-bold">Compare Financing Options</h2>

        <div className="overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full min-w-[700px] border-collapse text-sm">
            <thead className="bg-[#08132a]">
              <tr>
                <th className="p-4 text-left">Category</th>
                {orderedProducts.map((product) => (
                  <th key={product!.slug} className="p-4 text-left">{product!.name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {categories.map((category) => (
                <tr key={category} className="border-t border-white/10 bg-[#040b1a] align-top">
                  <td className="p-4 font-semibold">{category}</td>
                  {orderedProducts.map((product) => (
                    <td key={`${category}-${product!.slug}`} className="p-4 text-slate-300">{product![categoryValueMap[category]]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
