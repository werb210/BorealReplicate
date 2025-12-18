import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { ApplyNowButton, AskQuestionButton } from "@/components/cta-buttons";

const bestFor = ["Progress billing", "Net 30 or Net 60 receivables", "Rapid growth"];

export default function Factoring() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <main>
        <section className="bg-gradient-to-br from-blue-50 to-white py-16 lg:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-center">
            <p className="text-sm font-semibold text-primary">Factoring</p>
            <h1 className="text-4xl font-bold text-secondary">Get Paid Now Not When Your Customer Decides</h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Advance against invoices. Funding based on receivables not credit score.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <ApplyNowButton />
              <AskQuestionButton variant="outline" />
            </div>
          </div>
        </section>

        <section className="py-14 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <Card className="border-blue-100">
              <CardContent className="p-6 space-y-3 text-left">
                <p className="text-sm font-semibold text-primary">Best for</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {bestFor.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="text-gray-700">
                  Turn progress billing or slow receivables into immediate working capital so crews, routes, and production keep moving.
                </p>
              </CardContent>
            </Card>
            <div className="flex flex-wrap gap-3 justify-center">
              <ApplyNowButton />
              <AskQuestionButton variant="outline">Ask a Question</AskQuestionButton>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
