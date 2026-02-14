import { products } from "@/data/products";

export default function ProductComparison() {
  const categories = ["Speed", "Best Use", "Repayment", "Collateral"];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse text-sm text-white">
        <thead>
          <tr>
            <th className="border border-neutral-700 p-4" />
            {categories.map((category) => (
              <th key={category} className="border border-neutral-700 p-4 text-left">
                {category}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.slug}>
              <td className="border border-neutral-700 p-4 font-semibold">{product.name}</td>
              <td className="border border-neutral-700 p-4">Fast to Moderate</td>
              <td className="border border-neutral-700 p-4">Working Capital / Growth</td>
              <td className="border border-neutral-700 p-4">Structured</td>
              <td className="border border-neutral-700 p-4">Varies</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
