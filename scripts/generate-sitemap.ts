import fs from "node:fs";
import path from "node:path";

interface GeneratedRouteEntry {
  route: string;
  priority: string;
  changefreq: "weekly" | "monthly";
}

const BASE_URL = "https://borealfinancial.com";
const generatedRoutesPath = path.resolve(process.cwd(), "client/src/data/generatedSeoRoutes.json");
const outputPath = path.resolve(process.cwd(), "client/public/sitemap.xml");

function generateUrlNode(route: GeneratedRouteEntry, lastmod: string) {
  return [
    "  <url>",
    `    <loc>${BASE_URL}${route.route}</loc>`,
    `    <lastmod>${lastmod}</lastmod>`,
    `    <changefreq>${route.changefreq}</changefreq>`,
    `    <priority>${route.priority}</priority>`,
    "  </url>"
  ].join("\n");
}

function generateSitemapXml(routes: GeneratedRouteEntry[]) {
  const lastmod = new Date().toISOString().split("T")[0];
  const staticRoutes: GeneratedRouteEntry[] = [
    { route: "/", priority: "1.0", changefreq: "weekly" },
    { route: "/faq", priority: "0.6", changefreq: "monthly" },
    { route: "/products", priority: "0.8", changefreq: "weekly" }
  ];

  const allRoutes = [...staticRoutes, ...routes];
  const urlNodes = allRoutes.map((route) => generateUrlNode(route, lastmod)).join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlNodes}
</urlset>
`;
}

function run() {
  if (!fs.existsSync(generatedRoutesPath)) {
    throw new Error(`Generated route manifest not found at ${generatedRoutesPath}. Run generate:seo first.`);
  }

  const raw = fs.readFileSync(generatedRoutesPath, "utf8");
  const routes = JSON.parse(raw) as GeneratedRouteEntry[];
  const xml = generateSitemapXml(routes);

  fs.writeFileSync(outputPath, xml, "utf8");
  console.log(`Sitemap generated at ${outputPath} with ${routes.length} generated SEO routes.`);
}

run();
