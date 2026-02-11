import { Seo } from "@/components/Seo";
import { SiteLayout } from "@/components/SiteLayout";
import { MarketplaceSteps } from "@/components/MarketplaceSteps";
import { IndustryCards } from "@/components/IndustryCards";
import { ProductGrid } from "@/components/ProductGrid";
import { Button } from "@/components/ui/button";
import { breadcrumbJsonLd, financialServiceJsonLd, homeFaqJsonLd, organizationJsonLd, webPageJsonLd } from "@/lib/structured-data";

export default function Home() {
  const title = "Structured Lending Marketplace | Boreal Financial";
  const description = "Submit once and receive lender responses across Canada and the US with Boreal's structured lending marketplace.";

  return (
    <SiteLayout>
      <Seo
        title={title}
        description={description}
        canonical="https://borealfinancial.com/"
        jsonLd={[
          organizationJsonLd,
          webPageJsonLd("/", title, description),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
          ]),
          financialServiceJsonLd("Structured Lending Marketplace", description, "/"),
          homeFaqJsonLd,
        ]}
      />

      <section className="border-b py-14 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold text-secondary tracking-tight">Submit once. Multiple lenders respond.</h1>
          <p className="mt-4 text-lg text-muted-foreground">Structured lending marketplace for Canada &amp; US</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg"><a href="/apply">Start Application</a></Button>
            <Button asChild variant="outline" size="lg"><a href="/how-it-works">How It Works</a></Button>
          </div>
        </div>
      </section>

      <MarketplaceSteps />
      <IndustryCards />
      <ProductGrid />

      <section className="py-14 bg-muted/30" aria-labelledby="why-boreal-title">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 id="why-boreal-title" className="text-2xl font-semibold text-secondary">Why Boreal</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <article className="rounded-lg border p-5 bg-background"><h3 className="font-semibold">One intake</h3><p className="text-sm text-muted-foreground mt-2">Submit once and avoid repeating your business profile across lenders.</p></article>
            <article className="rounded-lg border p-5 bg-background"><h3 className="font-semibold">Industry fit</h3><p className="text-sm text-muted-foreground mt-2">Construction, manufacturing, logistics, and other B2B sectors are prioritized.</p></article>
            <article className="rounded-lg border p-5 bg-background"><h3 className="font-semibold">Guided process</h3><p className="text-sm text-muted-foreground mt-2">Compare structured options with support from Boreal specialists.</p></article>
          </div>
        </div>
      </section>

      <section className="py-16" aria-labelledby="final-cta-title">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center rounded-xl border p-8">
          <h2 id="final-cta-title" className="text-3xl font-semibold">Ready to compare lenders?</h2>
          <p className="mt-3 text-muted-foreground">Start your application now or review how the marketplace process works before you submit.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg"><a href="/apply">Start Application</a></Button>
            <Button asChild size="lg" variant="outline"><a href="/how-it-works">How It Works</a></Button>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
