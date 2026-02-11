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
      <SEO title="Boreal Financial | Business Funding Marketplace" description="Apply once and compare business funding offers from multiple lenders through Boreal's simple marketplace process." />
      <Hero />
      <MarketplaceSteps />
      <ProductGrid />
      <IndustryCards />
      <WhyBoreal />
      <FinalCTA />
    </>
  );
}
