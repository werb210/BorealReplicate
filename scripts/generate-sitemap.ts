import fs from "node:fs";
import path from "node:path";
import { SitemapStream, streamToPromise } from "./sitemap-lib";
import { LOCATIONS, PRODUCTS } from "../client/src/data/seoLandingConfig";

const BASE_URL = "https://borealfinancial.com";
const outputPath = path.resolve(process.cwd(), "client/public/sitemap.xml");

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname: BASE_URL });

  sitemap.write({ url: "/" });
  sitemap.write({ url: "/faq" });

  for (const product of PRODUCTS) {
    for (const location of LOCATIONS) {
      sitemap.write({ url: `/${product.slug}/${location.toLowerCase()}` });
    }
  }

  sitemap.end();
  const xmlBuffer = await streamToPromise(sitemap);
  fs.writeFileSync(outputPath, xmlBuffer);
  console.log(`Sitemap generated at ${outputPath}`);
}

generateSitemap().catch((error: unknown) => {
  console.error("Failed to generate sitemap", error);
  process.exit(1);
});
