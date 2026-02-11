import { useParams } from "wouter";
import { getProductBySlug } from "@/router/content";
import NotFound from "@/pages/NotFound";
import { SEO } from "@/seo/SEO";
import { breadcrumbSchema, financialServiceSchema } from "@/seo/structuredData";

export default function ProductPage() {
  const params = useParams();
  const product = params?.slug ? getProductBySlug(params.slug) : undefined;

  if (!product) return <NotFound />;

  const description = `${product.name} through Boreal's structured marketplace where multiple lenders review one submission.`;

  return (
    <section className="mx-auto max-w-5xl px-4 py-12">
      <SEO
        title={`${product.name} | Boreal Financial`}
        description={description}
        schema={[
          financialServiceSchema(product.name, description),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Products", path: "/products" },
            { name: product.name, path: `/products/${product.slug}` },
          ]),
        ]}
      />
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <section className="mt-6"><h2 className="text-xl font-semibold">Problem statement</h2><p className="text-slate-600">{product.problem}</p></section>
      <section className="mt-6"><h2 className="text-xl font-semibold">How it works</h2><ul className="list-disc pl-5">{product.howItWorks.map((item) => <li key={item}>{item}</li>)}</ul></section>
      <section className="mt-6"><h2 className="text-xl font-semibold">Eligibility</h2><ul className="list-disc pl-5">{product.eligibility.map((item) => <li key={item}>{item}</li>)}</ul></section>
      <section className="mt-6"><h2 className="text-xl font-semibold">Documents required</h2><ul className="list-disc pl-5">{product.documents.map((item) => <li key={item}>{item}</li>)}</ul></section>
      <a href="/apply" className="mt-8 inline-block rounded-md bg-slate-900 px-4 py-3 font-semibold text-white">Start Application</a>
    </section>
  );
}
