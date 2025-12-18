import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { ApplyNowButton, AskQuestionButton } from "@/components/cta-buttons";

const challenges = ["Fuel costs", "Fleet expenses", "Delayed customer payments"];
const solutions = ["Factoring", "Lines of Credit", "Equipment Financing"];

export default function Logistics() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <main>
        <section className="bg-gradient-to-br from-blue-50 to-white py-16 lg:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-center">
            <p className="text-sm font-semibold text-primary">Logistics</p>
            <h1 className="text-4xl font-bold text-secondary">Keep Freight Moving Without Cash Bottlenecks</h1>
            <div className="flex flex-wrap gap-3 justify-center">
              <ApplyNowButton />
              <AskQuestionButton variant="outline">Ask the Financing Assistant</AskQuestionButton>
            </div>
          </div>
        </section>

        <section className="py-14 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <Card className="border-blue-100">
              <CardContent className="p-6 space-y-3 text-left">
                <p className="text-sm font-semibold text-primary">Challenges</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {challenges.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="text-sm font-semibold text-primary">Solutions</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {solutions.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <div className="flex flex-wrap gap-3 justify-center">
              <ApplyNowButton />
              <AskQuestionButton variant="outline">Ask the Financing Assistant</AskQuestionButton>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
