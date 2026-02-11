import fs from "node:fs";
import path from "node:path";
import { industries, products } from "../client/src/router/content";

const BASE_URL = "https://borealfinancial.com";
const routes = [
  "/",
  "/how-it-works",
  "/apply",
  ...products.map((product) => `/products/${product.slug}`),
  ...industries.map((industry) => `/industries/${industry.slug}`),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${routes
  .map((route) => `  <url><loc>${BASE_URL}${route}</loc></url>`)
  .join("\n")}\n</urlset>\n`;

const outputPath = path.resolve(process.cwd(), "client/public/sitemap.xml");
fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, xml, "utf8");
console.log(`Generated sitemap at ${outputPath}`);
