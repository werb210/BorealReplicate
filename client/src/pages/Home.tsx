import { Link } from "wouter";
import SEO from "../components/SEO";
import CapitalScore from "../components/CapitalScore";

const differentiators = [
  "Deep industry underwriting knowledge",
  "Asset-heavy deal experience",
  "Complex cash cycle structuring",
  "Non-bank capital access",
  "Speed without compromise",
  "Deal packaging strength",
  "Strong lender alignment",
  "Technology-driven intake",
];

const productLinks = [
  { title: "Term Loans", link: "/products/term-loans" },
  { title: "Lines of Credit", link: "/products/lines-of-credit" },
  { title: "Factoring", link: "/products/factoring" },
  { title: "Equipment Financing", link: "/products/equipment-financing" },
  { title: "Purchase Order Financing", link: "/products/purchase-order-financing" },
  { title: "Merchant Cash Advance", link: "/products/merchant-cash-advance" },
  { title: "Asset-Based Lending", link: "/products/asset-based-lending" },
];

export default function Home() {
  return (
    <>
      <SEO
        title="Boreal Financial | Strategic Capital Advisory + Marketplace"
        description="Structured financing for construction, manufacturing, and logistics businesses."
        schema={{
          "@context": "https://schema.org",
          "@type": "FinancialService",
          name: "Boreal Financial",
          areaServed: ["Canada", "United States"],
          serviceType: [
            "Term Loans",
            "Line of Credit",
            "Factoring",
            "Equipment Financing",
            "Asset-Based Lending",
          ],
        }}
      />

      <main>
        <section className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 md:grid-cols-2 md:py-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-orange-600">Strategic Capital Advisory + Marketplace</p>
            <h1 className="mt-3 text-4xl font-bold leading-tight md:text-5xl">Better structured financing, delivered with lender-ready clarity.</h1>
            <p className="mt-6 text-lg text-gray-600">
              Boreal Financial partners with asset-intensive businesses to design structured financing strategies and connect you with the right lenders faster.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/apply"
                className="inline-block rounded-md bg-orange-500 px-6 py-3 text-lg font-medium text-white transition hover:bg-orange-600"
              >
                Apply Now
              </Link>
              <Link
                href="/how-it-works"
                className="inline-block rounded-md border border-slate-300 px-6 py-3 text-lg font-medium text-slate-900 transition hover:bg-slate-50"
              >
                How It Works
              </Link>
            </div>
          </div>

          <div>
            <img
              src="/images/epub_QM0825-FEAT-Measure-Faro-p1FT-GettyImages-1298326681_webp.webp"
              alt="Business advisory team discussing financing strategy"
              className="w-full h-[420px] object-cover object-center rounded-xl"
            />
          </div>
        </section>

        <section className="bg-gray-50 py-16">
          <div className="mx-auto max-w-6xl px-4 text-center">
            <h2 className="text-3xl font-semibold text-gray-900">Why Boreal Is Different</h2>
            <div className="mt-10 grid gap-8 text-left text-gray-700 md:grid-cols-2">
              {differentiators.map((item) => (
                <p key={item} className="flex items-start gap-3">
                  <span className="font-bold text-orange-500">•</span>
                  {item}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-20">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Capital Structured for How You Actually Operate
            </h2>
            <p className="text-lg text-gray-600 mb-10">
              We align facilities with your asset base, receivables, equipment,
              purchase orders, and contract cycles — not generic bank templates.
            </p>

            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div>
                <h4 className="font-semibold mb-2">Better Approval Odds</h4>
                <p className="text-gray-600">
                  Deal packaging and lender alignment increases the probability of
                  approval and competitive pricing.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Faster Execution</h4>
                <p className="text-gray-600">
                  Technology-driven intake reduces friction and speeds underwriting.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Non-Bank Capital Access</h4>
                <p className="text-gray-600">
                  Access to private credit, specialty finance, and asset-based lenders.
                </p>
              </div>
            </div>

            <div className="mt-12">
              <a
                href="/apply"
                className="inline-block bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600"
              >
                Apply Now
              </a>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-center text-3xl font-semibold text-gray-900">Solutions for Every Financing Need</h2>
            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {productLinks.map((item) => (
                <Link
                  key={item.title}
                  href={item.link}
                  className="block rounded-lg border p-6 text-center text-gray-800 transition hover:text-orange-600 hover:shadow-lg"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold">
                  How fast can funding close?
                </h4>
                <p className="text-gray-600">
                  Facilities can close in days for revenue-based products and
                  2–4 weeks for structured asset-backed transactions.
                </p>
              </div>

              <div>
                <h4 className="font-semibold">
                  Do you work with startups?
                </h4>
                <p className="text-gray-600">
                  Yes, particularly asset-backed and contract-backed opportunities.
                </p>
              </div>

              <div>
                <h4 className="font-semibold">
                  Is this traditional bank financing?
                </h4>
                <p className="text-gray-600">
                  No. We access specialty lenders, private capital, and non-bank credit.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto py-16 px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">Bank vs Boreal</h2>
          <table className="w-full border text-left">
            <tbody>
              <tr className="border-t">
                <td className="p-4 font-semibold">Speed</td>
                <td className="p-4">Banks: 4–8 weeks</td>
                <td className="p-4">Boreal: 48 hours</td>
              </tr>
              <tr className="border-t">
                <td className="p-4 font-semibold">Collateral Flexibility</td>
                <td className="p-4">Banks: Strict</td>
                <td className="p-4">Boreal: Structured</td>
              </tr>
              <tr className="border-t border-b">
                <td className="p-4 font-semibold">Multiple Lenders</td>
                <td className="p-4">Banks: No</td>
                <td className="p-4">Boreal: Yes</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="bg-gray-50 py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Capital Readiness Score Preview</h2>
          <p>See how lenders evaluate your business before you apply.</p>
          <button className="mt-6 bg-black text-white px-6 py-3 rounded">Preview My Score</button>
        </section>

        <section className="py-10 border-t border-b">
          <div className="flex justify-center gap-12 text-gray-400 text-sm">
            <span>Trusted by Canadian Businesses</span>
            <span>Asset Finance Experts</span>
            <span>Non-Bank Capital Access</span>
          </div>
        </section>

        <section className="py-20">
          <CapitalScore />
        </section>
      </main>
    </>
  );
}
