import { Link } from "wouter";
import { SEO } from "@/seo/SEO";

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
        description="Boreal Financial designs structured financing strategies for asset-intensive businesses and connects you with aligned lenders quickly."
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
      </main>
    </>
  );
}
