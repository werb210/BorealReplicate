import { Seo } from "@/components/Seo";
import { SiteLayout } from "@/components/SiteLayout";
import { Button } from "@/components/ui/button";
import { breadcrumbJsonLd, financialServiceJsonLd, organizationJsonLd, webPageJsonLd } from "@/lib/structured-data";

const processSteps = [
  "Share your business profile and funding objective once.",
  "Boreal matches your file to lenders aligned to your deal type.",
  "You receive structured responses and compare execution paths.",
  "Finalize diligence and close with your preferred lender option.",
];

export default function HowItWorks() {
  const title = "How It Works | Boreal Financial Marketplace";
  const description = "Learn Boreal's marketplace process from one application to lender responses and funded outcomes.";

  return (
    <SiteLayout>
      <Seo
        title={title}
        description={description}
        canonical="https://borealfinancial.com/how-it-works"
        jsonLd={[
          organizationJsonLd,
          webPageJsonLd("/how-it-works", title, description),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "How It Works", path: "/how-it-works" },
          ]),
          financialServiceJsonLd("Marketplace Process", description, "/how-it-works"),
        ]}
      />

      <section className="py-16 border-b">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-semibold tracking-tight">How Boreal's marketplace works</h1>
          <p className="mt-4 text-muted-foreground">From intake to lender responses, we keep the process structured and transparent.</p>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold">Marketplace process</h2>
          <ol className="mt-6 space-y-3 list-decimal pl-6">
            {processSteps.map((step) => (
              <li key={step} className="text-muted-foreground">{step}</li>
            ))}
          </ol>
          <div className="mt-8 flex gap-3 flex-col sm:flex-row">
            <Button asChild><a href="/apply">Start Application</a></Button>
            <Button asChild variant="outline"><a href="/products/term-loans">Explore Products</a></Button>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
