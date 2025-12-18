import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { ApplyNowButton, AskQuestionButton } from "@/components/cta-buttons";
import { HardHat, ClipboardList, Truck } from "lucide-react";

const productRecommendations = [
  {
    name: "Term Loans",
    reason: "Bridge mobilization, retainage, and project closeout with predictable payments."
  },
  {
    name: "Lines of Credit",
    reason: "Cover payroll and materials between progress draws."
  },
  {
    name: "Factoring",
    reason: "Advance against progress invoices so crews keep moving."
  },
  {
    name: "Purchase Order Financing",
    reason: "Fund materials and subs for large scopes before billing."
  },
  {
    name: "Equipment Financing",
    reason: "Add or replace heavy equipment without draining cash."
  }
];

export default function Construction() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main>
        <section className="bg-gradient-to-br from-blue-50 to-white py-14">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <p className="text-sm font-semibold text-primary">Construction</p>
            <h1 className="text-4xl font-bold text-secondary">Financing built for progress billing and heavy equipment</h1>
            <p className="text-lg text-gray-700 max-w-4xl">
              Manage retainage, stage-based payouts, and fleet costs with funding that mirrors how projects actually cash flow.
              Apply now or ask a question—our chatbot will start with your industry and push details into the application.
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
                    <HardHat className="w-5 h-5" />
                    <p className="font-semibold text-secondary">Progress billing</p>
                  </div>
                  <p className="text-gray-700 text-sm">Financing paced with inspection schedules and milestone releases.</p>
                </CardContent>
              </Card>
              <Card className="h-full">
                <CardContent className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-primary">
                    <ClipboardList className="w-5 h-5" />
                    <p className="font-semibold text-secondary">Retainage pressure</p>
                  </div>
                  <p className="text-gray-700 text-sm">Free up cash while 5-10% sits in holdback until project completion.</p>
                </CardContent>
              </Card>
              <Card className="h-full">
                <CardContent className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-primary">
                    <Truck className="w-5 h-5" />
                    <p className="font-semibold text-secondary">Equipment and fleet</p>
                  </div>
                  <p className="text-gray-700 text-sm">Keep iron and trucks running without starving payroll or suppliers.</p>
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
