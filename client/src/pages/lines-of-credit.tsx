import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { ApplyNowButton, AskQuestionButton } from "@/components/cta-buttons";
import { Repeat, Building2, Factory, Truck } from "lucide-react";

export default function LinesOfCredit() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <main>
        <section className="bg-gradient-to-br from-blue-50 to-white py-14">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <p className="text-sm font-semibold text-primary">Lines of Credit</p>
              <h1 className="text-4xl font-bold text-secondary">Draw and repay as jobs, production, and loads move</h1>
              <p className="text-lg text-gray-700">
                Flexible working capital for construction, manufacturing, and logistics teams that need to cover payroll,
                materials, fuel, and short-term gaps without reapplying for every draw.
              </p>
              <div className="flex gap-3">
                <ApplyNowButton />
                <AskQuestionButton />
              </div>
            </div>
            <Card className="border-blue-100 shadow-lg">
              <CardContent className="p-6 space-y-3">
                <div className="flex items-center gap-3">
                  <Repeat className="w-6 h-6 text-primary" />
                  <p className="text-secondary font-semibold">Who it's for</p>
                </div>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Crews that need quick draws between progress payments or retainage releases.</li>
                  <li>Plants that buy inventory and materials ahead of receivables clearing.</li>
                  <li>Fleets covering fuel, maintenance, and driver pay while invoices age.</li>
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
                    <li>Approved limit based on receivables, contracts, and equipment strength.</li>
                    <li>Draw when you need cash and repay as invoices clear or milestones fund.</li>
                    <li>Reuse the line without restarting the application each time.</li>
                  </ol>
                </CardContent>
              </Card>

              <Card className="h-full">
                <CardContent className="p-6 space-y-3">
                  <h2 className="text-2xl font-semibold text-secondary">Why it fits these industries</h2>
                  <p className="text-gray-700 text-sm">Built for uneven cash cycles and heavy asset costs.</p>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>Construction: bridge payroll and materials between draws and retainage.</li>
                    <li>Manufacturing: fund inputs while you convert POs into shipments.</li>
                    <li>Logistics: keep trucks fueled while brokers and shippers pay on delay.</li>
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
                    <p>Cover subcontractors, permits, and mobilization costs without slowing field work.</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Factory className="w-5 h-5 text-primary" />
                      <p className="font-semibold text-secondary">Manufacturing</p>
                    </div>
                    <p>Buy materials in bulk and fund overtime to meet rush orders.</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Truck className="w-5 h-5 text-primary" />
                      <p className="font-semibold text-secondary">Logistics</p>
                    </div>
                    <p>Protect routes from fuel spikes or unexpected maintenance while receivables clear.</p>
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
