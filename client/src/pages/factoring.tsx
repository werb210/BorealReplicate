import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { ApplyNowButton, AskQuestionButton } from "@/components/cta-buttons";
import { ArrowDownCircle, Building2, Factory, Truck } from "lucide-react";

export default function Factoring() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <main>
        <section className="bg-gradient-to-br from-blue-50 to-white py-14">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <p className="text-sm font-semibold text-primary">Factoring</p>
              <h1 className="text-4xl font-bold text-secondary">Turn invoices into immediate cash</h1>
              <p className="text-lg text-gray-700">
                Designed for construction, manufacturing, and logistics companies waiting on progress draws, broker payments,
                or customer terms. Unlock working capital without adding debt.
              </p>
              <div className="flex gap-3">
                <ApplyNowButton />
                <AskQuestionButton />
              </div>
            </div>
            <Card className="border-blue-100 shadow-lg">
              <CardContent className="p-6 space-y-3">
                <div className="flex items-center gap-3">
                  <ArrowDownCircle className="w-6 h-6 text-primary" />
                  <p className="text-secondary font-semibold">Who it's for</p>
                </div>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Contractors waiting on progress payments or retainage.</li>
                  <li>Manufacturers shipping on net terms who need cash to start the next run.</li>
                  <li>Carriers and 3PLs with brokers or shippers that pay in 30-90 days.</li>
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
                    <li>Submit invoices tied to work completed or loads delivered.</li>
                    <li>Receive an advance so you can cover payroll, materials, or fuel.</li>
                    <li>We collect when the customer pays; you keep operating without cash delays.</li>
                  </ol>
                </CardContent>
              </Card>

              <Card className="h-full">
                <CardContent className="p-6 space-y-3">
                  <h2 className="text-2xl font-semibold text-secondary">Why it fits these industries</h2>
                  <p className="text-gray-700 text-sm">Factoring aligns with milestone billing and slow-paying customers.</p>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>Construction: advance against progress draws and retainage.</li>
                    <li>Manufacturing: unlock cash tied to shipments and distributor terms.</li>
                    <li>Logistics: keep trucks moving while brokers process payments.</li>
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
                    <p>Bridge cash between mobilization, inspections, and retainage release.</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Factory className="w-5 h-5 text-primary" />
                      <p className="font-semibold text-secondary">Manufacturing</p>
                    </div>
                    <p>Fund the next production run while customers pay on net terms.</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Truck className="w-5 h-5 text-primary" />
                      <p className="font-semibold text-secondary">Logistics</p>
                    </div>
                    <p>Cover fuel and maintenance while waiting on freight invoices.</p>
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
