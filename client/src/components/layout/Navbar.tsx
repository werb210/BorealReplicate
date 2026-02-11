import { useState } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";

const products = [
  { label: "Term Loans", href: "/products/term-loans" },
  { label: "Line of Credit", href: "/products/lines-of-credit" },
  { label: "Factoring", href: "/products/factoring" },
  { label: "Equipment Financing", href: "/products/equipment-financing" },
  { label: "Purchase Order Financing", href: "/products/purchase-order-financing" },
  { label: "Asset-Based Lending", href: "/products/asset-based-lending" },
  { label: "Merchant Cash Advance", href: "/products/merchant-cash-advance" },
];

const industries = [
  { label: "Construction", href: "/industries/construction" },
  { label: "Manufacturing", href: "/industries/manufacturing" },
  { label: "Logistics", href: "/industries/logistics" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-white" role="banner">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/images/ChatGPT Image Feb 3, 2026, 12_32_35 PM.png"
            alt="Boreal Financial Logo"
            className="h-10 w-auto object-contain"
          />
        </Link>

        <nav className="relative hidden items-center gap-8 text-sm font-medium md:flex" aria-label="Main navigation">
          <div className="group relative">
            <span className="cursor-pointer">Products</span>
            <div className="absolute mt-2 hidden w-56 rounded-md border bg-white shadow-lg group-hover:block">
              {products.map((product) => (
                <Link key={product.href} href={product.href} className="block px-4 py-2 hover:bg-gray-100">
                  {product.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="group relative">
            <span className="cursor-pointer">Industries</span>
            <div className="absolute mt-2 hidden w-56 rounded-md border bg-white shadow-lg group-hover:block">
              {industries.map((industry) => (
                <Link key={industry.href} href={industry.href} className="block px-4 py-2 hover:bg-gray-100">
                  {industry.label}
                </Link>
              ))}
            </div>
          </div>

          <Link href="/apply">Apply</Link>
          <Link href="/lender-login">Lender / Referrer Login</Link>
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
        <div className="border-t bg-white px-6 py-4 md:hidden">
          <Link href="/apply" className="mb-3 block rounded-md bg-blue-600 px-4 py-2 text-center text-sm font-semibold text-white">
            Apply
          </Link>
          <p className="mt-2 text-xs font-semibold uppercase text-slate-500">Products</p>
          {products.map((product) => (
            <Link key={product.href} href={product.href} className="block py-2 text-sm" onClick={() => setMobileOpen(false)}>
              {product.label}
            </Link>
          ))}
          <p className="mt-3 text-xs font-semibold uppercase text-slate-500">Industries</p>
          {industries.map((industry) => (
            <Link key={industry.href} href={industry.href} className="block py-2 text-sm" onClick={() => setMobileOpen(false)}>
              {industry.label}
            </Link>
          ))}
          <Link href="/lender-login" className="mt-3 block py-2 text-sm" onClick={() => setMobileOpen(false)}>
            Lender / Referrer Login
          </Link>
        </div>
      ) : null}
    </header>
  );
}
