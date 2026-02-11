import { useRoute } from "wouter";
import { Seo } from "@/components/Seo";
import { SiteLayout } from "@/components/SiteLayout";
import { Button } from "@/components/ui/button";
import { breadcrumbJsonLd, financialServiceJsonLd, organizationJsonLd, webPageJsonLd } from "@/lib/structured-data";
import { getIndustry } from "@/data/marketplace";
import NotFound from "@/pages/not-found";

export default function IndustryPage() {
  const [, params] = useRoute<{ slug: string }>("/industries/:slug");
  const industry = params?.slug ? getIndustry(params.slug) : undefined;

  if (!industry) {
    return <NotFound />;
  }

  const title = `${industry.name} Financing | Boreal Financial`;
  const description = industry.description;
  const path = `/industries/${industry.slug}`;

  return (
    <SiteLayout>
      <Seo
        title={title}
        description={description}
        canonical={`https://borealfinancial.com${path}`}
        jsonLd={[
          organizationJsonLd,
          webPageJsonLd(path, title, description),
          financialServiceJsonLd(`${industry.name} Financing`, description, path),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Industries", path: "/industries/construction" },
            { name: industry.name, path },
          ]),
        ]}
      />

      <section className="py-16 border-b">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-semibold">{industry.name} funding solutions</h1>
          <p className="mt-4 text-muted-foreground">{industry.description}</p>
          <h2 className="text-2xl font-semibold mt-8">Common financing needs</h2>
          <ul className="list-disc pl-6 mt-3 text-muted-foreground">
            {industry.painPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <div className="mt-8 flex gap-3 flex-col sm:flex-row">
            <Button asChild><a href="/apply">Start Application</a></Button>
            <Button asChild variant="outline"><a href="/products/lines-of-credit">Explore Products</a></Button>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
