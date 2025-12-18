import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { ApplyNowButton, AskQuestionButton } from "@/components/cta-buttons";
import { ClipboardCheck, Building2, Factory, Truck } from "lucide-react";

export default function PurchaseOrderFinancing() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <main>
        <section className="bg-gradient-to-br from-blue-50 to-white py-14">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <p className="text-sm font-semibold text-primary">Purchase Order Financing</p>
              <h1 className="text-4xl font-bold text-secondary">Fund supplier costs tied to confirmed orders</h1>
              <p className="text-lg text-gray-700">
                For construction, manufacturing, and logistics companies that win large orders but need upfront capital for
                materials, subs, or freight before customers pay.
              </p>
              <div className="flex gap-3">
                <ApplyNowButton />
                <AskQuestionButton />
              </div>
            </div>
            <Card className="border-blue-100 shadow-lg">
              <CardContent className="p-6 space-y-3">
                <div className="flex items-center gap-3">
                  <ClipboardCheck className="w-6 h-6 text-primary" />
                  <p className="text-secondary font-semibold">Who it's for</p>
                </div>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Teams with verified purchase orders that exceed current working capital.</li>
                  <li>Operators needing to pay suppliers or subcontractors before invoicing.</li>
                  <li>Businesses that can't afford to decline growth opportunities because of cash timing.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-14 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="h-full">
                <CardContent className="p-6 space-y-3">
                  <h2 className="text-2xl font-semibold text-secondary">How it works</h2>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700 text-sm">
                    <li>Share the purchase order, supplier quotes, and delivery schedule.</li>
                    <li>We fund supplier or production costs so you can fulfill without strain.</li>
                    <li>Repay when the customer invoice is issued and collected.</li>
                  </ol>
                </CardContent>
              </Card>

              <Card className="h-full">
                <CardContent className="p-6 space-y-3">
                  <h2 className="text-2xl font-semibold text-secondary">Why it fits these industries</h2>
                  <p className="text-gray-700 text-sm">Perfect for order-driven work with upfront costs.</p>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>Construction: cover materials and subs for large scopes before billing.</li>
                    <li>Manufacturing: buy raw materials to fulfill big production runs.</li>
                    <li>Logistics: secure carriers and fuel to move high-volume or time-sensitive freight.</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="border-primary/20">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-700">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Building2 className="w-5 h-5 text-primary" />
                      <p className="font-semibold text-secondary">Construction</p>
                    </div>
                    <p>Take on larger scopes and purchase materials early without burning cash.</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Factory className="w-5 h-5 text-primary" />
                      <p className="font-semibold text-secondary">Manufacturing</p>
                    </div>
                    <p>Lock in supplier pricing and keep production schedules on track.</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Truck className="w-5 h-5 text-primary" />
                      <p className="font-semibold text-secondary">Logistics</p>
                    </div>
                    <p>Book capacity and fuel for high-volume moves with confidence.</p>
                  </div>
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
