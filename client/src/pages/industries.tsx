import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { ApplyNowButton, AskQuestionButton } from "@/components/cta-buttons";
import { ArrowRight } from "lucide-react";

const industries = [
  {
    name: "Construction",
    slug: "/construction",
    headline: "Financing Built for Project Based Cash Flow",
    challenges: ["Progress billing", "Retainage", "Large upfront costs"],
    solutions: ["Lines of Credit", "Factoring", "Equipment Financing"]
  },
  {
    name: "Manufacturing",
    slug: "/manufacturing",
    headline: "Capital That Supports Production and Scale",
    challenges: ["Inventory purchases", "Equipment costs", "Large purchase orders"],
    solutions: ["Term Loans", "Purchase Order Financing", "Equipment Financing"]
  },
  {
    name: "Logistics",
    slug: "/logistics",
    headline: "Keep Freight Moving Without Cash Bottlenecks",
    challenges: ["Fuel costs", "Fleet expenses", "Delayed customer payments"],
    solutions: ["Factoring", "Lines of Credit", "Equipment Financing"]
  }
];

export default function Industries() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <main>
        <section className="bg-gradient-to-br from-blue-50 to-white py-16 lg:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-center">
            <p className="text-sm font-semibold text-primary">Industries</p>
            <h1 className="text-4xl lg:text-5xl font-bold text-secondary">Pick your industry to see tailored funding</h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Start with the sector that matches your cash cycle. Each page breaks down the challenges we solve and the financing mix that fits.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <ApplyNowButton />
              <AskQuestionButton variant="outline" />
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {industries.map((industry) => (
                <Card key={industry.name} className="h-full border-blue-100">
                  <CardContent className="p-6 space-y-3">
                    <p className="text-sm font-semibold text-primary">{industry.name}</p>
                    <h3 className="text-xl font-semibold text-secondary">{industry.headline}</h3>
                    <div className="space-y-2 text-sm text-gray-700">
                      <p className="font-semibold">Challenges:</p>
                      <ul className="list-disc list-inside space-y-1">
                        {industry.challenges.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                      <p className="font-semibold">Solutions:</p>
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
                      View details
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
