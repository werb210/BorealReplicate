import { useState } from "react";
import { Link } from "wouter";
import { APPLY_URL } from "@/config/site";

const productLinks = [
  { label: "Term Loans", path: "/products/term-loans" },
  { label: "Line of Credit", path: "/products/line-of-credit" },
  { label: "Factoring", path: "/products/factoring" },
  { label: "Equipment Financing", path: "/products/equipment-financing" },
  { label: "Purchase Order Financing", path: "/products/purchase-order-financing" },
];

const industryLinks = [
  { label: "Construction", path: "/industries/construction" },
  { label: "Manufacturing", path: "/industries/manufacturing" },
  { label: "Logistics", path: "/industries/logistics" },
  { label: "Distribution", path: "/industries/distribution" },
  { label: "Media", path: "/industries/media" },
  { label: "Healthcare", path: "/industries/healthcare" },
];

export function Navbar() {
  const [openMenu, setOpenMenu] = useState<"products" | "industries" | null>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-end justify-between px-6 py-2">
        <Link href="/" className="flex items-end">
          <img src="/images/logo.png" alt="Boreal" className="h-32 w-auto md:h-36" />
        </Link>

        <nav className="relative flex items-center gap-6 pb-4 text-sm font-medium text-slate-700">
          <div onMouseEnter={() => setOpenMenu("products")} onMouseLeave={() => setOpenMenu((menu) => (menu === "products" ? null : menu))} className="relative">
            <button className="transition hover:text-blue-600">Products</button>
            {openMenu === "products" && (
              <div className="absolute right-0 top-full w-64 rounded-xl border border-slate-200 bg-white py-2 shadow-xl">
                {productLinks.map((item) => (
                  <Link key={item.path} href={item.path} onClick={() => setOpenMenu(null)} className="block px-4 py-2 hover:bg-slate-50">
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div onMouseEnter={() => setOpenMenu("industries")} onMouseLeave={() => setOpenMenu((menu) => (menu === "industries" ? null : menu))} className="relative">
            <button className="transition hover:text-blue-600">Industries</button>
            {openMenu === "industries" && (
              <div className="absolute right-0 top-full w-64 rounded-xl border border-slate-200 bg-white py-2 shadow-xl">
                {industryLinks.map((item) => (
                  <Link key={item.path} href={item.path} onClick={() => setOpenMenu(null)} className="block px-4 py-2 hover:bg-slate-50">
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/capital-readiness" className="transition hover:text-blue-600">Capital Readiness</Link>
          <Link href="/product-comparison" className="transition hover:text-blue-600">Product Comparison</Link>
          <Link href="/podcasts" className="transition hover:text-blue-600">Podcasts</Link>
          <Link href="/contact" className="transition hover:text-blue-600">Contact Us</Link>

          <a href={APPLY_URL} className="rounded-full bg-blue-600 px-5 py-2.5 text-white transition hover:bg-blue-700">
            Apply Now
          </a>
        </nav>
      </div>
    </header>
  );
}
