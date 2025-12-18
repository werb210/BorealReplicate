import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { ApplyNowButton, AskQuestionButton } from "@/components/cta-buttons";
import { Factory, Boxes, ClipboardCheck } from "lucide-react";

const productRecommendations = [
  {
    name: "Lines of Credit",
    reason: "Buy materials and cover payroll while receivables clear."
  },
  {
    name: "Factoring",
    reason: "Advance against invoices on net terms to start the next run."
  },
  {
    name: "Purchase Order Financing",
    reason: "Fund raw materials tied to large or rush orders."
  },
  {
    name: "Equipment Financing",
    reason: "Modernize machinery without slowing working capital."
  },
  {
    name: "Term Loans",
    reason: "Stabilize cash during expansions or facility upgrades."
  }
];

export default function Manufacturing() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main>
        <section className="bg-gradient-to-br from-blue-50 to-white py-14">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <p className="text-sm font-semibold text-primary">Manufacturing</p>
            <h1 className="text-4xl font-bold text-secondary">Financing that matches production cycles</h1>
            <p className="text-lg text-gray-700 max-w-4xl">
              Keep lines running with capital that follows inventory turns, machinery upgrades, and purchase order peaks. Start
              a chat—the bot will ask for your industry first and pass the recommendation into the application.
            </p>
            <div className="flex gap-3">
              <ApplyNowButton />
              <AskQuestionButton />
            </div>
          </div>
        </section>

        <section className="py-14 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="h-full">
                <CardContent className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-primary">
                    <Factory className="w-5 h-5" />
                    <p className="font-semibold text-secondary">Production runs</p>
                  </div>
                  <p className="text-gray-700 text-sm">Finance materials and labor while goods move through the line.</p>
                </CardContent>
              </Card>
              <Card className="h-full">
                <CardContent className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-primary">
                    <Boxes className="w-5 h-5" />
                    <p className="font-semibold text-secondary">Inventory swings</p>
                  </div>
                  <p className="text-gray-700 text-sm">Stay stocked for peak orders without starving cash for operations.</p>
                </CardContent>
              </Card>
              <Card className="h-full">
                <CardContent className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-primary">
                    <ClipboardCheck className="w-5 h-5" />
                    <p className="font-semibold text-secondary">Purchase orders</p>
                  </div>
                  <p className="text-gray-700 text-sm">Accept larger or custom jobs knowing supplier costs are covered.</p>
                </CardContent>
              </Card>
            </div>

            <Card className="border-primary/20">
              <CardContent className="p-6 space-y-3">
                <h2 className="text-2xl font-semibold text-secondary">Products we recommend</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
                  {productRecommendations.map((product) => (
                    <div key={product.name} className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                      <p className="font-semibold text-secondary">{product.name}</p>
                      <p className="mt-1">{product.reason}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-wrap gap-4 justify-center">
              <ApplyNowButton />
              <AskQuestionButton />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
