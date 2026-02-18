const fs = require("fs");

const base = "https://borealfinancial.ca";

const routes = [
  "",
  "/products",
  "/industries",
  "/credit-readiness",
  "/product-comparison",
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `
  <url>
    <loc>${base}${route}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`
  )
  .join("")}
</urlset>`;

fs.writeFileSync("public/sitemap.xml", sitemap);
console.log("Sitemap generated.");
