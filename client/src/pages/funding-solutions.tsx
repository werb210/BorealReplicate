import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { ApplyNowButton, AskQuestionButton } from "@/components/cta-buttons";
import { ArrowRight } from "lucide-react";

const products = [
  {
    name: "Term Loans",
    slug: "/term-loans",
    title: "Structured Capital for Growth and Stability",
    bestFor: ["Expansion", "Refinancing", "Large investments"],
    description: "Fixed or variable repayment structured around real cash flow not rigid bank formulas."
  },
  {
    name: "Lines of Credit",
    slug: "/lines-of-credit",
    title: "Flexible Capital Without Reapplying Every Time",
    bestFor: ["Working capital", "Payroll gaps", "Material purchases"],
    description: "Revolving access to funds. Pay interest only on what you use."
  },
  {
    name: "Factoring",
    slug: "/factoring",
    title: "Get Paid Now Not When Your Customer Decides",
    bestFor: ["Progress billing", "Net 30 or Net 60 receivables", "Rapid growth"],
    description: "Advance against invoices. Funding based on receivables not credit score."
  },
  {
    name: "Purchase Order Financing",
    slug: "/purchase-order-financing",
    title: "Take on Bigger Orders Without Cash Strain",
    bestFor: ["Manufacturers", "Distributors", "Contract based businesses"],
    description: "Finance supplier costs so large orders can be fulfilled."
  },
  {
    name: "Equipment Financing",
    slug: "/equipment-financing",
    title: "Get the Equipment Keep the Cash",
    bestFor: ["Vehicles", "Heavy equipment", "Machinery", "Technology"],
    description: "Equipment acts as collateral preserving cash flow."
  }
];

export default function FundingSolutions() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <main>
        <section className="bg-gradient-to-br from-blue-50 to-white py-16 lg:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-center">
            <p className="text-sm font-semibold text-primary">Funding Solutions</p>
            <h1 className="text-4xl lg:text-5xl font-bold text-secondary">Choose the path that fits your cash flow</h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Start here to pick the right solution, open the chatbot with Ask a Question, or Apply Now when you are ready. Each option below links to the dedicated page with more detail.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <ApplyNowButton />
              <AskQuestionButton variant="outline" />
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <Card key={product.name} className="h-full border-blue-100">
                  <CardContent className="p-6 space-y-3">
                    <div className="space-y-1">
                      <p className="text-sm font-semibold text-primary">{product.name}</p>
                      <h3 className="text-xl font-semibold text-secondary">{product.title}</h3>
                    </div>
                    <div className="space-y-1 text-sm text-gray-700">
                      <p className="font-semibold">Best for:</p>
                      <ul className="list-disc list-inside space-y-1">
                        {product.bestFor.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <p className="text-gray-700 text-sm">{product.description}</p>
                    <a
                      href={product.slug}
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
