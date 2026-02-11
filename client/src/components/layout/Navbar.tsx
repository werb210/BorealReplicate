import { useState } from "react";
import { Link } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";

const products = [
  { label: "Term Loans", href: "/products/term-loans" },
  { label: "Lines of Credit", href: "/products/loc" },
  { label: "Factoring", href: "/products/factoring" },
  { label: "Equipment Financing", href: "/products/equipment" },
];

const industries = [
  { label: "Construction", href: "/industries/construction" },
  { label: "Manufacturing", href: "/industries/manufacturing" },
  { label: "Logistics", href: "/industries/logistics" },
];

export function Navbar() {
  const [productsOpen, setProductsOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white" role="banner">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4">
        <div className="flex items-center gap-3 md:gap-8">
          <Link href="/" className="text-lg font-semibold md:text-xl">
            Boreal Financial
          </Link>

          <Link
            href="/apply"
            className="rounded-md bg-orange-500 px-3 py-2 text-xs font-medium text-white transition hover:bg-orange-600 md:px-5 md:text-sm"
          >
            Apply Now
          </Link>
        </div>

        <nav className="hidden items-center gap-8 text-sm font-medium md:flex" aria-label="Main navigation">
          <div
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button type="button" className="inline-flex items-center gap-1 hover:text-orange-500" aria-haspopup="menu" aria-expanded={productsOpen}>
              Products <ChevronDown className="h-4 w-4" />
            </button>
            {productsOpen ? (
              <div className="absolute mt-2 w-52 rounded-md border bg-white shadow-lg" role="menu" aria-label="Products">
                {products.map((product) => (
                  <Link key={product.href} href={product.href} className="block px-4 py-2 hover:bg-gray-100" role="menuitem">
                    {product.label}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>

          <div
            className="relative"
            onMouseEnter={() => setIndustriesOpen(true)}
            onMouseLeave={() => setIndustriesOpen(false)}
          >
            <button type="button" className="inline-flex items-center gap-1 hover:text-orange-500" aria-haspopup="menu" aria-expanded={industriesOpen}>
              Industries <ChevronDown className="h-4 w-4" />
            </button>
            {industriesOpen ? (
              <div className="absolute mt-2 w-52 rounded-md border bg-white shadow-lg" role="menu" aria-label="Industries">
                {industries.map((industry) => (
                  <Link key={industry.href} href={industry.href} className="block px-4 py-2 hover:bg-gray-100" role="menuitem">
                    {industry.label}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>

          <a href="/lender-login" className="hover:text-orange-500">
            Lender / Referral Login
          </a>
        </nav>

        <button
          type="button"
          className="rounded p-2 md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen ? (
        <div className="border-t bg-white px-4 py-4 md:hidden">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase text-slate-500">Products</p>
            {products.map((product) => (
              <Link key={product.href} href={product.href} className="block rounded px-2 py-2 text-sm" onClick={() => setMobileOpen(false)}>
                {product.label}
              </Link>
            ))}
          </div>

          <div className="mt-4 space-y-2">
            <p className="text-xs font-semibold uppercase text-slate-500">Industries</p>
            {industries.map((industry) => (
              <Link key={industry.href} href={industry.href} className="block rounded px-2 py-2 text-sm" onClick={() => setMobileOpen(false)}>
                {industry.label}
              </Link>
            ))}
          </div>

          <a href="/lender-login" className="mt-4 block rounded px-2 py-2 text-sm" onClick={() => setMobileOpen(false)}>
            Lender / Referral Login
          </a>
        </div>
      ) : null}
    </header>
  );
}
