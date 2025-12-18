import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { ApplyNowButton, AskQuestionButton } from "@/components/cta-buttons";
import { CheckCircle2, Workflow, Truck, Building2, Factory } from "lucide-react";

const fundingProducts = [
  {
    name: "Term Loans",
    description: "Predictable, fixed-term capital when you need a set amount to execute on contracts or refinance expensive debt.",
    scenarios: ["Bridge retainage and mobilization costs", "Consolidate high-cost short-term facilities", "Plan multi-month upgrades with fixed payments"]
  },
  {
    name: "Lines of Credit",
    description: "Reusable working capital that flexes with payroll, materials, and seasonal swings without reapplying each time.",
    scenarios: ["Cover payroll during slow collections", "Buy materials or fuel on short notice", "Draw and repay as receivables clear"]
  },
  {
    name: "Factoring",
    description: "Advance against progress draws or freight invoices so you are not waiting 30-90 days to get paid.",
    scenarios: ["Smooth cash when owners hold retainage", "Accelerate slow-paying brokers or shippers", "Turn invoices into immediate working cash"]
  },
  {
    name: "Purchase Order Financing",
    description: "Fund supplier costs on confirmed orders so you can accept larger jobs without straining cash.",
    scenarios: ["Buy materials tied to awarded jobs", "Secure subcontractors for big projects", "Scale production for approved POs"]
  },
  {
    name: "Equipment Financing",
    description: "Acquire or upgrade machinery and fleet while preserving cash for operations and crews.",
    scenarios: ["Add units to meet route demand", "Replace aging heavy equipment", "Upgrade production lines without draining liquidity"]
  }
];

const industryAngles = [
  {
    name: "Construction",
    icon: Building2,
    focus: "Progress billing, retainage, heavy equipment",
    fits: ["Term Loans", "Lines of Credit", "Factoring", "Purchase Order Financing", "Equipment Financing"]
  },
  {
    name: "Manufacturing",
    icon: Factory,
    focus: "Inventory, machinery, purchase orders",
    fits: ["Term Loans", "Lines of Credit", "Purchase Order Financing", "Equipment Financing"]
  },
  {
    name: "Logistics",
    icon: Truck,
    focus: "Fleet, fuel, delayed receivables",
    fits: ["Lines of Credit", "Factoring", "Equipment Financing"]
  }
];

export default function FundingSolutions() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <main>
        <section className="bg-gradient-to-br from-blue-50 to-white py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <p className="text-sm font-semibold text-primary">Funding Solutions</p>
              <h1 className="text-4xl lg:text-5xl font-bold text-secondary">The five ways we fund asset-heavy businesses</h1>
              <p className="text-lg text-gray-700 leading-relaxed">
                Whether you need predictable terms, revolving working capital, invoice advances, supplier funding, or new equipment, every option here is built for construction, manufacturing, and logistics operators.
              </p>
              <div className="flex flex-wrap gap-3">
                <ApplyNowButton />
                <AskQuestionButton variant="outline" />
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700 bg-white border border-gray-200 rounded-lg p-3">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span>Ask a Question opens the chatbot on any page to help you pick the right product before applying.</span>
              </div>
            </div>
            <Card className="border-blue-100 shadow-lg">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <Workflow className="w-6 h-6 text-primary" />
                  <div>
                    <p className="text-sm uppercase tracking-wide text-gray-500">Built for equipment-heavy work</p>
                    <p className="text-lg font-semibold text-secondary">Structured around jobsites, shop floors, and routes</p>
                  </div>
                </div>
                <ul className="space-y-3 text-gray-700 text-sm">
                  <li>We start with your industry, then match the cash-flow gap to a funding product.</li>
                  <li>Recommendations flow straight into the application so you don't repeat yourself.</li>
                  <li>Apply Now always links to our existing application flow for a fast handoff.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="text-center space-y-3">
              <p className="text-sm font-semibold text-primary">Supported Products</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-secondary">Choose the structure that fits your cash cycle</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Each solution below covers a specific cash-flow challenge. Use Ask a Question to compare options, then Apply Now when you're ready.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {fundingProducts.map((product) => (
                <Card key={product.name} className="h-full border-primary/20">
                  <CardContent className="p-6 space-y-3">
                    <h3 className="text-xl font-semibold text-secondary">{product.name}</h3>
                    <p className="text-gray-700 text-sm">{product.description}</p>
                    <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                      {product.scenarios.map((scenario) => (
                        <li key={scenario}>{scenario}</li>
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
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="text-center space-y-3">
              <p className="text-sm font-semibold text-primary">Industry coverage</p>
              <h2 className="text-3xl font-bold text-secondary">Built around how you earn and collect</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Construction, manufacturing, and logistics each move cash differently. We align draw schedules, production runs, and freight cycles with the right funding mix.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {industryAngles.map((industry) => (
                <Card key={industry.name} className="h-full">
                  <CardContent className="p-6 space-y-3">
                    <industry.icon className="w-7 h-7 text-primary" />
                    <div>
                      <p className="text-sm uppercase tracking-wide text-gray-500">{industry.focus}</p>
                      <h3 className="text-xl font-semibold text-secondary">{industry.name}</h3>
                    </div>
                    <p className="text-gray-700 text-sm">Common fits:</p>
                    <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                      {industry.fits.map((fit) => (
                        <li key={fit}>{fit}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="text-center space-y-3">
              <p className="text-sm font-semibold text-primary">Chat + Apply</p>
              <h2 className="text-3xl font-bold text-secondary">Use the chatbot to confirm, then apply</h2>
              <p className="text-lg text-gray-700">
                The chatbot travels with you. Ask a Question to open it, pick your industry and cash-flow gap, and it will recommend a product and push details into Apply Now.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              {["Open Ask a Question", "Confirm the recommended product", "Submit through Apply Now"].map((step, index) => (
                <Card key={step} className="h-full">
                  <CardContent className="p-6 space-y-3">
                    <p className="text-sm font-semibold text-primary">Step {index + 1}</p>
                    <h3 className="text-xl font-semibold text-secondary">{step}</h3>
                    <p className="text-gray-700 text-sm">
                      {index === 0 && "Ask from any page to start a chatbot conversation."}
                      {index === 1 && "Share your industry and cash-flow challenge; the bot suggests a funding solution."}
                      {index === 2 && "Apply Now carries those details into the existing application flow."}
                    </p>
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
