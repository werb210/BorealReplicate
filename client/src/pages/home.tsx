import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { ApplyNowButton, AskQuestionButton } from "@/components/cta-buttons";
import { Building2, Factory, Truck, Workflow, MessageCircle, Compass, ShieldCheck } from "lucide-react";
import { Seo } from "@/components/Seo";
import { coreFaqJsonLd, organizationJsonLd } from "@/lib/structured-data";

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
    <div className="min-h-screen bg-background">
      <Seo title="Boreal Financial | Business Funding Marketplace" description="Boreal Financial connects businesses in Canada and the U.S. with term loans, lines of credit, factoring, and equipment financing solutions." canonical="https://borealfinancial.com/" jsonLd={[organizationJsonLd, coreFaqJsonLd]} />
      <Navigation />

      <main>
        {/* Hero */}
        <section className="bg-background border-b border-border py-12 lg:py-16">
          <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-primary bg-primary/10 px-3 py-1 rounded-full">
                Boreal Funding Marketplace
              </p>
              <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight text-secondary leading-tight">
                Funding that keeps your business moving.
              </h1>
              <p className="text-base text-muted-foreground leading-relaxed">
                Complete your application in minutes with a secure SMS magic-link that lets you pick up right where you left off.
              </p>
              <p className="text-sm text-muted-foreground">
                Available to businesses in Canada and the United States.
              </p>
              <div className="flex flex-wrap gap-4">
                <ApplyNowButton variant="cta">Start Your Application</ApplyNowButton>
                <ApplyNowButton variant="outline">Apply Now</ApplyNowButton>
              </div>
            </div>
            <Card className="shadow-sm border-border bg-card">
              <CardContent className="p-5 space-y-4">
                <div className="flex items-center gap-3">
                  <Workflow className="w-6 h-6 text-primary" />
                  <div>
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">What to expect</p>
                    <p className="text-lg font-semibold text-secondary">Your application in three steps</p>
                  </div>
                </div>
                <ol className="space-y-3 text-sm text-muted-foreground list-decimal pl-5">
                  <li>Answer a few questions about your business and funding needs</li>
                  <li>Review the product category that best matches your profile</li>
                  <li>Upload required documents or request a secure upload link</li>
                </ol>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* How it works */}
        <section className="py-12 bg-background">
          <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <div className="text-center space-y-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">How it works</p>
              <h2 className="text-2xl lg:text-3xl font-semibold text-secondary">Apply, match, fund — quickly.</h2>
              <p className="text-base text-muted-foreground max-w-3xl mx-auto">
                We move fast so you can move projects, production, and routes without waiting on traditional bank timelines.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {howItWorks.map((step, index) => (
                <Card key={step.title} className="h-full border-border shadow-sm">
                  <CardContent className="p-5 space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-wide text-primary">Step {index + 1}</p>
                    <h3 className="text-lg font-semibold text-secondary">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Products overview */}
        <section className="py-12 bg-muted/30">
          <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <div className="text-center space-y-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">Products</p>
              <h2 className="text-2xl lg:text-3xl font-semibold text-secondary">Five core products. Structured around your cash flow.</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <Card key={product.name} className="h-full border-border shadow-sm bg-background">
                  <CardContent className="p-5 space-y-3">
                    <h3 className="text-lg font-semibold text-secondary">{product.name}</h3>
                    <p className="text-sm text-muted-foreground">{product.description}</p>
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
        <section className="py-12 bg-background">
          <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <div className="text-center space-y-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">Industries served</p>
              <h2 className="text-2xl lg:text-3xl font-semibold text-secondary">Specialized underwriting by industry.</h2>
              <p className="text-base text-muted-foreground max-w-3xl mx-auto">
                We specialize in cash cycles that depend on equipment, crews, inventory, and long customer terms.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {industries.map((industry) => (
                <Card key={industry.name} className="h-full border-border shadow-sm">
                  <CardContent className="p-5 space-y-3">
                    <industry.icon className="w-8 h-8 text-primary" />
                    <div>
                      <h3 className="text-lg font-semibold text-secondary">{industry.name}</h3>
                      <p className="text-sm text-muted-foreground">{industry.focus}</p>
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
        <section className="py-12 bg-muted/30">
          <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">Talk to an expert</p>
              <h2 className="text-2xl lg:text-3xl font-semibold text-secondary">Get instant guidance before you apply.</h2>
              <p className="text-base text-muted-foreground">
                The Boreal chatbot covers FAQs, product guidance, and a direct handoff to a human when you need it.
              </p>
              <ul className="space-y-3 text-sm text-muted-foreground">
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
            <Card className="border-border shadow-sm bg-background">
              <CardContent className="p-5 space-y-4">
                <h3 className="text-lg font-semibold text-secondary">What happens in the chat</h3>
                <div className="space-y-2 text-sm text-muted-foreground bg-muted/40 border border-border rounded-lg p-4">
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
