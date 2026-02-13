import { useState } from "react";
import { Link } from "wouter";
import { APPLY_URL } from "@/config/site";

export function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="nav border-b">
      <div className="nav-inner mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="nav-left flex items-center gap-3">
          <Link href="/" className="logo text-lg font-semibold text-secondary">
            Boreal Financial
          </Link>
          <a href={APPLY_URL} className="apply-btn inline-block rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">
            Apply Now
          </a>
        </div>

        <div className={`nav-right items-center gap-6 ${mobileOpen ? "open" : ""}`}>
          <div
            className="dropdown relative"
            onMouseEnter={() => setOpenMenu("products")}
            onMouseLeave={() => setTimeout(() => setOpenMenu(null), 150)}
          >
            <button className="text-sm font-medium text-secondary hover:text-primary">Products</button>
            {openMenu === "products" && (
              <div className="dropdown-menu" role="menu">
                <a href="/products/term-loans">Term Loans</a>
                <a href="/products/line-of-credit">Line of Credit</a>
                <a href="/products/factoring">Factoring</a>
                <a href="/products/equipment-financing">Equipment</a>
                <a href="/products/purchase-order-financing">Purchase Order Financing</a>
              </div>
            )}
          </div>

          <div
            className="dropdown relative"
            onMouseEnter={() => setOpenMenu("industries")}
            onMouseLeave={() => setTimeout(() => setOpenMenu(null), 150)}
          >
            <button className="text-sm font-medium text-secondary hover:text-primary">Industries</button>
            {openMenu === "industries" && (
              <div className="dropdown-menu" role="menu">
                <a href="/industries/construction">Construction</a>
                <a href="/industries/manufacturing">Manufacturing</a>
                <a href="/industries/logistics">Logistics</a>
                <a href="/industries/distribution">Distribution</a>
                <a href="/industries/media">Media</a>
                <a href="/industries/healthcare">Healthcare</a>
              </div>
            )}
          </div>

          <a href="/capital-readiness-score" className="text-sm font-medium text-secondary hover:text-primary">
            Capital Readiness Score
          </a>
          <a href="/product-comparison" className="text-sm font-medium text-secondary hover:text-primary">
            Product Comparison
          </a>
          <a href="/contact" className="text-sm font-medium text-secondary hover:text-primary">
            Contact Us
          </a>
        </div>

        <button
          className="mobile-toggle rounded-md border border-border px-3 py-2 text-secondary"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>
    </header>
  );
}
