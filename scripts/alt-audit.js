import fs from "node:fs";
import path from "node:path";

const SRC_DIR = path.resolve(process.cwd(), "client/src");

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...walk(fullPath));
      continue;
    }
    if (entry.isFile() && fullPath.endsWith(".tsx")) {
      files.push(fullPath);
    }
  }
  return files;
}

const violations = [];

for (const file of walk(SRC_DIR)) {
  const content = fs.readFileSync(file, "utf8");
  const imgTagRegex = /<img\b[^>]*>/g;
  const matches = content.match(imgTagRegex) ?? [];

  matches.forEach((tag, index) => {
    if (!/\balt\s*=/.test(tag)) {
      violations.push(`${path.relative(process.cwd(), file)} [img #${index + 1}] ${tag}`);
    }
  });
}

if (violations.length > 0) {
  console.error("Alt audit failed. Missing alt attributes were found:\n");
  violations.forEach((violation) => console.error(`- ${violation}`));
  process.exit(1);
}

console.log("Alt audit passed. No raw <img> tags missing alt were found.");
