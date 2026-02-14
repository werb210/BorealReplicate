import React from "react";
import assert from "node:assert/strict";
import test from "node:test";
import { renderToStaticMarkup } from "react-dom/server";
import { Router } from "wouter";
import Header from "../client/src/components/Header";
import ProductComparison from "../client/src/components/ProductComparison";
import IndustryDetail from "../client/src/pages/IndustryDetail";
import { industries } from "../client/src/data/industries";
import { products } from "../client/src/data/products";

const requiredIndustries = [
  "construction",
  "manufacturing",
  "retail",
  "restaurant-food-service",
  "technology",
  "healthcare",
  "transportation",
  "professional-services",
  "real-estate",
  "agriculture",
  "energy",
  "distribution",
  "media",
];

const requiredProducts = [
  "loc",
  "term-loan",
  "equipment-financing",
  "factoring",
  "po-financing",
  "asset-based-lending",
];

const staticLocationHook = (): [string, (to: string) => void] => ["/", () => undefined];

function withStaticRouter(node: React.ReactNode) {
  return <Router hook={staticLocationHook}>{node}</Router>;
}

test("navigation renders products and industries links", () => {
  const html = renderToStaticMarkup(withStaticRouter(<Header />));
  assert.match(html, /Boreal Financial/);
  assert.match(html, /Products/);
  assert.match(html, /Credit Readiness/);
  assert.match(html, /Contact/);
  for (const slug of requiredIndustries) {
    assert.match(html, new RegExp(`/industries/${slug}`));
  }
});

test("comparison table renders category-first layout with all products", () => {
  const html = renderToStaticMarkup(<ProductComparison />);
  assert.match(html, /<th class="p-4 text-left">Category<\/th>/);
  assert.match(html, /Typical Term/);
  assert.match(html, /Typical Cost Range/);
  for (const slug of requiredProducts) {
    const product = products.find((item) => item.slug === slug);
    assert.ok(product, `missing product ${slug}`);
    assert.match(html, new RegExp(product.name));
  }
});

test("industry routes resolve with advisory and challenge content", () => {
  for (const slug of requiredIndustries) {
    const html = renderToStaticMarkup(withStaticRouter(<IndustryDetail slug={slug} />));
    assert.match(html, /Industry Challenges/);
    assert.match(html, /How Boreal Solves This/);
    assert.match(html, /Apply Now/);
  }
});

test("required industries and products exist in canonical data", () => {
  for (const slug of requiredIndustries) {
    assert.ok(industries.some((industry) => industry.slug === slug), `industry ${slug} missing`);
  }

  for (const slug of requiredProducts) {
    const product = products.find((item) => item.slug === slug);
    assert.ok(product, `product ${slug} missing`);
    assert.ok(product.term.length > 0);
    assert.ok(product.rateRange.length > 0);
    assert.ok(product.useCases.length > 0);
  }
});
