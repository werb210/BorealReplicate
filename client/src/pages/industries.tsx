import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { ApplyNowButton, AskQuestionButton } from "@/components/cta-buttons";
import { Building2, Factory, Truck, CheckCircle2, Workflow } from "lucide-react";

const industries = [
  {
    name: "Construction",
    icon: Building2,
    focus: "Progress billing, retainage, heavy equipment",
    needs: [
      "Cover mobilization and retainage gaps",
      "Advance against progress draws without slowing crews",
      "Keep equipment deployed with predictable payments"
    ],
    fits: ["Term Loans", "Lines of Credit", "Factoring", "Purchase Order Financing", "Equipment Financing"]
  },
  {
    name: "Manufacturing",
    icon: Factory,
    focus: "Inventory, machinery, purchase orders",
    needs: [
      "Buy materials without draining liquidity",
      "Match production runs to purchase order timelines",
      "Upgrade machinery while keeping working capital intact"
    ],
    fits: ["Term Loans", "Lines of Credit", "Purchase Order Financing", "Equipment Financing"]
  },
  {
    name: "Logistics",
    icon: Truck,
    focus: "Fleet, fuel, delayed receivables",
    needs: [
      "Pay drivers and fuel while waiting on brokers or shippers",
      "Add or refresh units to meet route demand",
      "Smooth maintenance and seasonality with flexible capital"
    ],
    fits: ["Lines of Credit", "Factoring", "Equipment Financing"]
  }
];

export default function Industries() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <main>
        <section className="bg-gradient-to-br from-blue-50 to-white py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <p className="text-sm font-semibold text-primary">Industries</p>
              <h1 className="text-4xl lg:text-5xl font-bold text-secondary">Financing built for field, floor, and road teams</h1>
              <p className="text-lg text-gray-700 leading-relaxed">
                We focus on construction, manufacturing, and logistics companies because their cash cycles depend on equipment, crews, and reliable payouts. The chatbot and Apply Now flow stay consistent across all three.
              </p>
              <div className="flex flex-wrap gap-3">
                <ApplyNowButton />
                <AskQuestionButton variant="outline" />
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700 bg-white border border-gray-200 rounded-lg p-3">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span>Ask a Question pulls up the chatbot to match your industry to the right funding path.</span>
              </div>
            </div>
            <Card className="border-blue-100 shadow-lg">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <Workflow className="w-6 h-6 text-primary" />
                  <div>
                    <p className="text-sm uppercase tracking-wide text-gray-500">Three core sectors</p>
                    <p className="text-lg font-semibold text-secondary">Purpose-built playbooks for each</p>
                  </div>
                </div>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Construction: progress draws, retainage, and heavy equipment schedules.</li>
                  <li>Manufacturing: production runs, purchase orders, and machinery uptime.</li>
                  <li>Logistics: freight cycles, broker timelines, and fleet utilization.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="text-center space-y-3">
              <p className="text-sm font-semibold text-primary">Supported Industries</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-secondary">We align funding to your cash cycle</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Each industry has different choke points. Use Ask a Question to describe yours and get a recommendation before you Apply Now.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {industries.map((industry) => (
                <Card key={industry.name} className="h-full">
                  <CardContent className="p-6 space-y-3">
                    <industry.icon className="w-8 h-8 text-primary" />
                    <div>
                      <p className="text-sm uppercase tracking-wide text-gray-500">{industry.focus}</p>
                      <h3 className="text-xl font-semibold text-secondary">{industry.name}</h3>
                    </div>
                    <p className="text-gray-700 text-sm">What we solve:</p>
                    <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                      {industry.needs.map((need) => (
                        <li key={need}>{need}</li>
                      ))}
                    </ul>
                    <p className="text-gray-700 text-sm">Best-fit products:</p>
                    <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                      {industry.fits.map((fit) => (
                        <li key={fit}>{fit}</li>
                      ))}
                    </ul>
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

        <section className="py-16 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-center">
            <p className="text-sm font-semibold text-primary">Chatbot on every page</p>
            <h2 className="text-3xl font-bold text-secondary">A concierge that understands your field</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              The chatbot is persistent across the site. Open it with Ask a Question, pick your industry, outline the cash-flow issue, and it will suggest Term Loans, Lines of Credit, Factoring, Purchase Order Financing, or Equipment Financing.
            </p>
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
