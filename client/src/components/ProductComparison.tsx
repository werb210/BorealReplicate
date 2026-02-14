import { PRODUCTS } from "@/config/products";

export default function ProductComparison() {
  return (
    <section className="bg-black px-8 py-16 text-white">
      <h2 className="mb-10 text-3xl font-bold">Compare Financing Options</h2>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr>
              <th></th>
              <th>Best Use</th>
              <th>Repayment</th>
              <th>Collateral</th>
            </tr>
          </thead>
          <tbody>
            {PRODUCTS.map((p) => (
              <tr key={p.slug} className="border-t border-gray-700">
                <td className="py-4 font-semibold">{p.name}</td>
                <td>{p.bestFor}</td>
                <td>{p.repayment}</td>
                <td>{p.collateral}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
