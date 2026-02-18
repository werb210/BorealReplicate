import { useEffect, useState } from "react";
import { Link } from "wouter";
import SEO from "@/components/SEO";
import { APPLY_URL } from "@/config/site";
import { industries } from "@/data/industries";
import { products } from "@/data/products";
import { buildApplyUrl, getReadinessSessionToken } from "@/utils/session";
import MarketplaceSection from "@/components/MarketplaceSection";
import HorizontalScroller from "@/components/HorizontalScroller";

const primaryHeroImage = "/images/16x9 Concierge Private Banking Hero Image.jpeg";
const fallbackHeroImage = "/images/An image of two groups of business people shaking hands over a meeting table celebrating signing a deal to merge.jpeg.webp";

const featuredIndustrySlugs = ["construction", "manufacturing", "transportation"];
const orderedIndustries = [
  ...featuredIndustrySlugs
    .map((slug) => industries.find((industry) => industry.slug === slug))
    .filter((industry): industry is NonNullable<typeof industry> => Boolean(industry)),
  ...industries.filter((industry) => !featuredIndustrySlugs.includes(industry.slug)),
];

const featuredProductSlugs = ["loc", "term-loan", "equipment-financing"];
const orderedProducts = [
  ...featuredProductSlugs
    .map((slug) => products.find((product) => product.slug === slug))
    .filter((product): product is NonNullable<typeof product> => Boolean(product)),
  ...products.filter((product) => !featuredProductSlugs.includes(product.slug)),
];

export default function Home() {
  const readinessToken = getReadinessSessionToken();
  const applyHref = buildApplyUrl(APPLY_URL, readinessToken);
  const [heroImage, setHeroImage] = useState(primaryHeroImage);

  useEffect(() => {
    const image = new Image();
    image.src = primaryHeroImage;
    image.onerror = () => setHeroImage(fallbackHeroImage);
  }, []);

  return (
    <>
      <SEO title="Boreal Financial | Boutique Capital Advisory" description="Boutique advisory capital structuring with AI-guided packaging." />
      <main className="bg-[#020817] text-white">
        {readinessToken ? (
          <section className="mx-auto max-w-7xl px-5 pt-4 md:px-6">
            <div className="flex flex-col gap-3 rounded-2xl border border-blue-200/30 bg-blue-900/30 px-4 py-3 md:flex-row md:items-center md:justify-between">
              <p className="font-semibold text-blue-100">Continuing your application</p>
              <div className="md:text-right">
                <a href={applyHref} className="w-full rounded-full bg-white px-5 py-2 text-center text-sm font-semibold text-black md:w-auto">Apply Now</a>
              </div>
            </div>
          </section>
        ) : null}
        <section className="relative flex min-h-[85vh] w-full items-center">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url('${heroImage}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          <div className="absolute inset-0 bg-black/70" />

          <div className="relative z-10 mx-auto max-w-7xl px-6 text-white">
            <p className="mb-4 text-sm uppercase tracking-widest text-white/60">Boutique Capital Advisory</p>

            <h1 className="mb-6 max-w-3xl text-4xl font-bold leading-tight md:text-6xl">Strategic financing structured with precision.</h1>

            <p className="mb-8 max-w-2xl text-lg text-white/80">
              Institutional-grade financing strategy built for growth-stage and mature operators.
            </p>

            <div className="flex gap-4">
              <a href="/apply" className="rounded-full bg-blue-600 px-6 py-3 font-medium transition hover:bg-blue-700">
                Access Structured Capital
              </a>
              <a
                href="/contact"
                className="rounded-full border border-white/40 px-6 py-3 font-medium transition hover:border-white"
              >
                Speak With Advisor
              </a>
            </div>
          </div>
        </section>

        <section className="authority-block py-8">
          <div className="mx-auto max-w-7xl px-5 md:px-6">
            <h2 className="text-3xl font-bold md:text-4xl">Institutional-Grade Structuring. Not Rate Shopping.</h2>
            <p className="mt-4 text-white/80">
              80+ active lending institutions. 50+ years combined capital structuring experience. We arrange structured financing from $10,000 to $100,000,000.
            </p>
          </div>
        </section>

        <MarketplaceSection />

        <section className="mx-auto max-w-7xl px-5 py-6 md:px-6 md:py-8">
          <h2 className="text-3xl font-bold md:text-4xl">Industries</h2>
          <div className="mt-6">
            <HorizontalScroller>
              {orderedIndustries.map((industry) => (
                <Link key={industry.slug} href={`/industries/${industry.slug}`} className="scroll-card group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60">
                  <img src={industry.image} alt={industry.name} className="h-52 w-full object-cover transition duration-300 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/25" />
                  <div className="absolute bottom-0 p-4">
                    <h3 className="text-xl font-bold">{industry.name}</h3>
                    <p className="mt-1 text-sm text-slate-200">{industry.description}</p>
                  </div>
                </Link>
              ))}
            </HorizontalScroller>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 pb-10 md:px-6 md:pb-12">
          <h2 className="text-3xl font-bold md:text-4xl">Products</h2>
          <div className="mt-6">
            <HorizontalScroller>
              {orderedProducts.map((product) => (
                <article key={product.slug} className="scroll-card relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60">
                  <img src={product.image} alt={product.name} className="h-56 w-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/20" />
                  <div className="absolute inset-0 flex flex-col justify-end p-4">
                    <h3 className="text-xl font-bold">{product.name}</h3>
                    <p className="mt-1 text-sm text-slate-200">{product.description}</p>
                    <Link href={`/products/${product.slug}`} className="mt-3 inline-flex w-fit rounded-full bg-blue-600 px-4 py-2 text-xs font-semibold">Learn More</Link>
                  </div>
                </article>
              ))}
            </HorizontalScroller>
          </div>
        </section>
      </main>
    </>
  );
}
