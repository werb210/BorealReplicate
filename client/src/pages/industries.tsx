import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { ApplyNowButton, AskQuestionButton } from "@/components/cta-buttons";
import { ArrowRight } from "lucide-react";
import { Seo } from "@/components/Seo";
import { organizationJsonLd } from "@/lib/structured-data";

const industries = [
  {
    name: "Construction",
    slug: "/industries/construction",
    headline: "Project timelines, retainage, and crew-heavy costs",
    challenges: ["Progress billing gaps", "Retainage delays", "Equipment-heavy payroll"],
    solutions: ["Term Loans", "Lines of Credit", "Factoring"]
  },
  {
    name: "Manufacturing",
    slug: "/industries/manufacturing",
    headline: "Inventory cycles and capital-intensive production",
    challenges: ["Inventory build-up", "Long PO cycles", "Machinery upgrades"],
    solutions: ["Purchase Order Financing", "Term Loans", "Equipment Financing"]
  },
  {
    name: "Logistics",
    slug: "/industries/logistics",
    headline: "Fleet costs with delayed shipper payments",
    challenges: ["Fuel volatility", "Broker terms", "Fleet maintenance"],
    solutions: ["Factoring", "Lines of Credit", "Equipment Financing"]
  }
];

export default function Industries() {
  return (
    <div className="min-h-screen bg-background">
      <Seo title="Industries We Serve | Boreal Financial" description="See how Boreal Financial supports construction, manufacturing, logistics, and other industries with tailored funding strategies." canonical="https://borealfinancial.com/industries" jsonLd={organizationJsonLd} />
      <Navigation />

      <main>
        <section className="bg-muted/40 border-b border-border py-12 lg:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-center">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary">Industries</p>
            <h1 className="text-3xl lg:text-4xl font-semibold text-secondary">Industry-first underwriting that moves fast</h1>
            <p className="text-base text-muted-foreground max-w-3xl mx-auto">
              Choose your industry to see the pain points we solve, the products that fit, and real-world scenarios we fund every day.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <ApplyNowButton />
              <AskQuestionButton variant="outline" />
            </div>
          </div>
        </section>

        <section className="py-12 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {industries.map((industry) => (
                <Card key={industry.name} className="h-full border-border shadow-sm">
                  <CardContent className="p-5 space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-wide text-primary">{industry.name}</p>
                    <h3 className="text-lg font-semibold text-secondary">{industry.headline}</h3>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p className="font-semibold">Pain points:</p>
                      <ul className="list-disc list-inside space-y-1">
                        {industry.challenges.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                      <p className="font-semibold">Relevant products:</p>
                      <ul className="list-disc list-inside space-y-1">
                        {industry.solutions.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <a
                      href={industry.slug}
                      className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:underline"
                    >
                      View scenarios
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
              <ApplyNowButton />
              <AskQuestionButton variant="outline" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
