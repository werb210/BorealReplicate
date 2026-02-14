import { products } from "@/data/products";

export default function ProductComparison() {
  return (
    <section className="bg-black px-8 py-12 text-white">
      <h2 className="mb-10 text-3xl font-bold">Compare Financing Options</h2>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-700 text-white">
          <thead>
            <tr className="bg-gray-900">
              <th className="p-3 text-left">Product</th>
              <th className="p-3">Speed</th>
              <th className="p-3">Best Use</th>
              <th className="p-3">Repayment</th>
              <th className="p-3">Collateral</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.slug} className="border-t border-gray-700">
                <td className="p-3 font-semibold">{p.name}</td>
                <td className="p-3">Fast</td>
                <td className="p-3">Working Capital</td>
                <td className="p-3">Flexible</td>
                <td className="p-3">Depends on facility</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
