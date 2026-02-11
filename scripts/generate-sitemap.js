import fs from "node:fs";
import path from "node:path";

const BASE_URL = "https://borealfinancial.com";
const repoRoot = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const pagesDir = path.join(repoRoot, "client", "src", "pages");
const outputPath = path.join(repoRoot, "client", "public", "sitemap.xml");

const routeOverrides = {
  "home.tsx": "/",
  "not-found.tsx": null,
  "funding-solutions.tsx": "/funding-solutions",
  "construction.tsx": "/industries/construction",
  "manufacturing.tsx": "/industries/manufacturing",
  "logistics.tsx": "/industries/logistics"
};

const priorityOverrides = {
  "/": "1.0",
  "/funding-solutions": "0.9",
  "/industries": "0.9"
};

const changefreqOverrides = {
  "/": "weekly",
  "/funding-solutions": "weekly",
  "/industries": "weekly"
};

function toKebabRoute(filename) {
  return `/${filename.replace(/\.tsx$/, "")}`;
}

const pageFiles = fs.readdirSync(pagesDir).filter((file) => file.endsWith(".tsx"));
const routes = pageFiles
  .map((file) => (Object.prototype.hasOwnProperty.call(routeOverrides, file) ? routeOverrides[file] : toKebabRoute(file)))
  .filter(Boolean)
  .sort((a, b) => {
    if (a === "/") return -1;
    if (b === "/") return 1;
    return a.localeCompare(b);
  });

const timestamp = new Date().toISOString();
const urlset = routes
  .map((route) => {
    const loc = `${BASE_URL}${route}`;
    const changefreq = changefreqOverrides[route] ?? "monthly";
    const priority = priorityOverrides[route] ?? "0.7";

    return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${timestamp}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
  })
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlset}\n</urlset>\n`;

fs.writeFileSync(outputPath, xml, "utf8");
console.log(`Sitemap generated at ${outputPath}`);
