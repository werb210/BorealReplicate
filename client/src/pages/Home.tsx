import { Link } from "wouter";
import { SEO } from "@/seo/SEO";

export default function Home() {
  return (
    <>
      <SEO
        title="Boreal Financial | Apply Once. Match with Multiple Lenders"
        description="Boreal is a funding marketplace. Complete one smart intake and get matched with qualified lenders without applying one by one."
      />

      <main>
        <section className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 md:grid-cols-2 md:py-20">
          <div>
            <h1 className="text-4xl font-bold leading-tight md:text-5xl">
              Submit once. Get matched to the right lenders.
            </h1>

            <p className="mt-6 text-lg text-gray-600">
              Boreal is a funding marketplace. One smart application sends your file to multiple qualified lenders — no more applying lender by lender.
            </p>

            <Link
              href="/apply"
              className="mt-8 inline-block rounded-md bg-orange-500 px-6 py-3 text-lg font-medium text-white transition hover:bg-orange-600"
            >
              Apply Now
            </Link>
          </div>

          <div>
            <img
              src="/images/factoring-financing.jpeg"
              alt="Marketplace business financing"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </section>

        <section className="bg-gray-50 py-16">
          <div className="mx-auto max-w-5xl px-4 text-center">
            <h2 className="text-3xl font-semibold">Homepage → Apply → Smart Intake → Lender Match</h2>

            <div className="mt-12 grid gap-8 text-left md:grid-cols-3">
              <div>
                <h3 className="text-lg font-semibold">Apply</h3>
                <p className="mt-2 text-gray-600">
                  Complete one intelligent intake.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold">Smart Intake</h3>
                <p className="mt-2 text-gray-600">
                  We organize your file and route it to the right lender profiles.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold">Lender Match</h3>
                <p className="mt-2 text-gray-600">
                  Multiple lenders review simultaneously so you can choose the strongest offer.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
