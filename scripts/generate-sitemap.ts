import fs from "node:fs";
import path from "node:path";
import { SitemapStream, streamToPromise } from "./sitemap-lib";
import { COMPARISONS, INDUSTRIES, LOCATIONS, PRODUCTS } from "../client/src/data/seoFramework";

const BASE_URL = "https://borealfinancial.ca";
const outputPaths = [
  path.resolve(process.cwd(), "public/sitemap.xml"),
  path.resolve(process.cwd(), "client/public/sitemap.xml"),
];

const staticRoutes = [
  "/",
  "/about",
  "/apply",
  "/how-it-works",
  "/contact",
  "/privacy",
  "/terms",
  "/products/term-loans",
  "/products/line-of-credit",
  "/products/factoring",
  "/products/equipment-financing",
  "/products/purchase-order-financing",
  "/industries/construction",
  "/industries/manufacturing",
  "/industries/logistics",
  "/industries",
];

async function run() {
  const sitemap = new SitemapStream({ hostname: BASE_URL });

  const dynamicRoutes = [
    ...PRODUCTS.map((product) => `/products/${product.slug}`),
    ...PRODUCTS.flatMap((product) => LOCATIONS.map((location) => `/products/${product.slug}/${location.slug}`)),
    ...INDUSTRIES.flatMap((industry) => PRODUCTS.map((product) => `/industry/${industry.slug}/${product.slug}`)),
    ...COMPARISONS.map((comparison) => `/compare/${comparison.slug}`),
  ];

  const routes = Array.from(new Set([...staticRoutes, ...dynamicRoutes]));

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
