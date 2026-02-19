import fs from "node:fs";
import path from "node:path";
import { SitemapStream, streamToPromise } from "./sitemap-lib";

const BASE_URL = process.env.VITE_SITE_URL ?? "https://borealfinancial.ca";
const outputPaths = [
  path.resolve(process.cwd(), "public/sitemap.xml"),
  path.resolve(process.cwd(), "client/public/sitemap.xml"),
];

const routes = [
  "/",
  "/how-it-works",
  "/products",
  "/products/media-financing",
  "/industries",
  "/product-comparison",
  "/compare",
  "/credit-readiness",
  "/credit-results",
  "/podcasts",
  "/contact",
  "/apply",
  "/lender-login",
];

async function run() {
  const sitemap = new SitemapStream({ hostname: BASE_URL });

  routes.forEach((url) => sitemap.write({ url }));
  sitemap.end();

  const xml = (await streamToPromise(sitemap)).toString();

  outputPaths.forEach((outputPath) => {
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, xml, "utf8");
  });

  console.log(`Sitemap generated for ${routes.length} routes.`);
}

void run();
