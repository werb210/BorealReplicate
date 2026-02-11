import { Seo } from "@/components/Seo";
import { SiteLayout } from "@/components/SiteLayout";
import { Button } from "@/components/ui/button";
import { breadcrumbJsonLd, organizationJsonLd, webPageJsonLd } from "@/lib/structured-data";

export default function ApplyPage() {
  const title = "Start Application | Boreal Financial";
  const description = "Begin your Boreal application and submit your financing request once for lender responses.";

  return (
    <SiteLayout>
      <Seo
        title={title}
        description={description}
        canonical="https://borealfinancial.com/apply"
        jsonLd={[
          organizationJsonLd,
          webPageJsonLd("/apply", title, description),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Apply", path: "/apply" },
          ]),
        ]}
      />
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-semibold">Start your application</h1>
          <p className="mt-4 text-muted-foreground">This is the Boreal application entry point for marketplace intake.</p>
          <Button className="mt-8" asChild>
            <a href="/how-it-works">Review process first</a>
          </Button>
        </div>
      </section>
    </SiteLayout>
  );
}
