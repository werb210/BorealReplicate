import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { ApplyNowButton, AskQuestionButton } from "@/components/cta-buttons";
import { Building2, Factory, Truck, Workflow, MessageCircle, Compass, ShieldCheck } from "lucide-react";

const industries = [
  {
    name: "Construction",
    focus: "Progress billing, retainage, payroll gaps, equipment heavy operations.",
    icon: Building2,
    details: "We understand staged payouts and retainage. Cover payroll, equipment, and material swings while you wait for draws."
  },
  {
    name: "Manufacturing",
    focus: "Inventory cycles, purchase orders, machinery, scaling production.",
    icon: Factory,
    details: "Finance inventory and machinery without slowing production. Keep PO commitments moving while protecting cash."
  },
  {
    name: "Logistics",
    focus: "Fleet costs, fuel, delayed receivables, contract based cash flow.",
    icon: Truck,
    details: "Fleet, fuel, and maintenance stay covered even with long broker and shipper terms."
  }
];

const fundingOptions = [
  {
    name: "Term Loans",
    description: "Structured repayment for growth and refinancing"
  },
  {
    name: "Lines of Credit",
    description: "Flexible working capital access"
  },
  {
    name: "Factoring",
    description: "Immediate cash from receivables"
  },
  {
    name: "Purchase Order Financing",
    description: "Fund supplier costs for large orders"
  },
  {
    name: "Equipment Financing",
    description: "Acquire assets without draining cash"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-blue-50 to-white py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <p className="inline-flex items-center gap-2 text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                Asset-heavy, cash-flow-driven financing
              </p>
              <h1 className="text-4xl lg:text-5xl font-bold text-secondary leading-tight">
                Business Financing Built for Construction, Manufacturing, and Logistics
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed">
                Term loans, lines of credit, factoring, purchase order financing, and equipment financing structured for asset heavy, cash flow driven businesses.
              </p>
              <div className="flex flex-wrap gap-4">
                <ApplyNowButton />
                <AskQuestionButton variant="outline" />
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-lg p-4">
                <ShieldCheck className="w-5 h-5 text-primary" />
                <span>Not sure what fits? Our financing assistant can help instantly.</span>
              </div>
            </div>
            <Card className="shadow-xl border-blue-100">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <Workflow className="w-6 h-6 text-primary" />
                  <div>
                    <p className="text-sm uppercase tracking-wide text-gray-500">Tailored Funding Tracks</p>
                    <p className="text-lg font-semibold text-secondary">Built around jobsites, shop floors, and routes</p>
                  </div>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-3">
                    <span className="text-primary font-semibold">1</span>
                    <span>Start with your industry so underwriting reflects real project timelines.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-semibold">2</span>
                    <span>Match cash-flow challenges to the right product before you apply.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-semibold">3</span>
                    <span>Push your industry and product selection directly into the application.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Industry focus */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="text-center space-y-3">
              <p className="text-sm font-semibold text-primary">Industry Focus</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-secondary">Financing That Matches How You Actually Operate</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Tailored programs for construction, manufacturing, and logistics operations that run on equipment, crews, and predictable schedules.
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
                    <p className="text-gray-700 leading-relaxed">{industry.details}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="flex justify-center">
              <AskQuestionButton size="lg">See Industry Solutions</AskQuestionButton>
            </div>
          </div>
        </section>

        {/* Funding options summary */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="text-center space-y-3">
              <p className="text-sm font-semibold text-primary">Funding Options</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-secondary">Capital Without Bank Rigidity</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Term loans, lines of credit, factoring, purchase order financing, and equipment financing structured around how you earn and collect cash.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {fundingOptions.map((option) => (
                <Card key={option.name} className="h-full border-blue-100">
                  <CardContent className="p-6 space-y-3">
                    <h3 className="text-xl font-semibold text-secondary">{option.name}</h3>
                    <p className="text-gray-700">{option.description}</p>
                    <div className="flex gap-3">
                      <ApplyNowButton size="sm" />
                      <AskQuestionButton size="sm" variant="outline" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="text-center text-gray-700">Questions? Ask the financing assistant.</p>
          </div>
        </section>

        {/* Chatbot explainer */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <p className="text-sm font-semibold text-primary">Chat-first guidance</p>
              <h2 className="text-3xl font-bold text-secondary">Get Answers Before You Apply</h2>
              <p className="text-lg text-gray-700">
                Unsure which option fits? Ask questions. Get direct answers. No pressure.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <MessageCircle className="w-5 h-5 text-primary" />
                  <span>Product fit by industry</span>
                </li>
                <li className="flex gap-3">
                  <Compass className="w-5 h-5 text-primary" />
                  <span>Typical requirements</span>
                </li>
                <li className="flex gap-3">
                  <Workflow className="w-5 h-5 text-primary" />
                  <span>Funding timelines</span>
                </li>
                <li className="flex gap-3">
                  <ShieldCheck className="w-5 h-5 text-primary" />
                  <span>Credit and cash flow considerations</span>
                </li>
              </ul>
              <div className="flex gap-3">
                <AskQuestionButton>Ask the Financing Assistant</AskQuestionButton>
              </div>
            </div>
            <Card className="border-primary/20 shadow-lg">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-secondary">How the bot responds</h3>
                <div className="space-y-2 text-sm text-gray-700 bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <p><strong>Step 1:</strong> "Which industry are you in?"</p>
                  <p><strong>Step 2:</strong> "What's the cash-flow challenge you're solving?"</p>
                  <p><strong>Step 3:</strong> "We recommend Factoring/PO Financing/Term Loan etc. We'll push this into your application."</p>
                </div>
                <p className="text-gray-700 text-sm">
                  Ask it to compare options or clarify how funds can support payroll, fuel, materials, or equipment schedules.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Why Boreal */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <p className="text-sm font-semibold text-primary">Why Boreal</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary">Built for Businesses Banks Don’t Understand</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We work with lenders who understand irregular cash flow, asset heavy balance sheets, and contract driven revenue.
              We structure deals based on reality, not checkboxes.
            </p>
          </div>
        </section>

        {/* How it works */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
            <div className="space-y-3">
              <p className="text-sm font-semibold text-primary">How It Works</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-secondary">Simple. Direct. Efficient.</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              {["Apply or chat", "We structure the deal", "Review terms and fund"].map((step, idx) => (
                <Card key={step} className="h-full">
                  <CardContent className="p-6 space-y-3">
                    <p className="text-sm font-semibold text-primary">Step {idx + 1}</p>
                    <h3 className="text-xl font-semibold text-secondary">{step}</h3>
                    <p className="text-gray-700 text-sm">
                      {idx === 0 && "Start by applying or opening the chatbot to get matched."}
                      {idx === 1 && "We align repayment and access to the reality of your contracts and receivables."}
                      {idx === 2 && "Review straightforward terms and move to funding without extra hoops."}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-primary text-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold">Get Financing That Fits Your Business Not the Bank’s</h2>
            <div className="flex flex-wrap gap-4 justify-center">
              <ApplyNowButton variant="secondary" />
              <AskQuestionButton variant="outline" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
