import React from "react";
import { products } from "@/data/products";

const orderedSlugs = ["loc", "term-loan", "equipment-financing", "factoring", "po-financing", "asset-based-lending"] as const;

const categories = [
  { label: "Speed", key: "speed" },
  { label: "Best Use", key: "bestUse" },
  { label: "Repayment", key: "repayment" },
  { label: "Collateral", key: "collateral" },
  { label: "Typical Term", key: "term" },
  { label: "Typical Cost Range", key: "rateRange" },
] as const;

export default function ProductComparison() {
  const orderedProducts = orderedSlugs
    .map((slug) => products.find((product) => product.slug === slug))
    .filter((product): product is (typeof products)[number] => Boolean(product));

  return (
    <section className="bg-[#020817] px-5 py-10 text-white md:px-6 md:py-12">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-6 text-3xl font-bold">Compare Financing Options</h2>

        <div className="overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full min-w-[980px] border-collapse text-sm">
            <thead className="bg-[#08132a]">
              <tr>
                <th className="p-4 text-left">Category</th>
                {orderedProducts.map((product) => (
                  <th key={product.slug} className="p-4 text-left">{product.name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {categories.map((category) => (
                <tr key={category.label} className="border-t border-white/10 bg-[#040b1a] align-top">
                  <td className="p-4 font-semibold">{category.label}</td>
                  {orderedProducts.map((product) => (
                    <td key={`${product.slug}-${category.label}`} className="p-4 text-slate-300">{product[category.key]}</td>
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
