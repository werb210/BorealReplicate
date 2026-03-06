import fs from "node:fs"

const pages = [
  "/",
  "/contact",
  "/compare",
  "/credit-readiness",
  "/credit-results",
  "/podcasts",
  "/industries/construction",
  "/industries/manufacturing",
  "/industries/logistics",
]

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map((p) => `<url><loc>https://borealfinancial.com${p}</loc></url>`).join("\n")}
</urlset>`

fs.writeFileSync("public/sitemap.xml", xml)

console.log("Sitemap generated")
