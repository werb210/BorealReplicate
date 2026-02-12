import { useParams } from "wouter";
import { getIndustryBySlug } from "@/router/content";
import NotFound from "@/pages/NotFound";
import { SEO } from "@/seo/SEO";

export default function IndustryPage() {
  const params = useParams();
  const industry = params?.slug ? getIndustryBySlug(params.slug) : undefined;

  if (!industry) return <NotFound />;

  return (
    <section className="mx-auto max-w-5xl px-4 py-12">
      <SEO
        title={`${industry.name} Financing | Boreal Financial`}
        description={`Learn how Boreal supports ${industry.name.toLowerCase()} businesses with marketplace lending options.`}
      />
      <img
        src={industry.heroImage}
        alt={industry.name}
        className="w-full h-[420px] object-cover object-center rounded-xl"
        loading="lazy"
        style={{ objectFit: "cover" }}
      />
      <h1 className="mt-6 text-3xl font-bold">{industry.name}</h1>
      <p className="mt-3 text-slate-600">{industry.overview}</p>
      <section className="mt-6">
        <h2 className="text-xl font-semibold">Examples</h2>
        <ul className="mt-2 list-disc pl-5 text-slate-700">
          {industry.examples.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>
      <a href="/apply" className="mt-8 inline-block rounded-md bg-slate-900 px-4 py-3 font-semibold text-white">Apply Now</a>
    </section>
  );
}
