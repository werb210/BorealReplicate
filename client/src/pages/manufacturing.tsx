import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { ApplyNowButton, AskQuestionButton } from "@/components/cta-buttons";

const painPoints = [
  "Inventory and raw materials absorb cash before revenue lands",
  "Long production cycles delay payment",
  "Machinery upgrades are capital intensive"
];

const products = ["Purchase Order Financing", "Term Loans", "Equipment Financing", "Lines of Credit"];

const scenarios = [
  "A manufacturer needs supplier funding to accept a large PO",
  "A plant wants to refinance equipment for better cash flow",
  "A growing brand needs working capital to smooth inventory cycles"
];

export default function Manufacturing() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <main>
        <section className="bg-gradient-to-br from-blue-50 to-white py-16 lg:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-center">
            <p className="text-sm font-semibold text-primary">Manufacturing</p>
            <h1 className="text-4xl font-bold text-secondary">Capital aligned to production cycles</h1>
            <p className="text-lg text-gray-700">
              We structure manufacturing financing around inventory turns, PO timing, and equipment investment needs.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <ApplyNowButton />
              <AskQuestionButton variant="outline" />
            </div>
          </div>
        </section>

        <section className="py-14 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <Card className="border-blue-100">
              <CardContent className="p-6 space-y-4 text-left">
                <div>
                  <p className="text-sm font-semibold text-primary">Industry pain points</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    {painPoints.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold text-primary">Relevant funding products</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    {products.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold text-primary">Example scenarios</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    {scenarios.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
            <div className="flex flex-wrap gap-3 justify-center">
              <ApplyNowButton />
              <AskQuestionButton variant="outline" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
