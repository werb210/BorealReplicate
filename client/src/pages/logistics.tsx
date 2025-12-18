import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { ApplyNowButton, AskQuestionButton } from "@/components/cta-buttons";
import { Truck, Fuel, Timer } from "lucide-react";

const productRecommendations = [
  { name: "Factoring", reason: "Advance against freight invoices so routes stay active." },
  { name: "Lines of Credit", reason: "Cover fuel, maintenance, and payroll between payments." },
  { name: "Term Loans", reason: "Stabilize cash during fleet expansions or new contracts." },
  { name: "Equipment Financing", reason: "Add tractors, trailers, or specialty equipment without draining cash." },
  { name: "Purchase Order Financing", reason: "Fund large dedicated moves or project freight before billing." }
];

export default function Logistics() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main>
        <section className="bg-gradient-to-br from-blue-50 to-white py-14">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <p className="text-sm font-semibold text-primary">Logistics</p>
            <h1 className="text-4xl font-bold text-secondary">Financing that keeps trucks, drivers, and fuel moving</h1>
            <p className="text-lg text-gray-700 max-w-4xl">
              Manage delayed receivables, fuel spikes, and fleet growth with funding tailored to transportation cycles. Ask the
              chatbot a question—it will capture your industry and push your recommended product into the application.
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
                    <Truck className="w-5 h-5" />
                    <p className="font-semibold text-secondary">Fleet and maintenance</p>
                  </div>
                  <p className="text-gray-700 text-sm">Finance repairs, tires, and expansions without pausing lanes.</p>
                </CardContent>
              </Card>
              <Card className="h-full">
                <CardContent className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-primary">
                    <Fuel className="w-5 h-5" />
                    <p className="font-semibold text-secondary">Fuel volatility</p>
                  </div>
                  <p className="text-gray-700 text-sm">Stay ahead of price swings while customers pay on extended terms.</p>
                </CardContent>
              </Card>
              <Card className="h-full">
                <CardContent className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-primary">
                    <Timer className="w-5 h-5" />
                    <p className="font-semibold text-secondary">Delayed receivables</p>
                  </div>
                  <p className="text-gray-700 text-sm">Turn freight bills into cash so drivers and dispatch stay on track.</p>
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
