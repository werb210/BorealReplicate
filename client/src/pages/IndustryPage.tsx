import { useParams } from "wouter";
import { getIndustryBySlug } from "@/router/content";
import NotFound from "@/pages/NotFound";
import { SEO } from "@/seo/SEO";
import { breadcrumbSchema, faqSchema } from "@/seo/structuredData";

export default function IndustryPage() {
  const params = useParams();
  const industry = params?.slug ? getIndustryBySlug(params.slug) : undefined;

  if (!industry) return <NotFound />;

  const description = `${industry.name} financing through Boreal's marketplace with tailored product matching.`;

  return (
    <section className="mx-auto max-w-5xl px-4 py-12">
      <SEO
        title={`${industry.name} Financing | Boreal Financial`}
        description={description}
        schema={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Industries", path: "/industries" },
            { name: industry.name, path: `/industries/${industry.slug}` },
          ]),
          faqSchema(industry.faqs),
        ]}
      />
      <h1 className="text-3xl font-bold">{industry.name}</h1>
      <section className="mt-6"><h2 className="text-xl font-semibold">Cash flow challenges</h2><ul className="list-disc pl-5">{industry.challenges.map((item) => <li key={item}>{item}</li>)}</ul></section>
      <section className="mt-6"><h2 className="text-xl font-semibold">Why marketplace helps</h2><ul className="list-disc pl-5">{industry.marketplaceHelp.map((item) => <li key={item}>{item}</li>)}</ul></section>
      <section className="mt-6"><h2 className="text-xl font-semibold">Relevant products</h2><ul className="list-disc pl-5">{industry.products.map((item) => <li key={item}>{item}</li>)}</ul></section>
      <a href="/apply" className="mt-8 inline-block rounded-md bg-slate-900 px-4 py-3 font-semibold text-white">Apply now</a>
    </section>
  );
}
