import { Hero } from "@/components/marketplace/Hero";
import { MarketplaceSteps } from "@/components/marketplace/MarketplaceSteps";
import { IndustryCards } from "@/components/marketplace/IndustryCards";
import { ProductGrid } from "@/components/marketplace/ProductGrid";
import { WhyBoreal } from "@/components/marketplace/WhyBoreal";
import { FinalCTA } from "@/components/marketplace/FinalCTA";
import { SEO } from "@/seo/SEO";

export default function Home() {
  return (
    <>
      <SEO title="Boreal Financial | Structured Lending Marketplace" description="Submit your file once and let multiple lenders compete with structured financing offers." />
      <Hero />
      <MarketplaceSteps />
      <IndustryCards />
      <ProductGrid />
      <WhyBoreal />
      <FinalCTA />
    </>
  );
}
