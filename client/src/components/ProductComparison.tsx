import { products } from "@/data/products";

const categories = ["Speed", "Best Use", "Repayment", "Collateral"] as const;

const categoryValueMap: Record<(typeof categories)[number], keyof (typeof products)[number]> = {
  Speed: "speed",
  "Best Use": "bestUse",
  Repayment: "repayment",
  Collateral: "collateral",
};

export default function ProductComparison() {
  return (
    <section className="bg-black px-8 py-12 text-white">
      <h2 className="mb-10 text-3xl font-bold">Compare Financing Options</h2>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr>
              <th className="p-4 text-left"></th>
              {products.map((product) => (
                <th key={product.slug} className="p-4 text-center">
                  {product.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr key={category} className="border-t border-gray-700">
                <td className="p-4 font-semibold">{category}</td>
                {products.map((product) => (
                  <td key={`${product.slug}-${category}`} className="p-4 text-center text-gray-300">
                    {product[categoryValueMap[category]]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
