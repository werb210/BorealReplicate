const products = ["Term Loan", "Line of Credit", "Factoring", "Equipment Finance", "Purchase Order Finance"];

export function ProductGrid() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <h2 className="text-2xl font-semibold">Financing products</h2>
      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-5">
        {products.map((product) => (
          <article key={product} className="rounded-lg border p-4">
            <h3 className="text-sm font-medium">{product}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}
