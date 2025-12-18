import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { ApplyNowButton, AskQuestionButton } from "@/components/cta-buttons";

const bestFor = ["Working capital", "Payroll gaps", "Material purchases"];

export default function LinesOfCredit() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <main>
        <section className="bg-gradient-to-br from-blue-50 to-white py-16 lg:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-center">
            <p className="text-sm font-semibold text-primary">Lines of Credit</p>
            <h1 className="text-4xl font-bold text-secondary">Flexible Capital Without Reapplying Every Time</h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Revolving access to funds. Pay interest only on what you use.
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
                  Draw what you need for payroll, materials, or working capital, then repay as receivables land. No reapplication for every use.
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
