import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { ApplyNowButton, AskQuestionButton } from "@/components/cta-buttons";
import { Building2, Factory, Truck, Workflow, MessageCircle, Compass, ShieldCheck } from "lucide-react";

const howItWorks = [
  {
    title: "Apply",
    description: "Share your project, cash-flow timing, and documents once. We move fast so lenders can respond quickly."
  },
  {
    title: "Match",
    description: "We route your deal to a marketplace of industry-fit lenders and structure terms around your timeline."
  },
  {
    title: "Fund",
    description: "Choose the structure that fits, finalize diligence, and fund without unnecessary back-and-forth."
  }
];

const products = [
  {
    name: "Term Loans",
    description: "Structured repayment for growth, refinancing, or project-heavy capital needs.",
    href: "/term-loans"
  },
  {
    name: "Lines of Credit",
    description: "Revolving access for payroll, materials, and seasonal swings.",
    href: "/lines-of-credit"
  },
  {
    name: "Factoring",
    description: "Turn receivables into cash when customers pay on long terms.",
    href: "/factoring"
  },
  {
    name: "Purchase Order Financing",
    description: "Cover supplier costs to fulfill large orders or contracts.",
    href: "/purchase-order-financing"
  },
  {
    name: "Equipment Financing",
    description: "Acquire or upgrade equipment while protecting working capital.",
    href: "/equipment-financing"
  }
];

const industries = [
  {
    name: "Construction",
    focus: "Progress billing, retainage, crew-heavy schedules",
    icon: Building2,
    href: "/industries/construction"
  },
  {
    name: "Manufacturing",
    focus: "Inventory cycles, PO-driven production, equipment upgrades",
    icon: Factory,
    href: "/industries/manufacturing"
  },
  {
    name: "Logistics",
    focus: "Fleet costs, fuel, broker terms, contract routes",
    icon: Truck,
    href: "/industries/logistics"
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
                Speed-first lender marketplace
              </p>
              <h1 className="text-4xl lg:text-5xl font-bold text-secondary leading-tight">
                marketplace lending for real businesses
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed">construction, manufacturing, logistics</p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Boreal structures deals fast by matching your business to lenders that specialize in asset-heavy cash cycles. We focus on
                the right structure, not generic rate shopping.
              </p>
              <div className="flex flex-wrap gap-4">
                <ApplyNowButton />
                <AskQuestionButton variant="outline" />
              </div>
            </div>
            <Card className="shadow-xl border-blue-100">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <Workflow className="w-6 h-6 text-primary" />
                  <div>
                    <p className="text-sm uppercase tracking-wide text-gray-500">Marketplace breadth</p>
                    <p className="text-lg font-semibold text-secondary">Multiple lenders, one structured deal</p>
                  </div>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-3">
                    <span className="text-primary font-semibold">1</span>
                    <span>Industry underwriting aligned to your project or production timeline.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-semibold">2</span>
                    <span>Multiple lender responses without multiple applications.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-semibold">3</span>
                    <span>Deal structuring that matches cash inflows, not generic formulas.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* How it works */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="text-center space-y-3">
              <p className="text-sm font-semibold text-primary">How it works</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-secondary">Apply, match, fund — quickly.</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                We move fast so you can move projects, production, and routes without waiting on traditional bank timelines.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {howItWorks.map((step, index) => (
                <Card key={step.title} className="h-full">
                  <CardContent className="p-6 space-y-3">
                    <p className="text-sm font-semibold text-primary">Step {index + 1}</p>
                    <h3 className="text-xl font-semibold text-secondary">{step.title}</h3>
                    <p className="text-gray-700 text-sm">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Products overview */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="text-center space-y-3">
              <p className="text-sm font-semibold text-primary">Products</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-secondary">Five core products. Structured around your cash flow.</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <Card key={product.name} className="h-full border-blue-100">
                  <CardContent className="p-6 space-y-3">
                    <h3 className="text-xl font-semibold text-secondary">{product.name}</h3>
                    <p className="text-gray-700">{product.description}</p>
                    <a href={product.href} className="text-primary font-semibold text-sm hover:underline">
                      View product details
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="flex justify-center">
              <ApplyNowButton />
            </div>
          </div>
        </section>

        {/* Industries served */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="text-center space-y-3">
              <p className="text-sm font-semibold text-primary">Industries served</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-secondary">Specialized underwriting by industry.</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                We specialize in cash cycles that depend on equipment, crews, inventory, and long customer terms.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {industries.map((industry) => (
                <Card key={industry.name} className="h-full">
                  <CardContent className="p-6 space-y-3">
                    <industry.icon className="w-8 h-8 text-primary" />
                    <div>
                      <h3 className="text-xl font-semibold text-secondary">{industry.name}</h3>
                      <p className="text-sm text-gray-700">{industry.focus}</p>
                    </div>
                    <a href={industry.href} className="text-primary font-semibold text-sm hover:underline">
                      Explore {industry.name}
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Chatbot entry */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <p className="text-sm font-semibold text-primary">Talk to an expert</p>
              <h2 className="text-3xl font-bold text-secondary">Get instant guidance before you apply.</h2>
              <p className="text-lg text-gray-700">
                The Boreal chatbot covers FAQs, product guidance, and a direct handoff to a human when you need it.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <MessageCircle className="w-5 h-5 text-primary" />
                  <span>FAQ answers in seconds</span>
                </li>
                <li className="flex gap-3">
                  <Compass className="w-5 h-5 text-primary" />
                  <span>Match products to your cash-flow challenge</span>
                </li>
                <li className="flex gap-3">
                  <Workflow className="w-5 h-5 text-primary" />
                  <span>Transfer details directly into your application</span>
                </li>
                <li className="flex gap-3">
                  <ShieldCheck className="w-5 h-5 text-primary" />
                  <span>Talk to a human anytime</span>
                </li>
              </ul>
              <div className="flex gap-3">
                <AskQuestionButton />
                <ApplyNowButton variant="outline" />
              </div>
            </div>
            <Card className="border-primary/20 shadow-lg">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-secondary">What happens in the chat</h3>
                <div className="space-y-2 text-sm text-gray-700 bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <p><strong>Step 1:</strong> Share your industry and cash-flow timing.</p>
                  <p><strong>Step 2:</strong> Get a product recommendation and document checklist.</p>
                  <p><strong>Step 3:</strong> Escalate to a human if you want a live walkthrough.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
