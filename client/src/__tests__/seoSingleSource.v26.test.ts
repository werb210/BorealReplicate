// BF_WEBSITE_SEO_MERGE_v26
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { describe, it } from "node:test";

const root = path.resolve(__dirname, "../..");
const src = path.join(root, "src");

function walk(dir: string): string[] {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return walk(full);
    return /\.tsx?$/.test(entry.name) ? [full] : [];
  });
}

const files = walk(src);
const seo = fs.readFileSync(path.join(src, "components/SEO.tsx"), "utf8");

describe("one SEO component, one Helmet dispatcher", () => {
  it("the duplicate is gone", () => {
    assert.equal(fs.existsSync(path.join(src, "seo/SEO.tsx")), false);
  });

  it("nothing imports the deleted module", () => {
    const offenders = files.filter((f) => /from ["']@\/seo\/SEO["']/.test(fs.readFileSync(f, "utf8")));
    assert.deepEqual(offenders, []);
  });

  it("only one Helmet implementation is in use", () => {
    // react-helmet and helmetAsync do not share a dispatcher; two of them
    // racing over <title> and <link rel="canonical"> is the whole reason
    // this consolidation exists.
    const helmetImports = new Set(
      files.flatMap((f) => fs.readFileSync(f, "utf8").match(/import \{ Helmet \} from "([^"]+)"/g) ?? []),
    );
    assert.ok(helmetImports.size <= 1);
  });

  it("keeps og:image, which only the deleted copy emitted", () => {
    assert.ok(seo.includes('property="og:image"'));
    assert.ok(seo.includes("DEFAULT_OG_IMAGE"));
  });

  it("still strips query strings from the canonical", () => {
    assert.ok(seo.includes("window.location.pathname"));
    assert.ok(!seo.includes("window.location.search"));
  });
});
