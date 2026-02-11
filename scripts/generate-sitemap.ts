import fs from "node:fs";
import path from "node:path";
import {
  COMPARISONS,
  INDUSTRIES,
  LOCATIONS,
  PRODUCTS
} from "../client/src/data/seoFramework";

const BASE_URL = "https://borealfinancial.com";
const outputPath = path.resolve(process.cwd(), "public/sitemap.xml");

type ChangeFrequency = "daily" | "weekly" | "monthly";

interface SitemapRoute {
  route: string;
  priority: string;
  changefreq: ChangeFrequency;
}

function escapeXml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function getRoutes(): SitemapRoute[] {
  const staticRoutes: SitemapRoute[] = [
    { route: "/", priority: "1.0", changefreq: "weekly" },
    { route: "/products", priority: "0.9", changefreq: "weekly" },
    { route: "/industries", priority: "0.7", changefreq: "monthly" },
    { route: "/faq", priority: "0.6", changefreq: "monthly" }
  ];

  const pillarRoutes = PRODUCTS.map((product) => ({
    route: `/products/${product.slug}`,
    priority: "0.9",
    changefreq: "weekly" as const
  }));

  const locationRoutes = PRODUCTS.flatMap((product) =>
    LOCATIONS.map((location) => ({
      route: `/products/${product.slug}/${location.slug}`,
      priority: "0.8",
      changefreq: "weekly" as const
    }))
  );

  const industryRoutes = INDUSTRIES.flatMap((industry) =>
    PRODUCTS.map((product) => ({
      route: `/industry/${industry.slug}/${product.slug}`,
      priority: "0.8",
      changefreq: "weekly" as const
    }))
  );

  const comparisonRoutes = COMPARISONS.map((comparison) => ({
    route: `/compare/${comparison.slug}`,
    priority: "0.7",
    changefreq: "monthly" as const
  }));

  return [...staticRoutes, ...pillarRoutes, ...locationRoutes, ...industryRoutes, ...comparisonRoutes];
}

function generateSitemapXml(routes: SitemapRoute[]) {
  const lastmod = new Date().toISOString().split("T")[0];
  const urls = routes
    .map(
      (route) => [
        "  <url>",
        `    <loc>${BASE_URL}${escapeXml(route.route)}</loc>`,
        `    <lastmod>${lastmod}</lastmod>`,
        `    <changefreq>${route.changefreq}</changefreq>`,
        `    <priority>${route.priority}</priority>`,
        "  </url>"
      ].join("\n")
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

function run() {
  const routes = getRoutes();
  const xml = generateSitemapXml(routes);
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, xml, "utf8");
  console.log(`Sitemap generated at ${outputPath} with ${routes.length} routes.`);
}

run();
