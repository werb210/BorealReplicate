import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { ApplyNowButton, AskQuestionButton } from "@/components/cta-buttons";
import { Seo } from "@/components/Seo";
import { organizationJsonLd } from "@/lib/structured-data";

const painPoints = [
  "Progress billing creates long gaps between labor and payment",
  "Retainage ties up cash until project close-out",
  "Materials and equipment costs hit upfront"
];

const products = ["Term Loans", "Lines of Credit", "Factoring", "Equipment Financing"];

const scenarios = [
  "A GC needs to float payroll and materials while waiting on a draw",
  "A subcontractor wants to refinance short-term debt from a large project",
  "A civil contractor needs new equipment without draining cash"
];

export default function Construction() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Seo title="Construction Financing | Boreal Financial" description="Construction-focused financing solutions for project mobilization, payroll, materials, and retainage-driven cash flow." canonical="https://borealfinancial.com/industries/construction" jsonLd={organizationJsonLd} />
      <Navigation />

      <main>
        <section className="bg-gradient-to-br from-blue-50 to-white py-16 lg:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-center">
            <p className="text-sm font-semibold text-primary">Construction</p>
            <h1 className="text-4xl font-bold text-secondary">Financing built for project-based cash flow</h1>
            <p className="text-lg text-gray-700">
              We match construction firms with lenders who understand retainage, progress billing, and equipment-heavy schedules.
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
