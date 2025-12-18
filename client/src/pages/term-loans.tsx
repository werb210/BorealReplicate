import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { ApplyNowButton, AskQuestionButton } from "@/components/cta-buttons";
import { Building2, Factory, Truck, CalendarClock } from "lucide-react";

const industryAngles = [
  {
    name: "Construction",
    detail: "Stabilize cash between progress draws and retainage while equipment stays deployed."
  },
  {
    name: "Manufacturing",
    detail: "Cover material buys and labor while you convert purchase orders into finished goods."
  },
  {
    name: "Logistics",
    detail: "Smooth fuel, driver pay, and maintenance when brokers or shippers pay on delay."
  }
];

export default function TermLoans() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <main>
        <section className="bg-gradient-to-br from-blue-50 to-white py-14">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <p className="text-sm font-semibold text-primary">Term Loans</p>
              <h1 className="text-4xl font-bold text-secondary">Predictable funding for asset-heavy operators</h1>
              <p className="text-lg text-gray-700">
                Fixed-term capital designed for construction, manufacturing, and logistics companies that need a set amount to
                execute contracts, stabilize cash flow, or consolidate expensive debt.
              </p>
              <div className="flex gap-3">
                <ApplyNowButton />
                <AskQuestionButton />
              </div>
            </div>
            <Card className="border-blue-100 shadow-lg">
              <CardContent className="p-6 space-y-3">
                <div className="flex items-center gap-3">
                  <CalendarClock className="w-6 h-6 text-primary" />
                  <p className="text-secondary font-semibold">Who it's for</p>
                </div>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Companies with steady revenue that need defined capital for a project or pivot.</li>
                  <li>Teams carrying equipment, fleet, or inventory balances who want predictable repayment.</li>
                  <li>Operators looking to refinance high-cost short-term facilities into structured terms.</li>
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
                    <li>Share contract schedules, equipment needs, and repayment preferences.</li>
                    <li>We structure terms that match revenue timing and seasonal swings.</li>
                    <li>Fund once, deploy capital, and repay on a predictable cadence.</li>
                  </ol>
                </CardContent>
              </Card>

              <Card className="h-full">
                <CardContent className="p-6 space-y-3">
                  <h2 className="text-2xl font-semibold text-secondary">Why it fits these industries</h2>
                  <p className="text-gray-700 text-sm">Term loans align with long asset lives and milestone revenue.</p>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>Construction: bridge retainage and mobilization costs with fixed payments.</li>
                    <li>Manufacturing: finance production runs or facility upgrades without draining liquidity.</li>
                    <li>Logistics: stabilize cash during contract launches or fleet refreshes.</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="border-primary/20">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-700">
                  {industryAngles.map((angle) => (
                    <div key={angle.name} className="space-y-2">
                      <div className="flex items-center gap-2">
                        {angle.name === "Construction" && <Building2 className="w-5 h-5 text-primary" />}
                        {angle.name === "Manufacturing" && <Factory className="w-5 h-5 text-primary" />}
                        {angle.name === "Logistics" && <Truck className="w-5 h-5 text-primary" />}
                        <p className="font-semibold text-secondary">{angle.name}</p>
                      </div>
                      <p>{angle.detail}</p>
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
