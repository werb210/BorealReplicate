import { Link, useParams } from "wouter";
import { useEffect } from "react";
import { getProductBySlug } from "@/router/content";
import NotFound from "@/pages/NotFound";
import { SEO } from "@/seo/SEO";
import { breadcrumbSchema, financialServiceSchema } from "@/seo/structuredData";
import { trackEvent } from "@/utils/analytics";

export default function ProductPage() {
  const params = useParams();
  const product = params?.slug ? getProductBySlug(params.slug) : undefined;

  if (!product) return <NotFound />;

  const description = `${product.name} through Boreal's marketplace: apply once and compare offers from multiple lenders.`;

  useEffect(() => {
    trackEvent("product_page_view", { product: product.slug });
  }, [product.slug]);

  return (
    <section className="mx-auto max-w-5xl px-4 py-10">
      <SEO
        title={`${product.name} | Boreal Financial`}
        description={product.intro}
        schema={[
          financialServiceSchema(product.name, description),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Products", path: "/" },
            { name: product.name, path: `/products/${product.slug}` },
          ]),
        ]}
      />
      <img src={product.heroImage} alt={product.name} className="w-full h-[420px] object-cover object-center rounded-xl" loading="lazy" style={{ objectFit: "cover" }} />
      <h1 className="mt-6 text-3xl font-bold">{product.name}</h1>
      <p className="mt-2 text-slate-600">{product.intro}</p>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">Best for</h2>
        <ul className="mt-2 list-disc pl-5 text-slate-700">
          {product.bestFor.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">How it works</h2>
        <ul className="mt-2 list-disc pl-5 text-slate-700">
          {product.howItWorks.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">Typical requirements</h2>
        <ul className="mt-2 list-disc pl-5 text-slate-700">
          {product.requirements.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">How It Works</h2>
        <p className="mt-2 text-slate-700">Step-by-step explanation of how we match your profile to lender programs, package your deal, and move through approvals efficiently.</p>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">Who It’s For</h2>
        <p className="mt-2 text-slate-700">Industry specific examples include construction firms managing draws, manufacturers buying raw materials, and logistics operators balancing receivables cycles.</p>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">Common Use Cases</h2>
        <ul className="mt-2 list-disc pl-5 text-slate-700">
          <li>Inventory purchase</li>
          <li>Seasonal working capital</li>
          <li>Equipment acquisition</li>
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">Why Not a Bank?</h2>
        <p className="mt-2 text-slate-700">Specialty lenders often provide greater speed, flexibility, and structuring advantages for asset-heavy or complex cash-flow situations.</p>
      </section>

      <Link href="/apply" className="mt-8 inline-block rounded-md bg-slate-900 px-4 py-3 font-semibold text-white" onClick={() => trackEvent("apply_clicked", { source: "product_page", product: product.slug })}>Apply Now</Link>
    </section>
  );
}
