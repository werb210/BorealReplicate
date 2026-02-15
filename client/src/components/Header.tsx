import React from "react";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link } from "wouter";
import { APPLY_URL } from "@/config/site";
import { buildApplyUrl, getReadinessSessionToken } from "@/utils/session";
import { industries } from "@/data/industries";
import { products } from "@/data/products";

const navItems = [
  { href: "/industries", label: "Industries" },
  { href: "/credit-readiness", label: "Credit Readiness" },
];

const primaryProductSlugs = ["loc", "term-loan", "equipment-financing", "factoring", "merchant-cash-advance", "po-financing", "asset-based-lending"];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const readinessSessionToken = getReadinessSessionToken();
  const applyLabel = readinessSessionToken ? "Continue Application" : "Apply Now";
  const applyHref = buildApplyUrl(APPLY_URL, readinessSessionToken);
  const primaryProducts = primaryProductSlugs.map((slug) => products.find((product) => product.slug === slug)).filter(Boolean);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/95 text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-3 py-2 md:px-4 md:py-3">
        <Link href="/" className="min-w-0 flex items-center gap-2 sm:gap-3" onClick={() => setOpen(false)}>
          <img src="/images/Header.png" alt="Boreal Financial" className="h-9 w-auto shrink-0 object-contain sm:h-10" />
          <span className="truncate text-sm font-semibold tracking-wide text-white md:text-base">Boreal Financial</span>
        </Link>

        <div className="hidden items-center gap-4 lg:flex">
          <div className="group relative">
            <Link href="/products" className="inline-flex items-center gap-1 px-2 py-1 text-sm text-white/90 transition hover:text-white">
              Products <ChevronDown size={14} />
            </Link>
            <div className="pointer-events-none absolute left-0 top-full mt-2 w-72 rounded-xl border border-white/10 bg-[#040b1a] p-2 opacity-0 shadow-xl transition group-hover:pointer-events-auto group-hover:opacity-100">
              {primaryProducts.map((product) => (
                <Link key={`desktop-product-${product!.slug}`} href={`/products/${product!.slug}`} className="block rounded-lg px-3 py-2 text-sm text-white/90 hover:bg-white/10">
                  {product!.name}
                </Link>
              ))}
            </div>
          </div>
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="px-2 py-1 text-sm text-white/90 transition hover:text-white">
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="rounded border border-white/40 px-4 py-2 text-sm">
            Contact
          </Link>
          <a href={applyHref} className="ml-2 whitespace-nowrap rounded-full bg-blue-600 px-6 py-2 font-medium text-white hover:bg-blue-700">{applyLabel}</a>
        </div>

        <div className="flex items-center justify-end gap-1.5 lg:hidden">
          <Link href="/contact" className="rounded border border-white/40 px-2.5 py-1.5 text-[11px] font-medium whitespace-nowrap">
            Contact
          </Link>
          <a href={applyHref} className="max-w-[9.25rem] truncate rounded bg-white px-2.5 py-1.5 text-[11px] font-semibold text-black whitespace-nowrap">{applyLabel}</a>
          <button
            onClick={() => {
              setOpen((value) => {
                const nextOpen = !value;
                if (!nextOpen) setMobileIndustriesOpen(false);
                return nextOpen;
              });
            }}
            className="rounded border border-white/30 p-2"
            aria-expanded={open}
            aria-label="Toggle navigation menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <div className={`overflow-hidden border-t border-white/10 bg-[#040b1a] transition-all duration-300 lg:hidden ${open ? "max-h-[85vh]" : "max-h-0"}`}>
        <nav className="mx-auto flex max-w-7xl flex-col gap-1 overflow-y-auto px-3 py-3">
          <Link href="/products" className="rounded px-2 py-2 text-sm text-white/90 hover:bg-white/10" onClick={() => setOpen(false)}>
            Products
          </Link>
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="rounded px-2 py-2 text-sm text-white/90 hover:bg-white/10" onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
          <a href={applyHref} className="rounded bg-white px-2 py-2 text-sm font-semibold text-black" onClick={() => setOpen(false)}>{applyLabel}</a>
          <Link href="/contact" className="rounded px-2 py-2 text-sm text-white/90 hover:bg-white/10" onClick={() => setOpen(false)}>
            Contact
          </Link>

          <div className="my-1 border-t border-white/10 pt-2">
            <p className="px-2 py-1 text-xs uppercase tracking-[0.2em] text-slate-400">Product quick links</p>
            <div className="grid grid-cols-1 gap-1 sm:grid-cols-2">
              {primaryProducts.map((product) => (
                <Link key={`mobile-product-${product!.slug}`} href={`/products/${product!.slug}`} className="rounded px-2 py-2 text-sm text-white/90 hover:bg-white/10" onClick={() => setOpen(false)}>
                  {product!.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="my-1 border-t border-white/10 pt-2">
            <button
              type="button"
              className="flex w-full items-center justify-between rounded px-2 py-2 text-left text-xs uppercase tracking-[0.2em] text-slate-400 hover:bg-white/5"
              aria-expanded={mobileIndustriesOpen}
              onClick={() => setMobileIndustriesOpen((value) => !value)}
            >
              Industries
              <ChevronDown size={14} className={`transition-transform ${mobileIndustriesOpen ? "rotate-180" : ""}`} />
            </button>
            <div className={`${mobileIndustriesOpen ? "mt-2 max-h-56" : "max-h-0"} overflow-y-auto pr-1 transition-all`}>
              <div className="grid grid-cols-1 gap-1 sm:grid-cols-2">
                {industries.map((industry) => (
                  <Link
                    key={`mobile-${industry.slug}`}
                    href={`/industries/${industry.slug}`}
                    className="rounded px-2 py-2 text-sm text-white/90 hover:bg-white/10"
                    onClick={() => {
                      setOpen(false);
                      setMobileIndustriesOpen(false);
                    }}
                  >
                    {industry.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
