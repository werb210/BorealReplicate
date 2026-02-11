import { useState } from "react";
import { Link } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import { trackEvent } from "@/analytics/ga";

interface NavbarProps {
  onOpenSupport: () => void;
}

const productLinks = [
  { label: "Term Loan", href: "/products/term-loan" },
  { label: "Line of Credit", href: "/products/line-of-credit" },
  { label: "Factoring", href: "/products/factoring" },
  { label: "Equipment Finance", href: "/products/equipment-finance" },
  { label: "Purchase Order Finance", href: "/products/purchase-order-finance" },
];

const industryLinks = [
  { label: "Construction", href: "/industries/construction" },
  { label: "Manufacturing", href: "/industries/manufacturing" },
  { label: "Logistics", href: "/industries/logistics" },
  { label: "Other", href: "/industries/other" },
];

function DesktopDropdown({ label, items, eventName }: { label: string; items: Array<{ label: string; href: string }>; eventName: string }) {
  return (
    <div className="group relative">
      <button className="inline-flex items-center gap-1 px-3 py-2 text-sm font-medium" aria-haspopup="menu" aria-expanded="false">
        {label}
        <ChevronDown className="h-4 w-4" aria-hidden="true" />
      </button>
      <div className="invisible absolute left-0 top-full z-20 mt-1 min-w-56 rounded-md border bg-white p-1 opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100" role="menu" aria-label={label}>
        {items.map((item) => (
          <Link key={item.href} href={item.href} onClick={() => trackEvent(eventName, { target: item.href })} className="block rounded px-3 py-2 text-sm hover:bg-slate-100" role="menuitem">
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export function Navbar({ onOpenSupport }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b bg-white/95 backdrop-blur" role="banner">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3" aria-label="Main navigation">
        <div className="flex items-center gap-3">
          <Link href="/" className="text-lg font-bold tracking-tight" aria-label="Boreal Financial Home">
            Boreal
          </Link>
          <div className="hidden md:flex md:items-center">
            <DesktopDropdown label="Products" items={productLinks} eventName="click_product" />
            <DesktopDropdown label="Industries" items={industryLinks} eventName="click_industry" />
            <Link href="/how-it-works" className="px-3 py-2 text-sm font-medium">
              How It Works
            </Link>
          </div>
        </div>

        <div className="hidden md:flex md:items-center md:gap-2">
          <button onClick={() => { trackEvent("open_support"); onOpenSupport(); }} className="rounded-md border px-3 py-2 text-sm font-medium" type="button">
            Talk to Expert
          </button>
          <Link href="/apply" className="rounded-md bg-slate-900 px-3 py-2 text-sm font-semibold text-white" onClick={() => trackEvent("start_application")}>
            Apply
          </Link>
          <a href="#" className="px-2 py-2 text-xs">Lender Login</a>
          <a href="#" className="px-2 py-2 text-xs">Referrer Login</a>
          <a href="#" className="px-2 py-2 text-xs">Staff Login</a>
        </div>

        <button className="rounded-md p-2 md:hidden" onClick={() => setMobileOpen((current) => !current)} aria-expanded={mobileOpen} aria-controls="mobile-menu" aria-label="Toggle navigation menu" type="button">
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {mobileOpen && (
        <div id="mobile-menu" className="border-t px-4 py-4 md:hidden" role="menu" aria-label="Mobile menu">
          <p className="pb-1 text-xs font-semibold uppercase text-slate-500">Products</p>
          <div className="space-y-1 pb-3">
            {productLinks.map((item) => (
              <Link key={item.href} href={item.href} className="block rounded px-2 py-2 text-sm" onClick={() => setMobileOpen(false)}>
                {item.label}
              </Link>
            ))}
          </div>
          <p className="pb-1 text-xs font-semibold uppercase text-slate-500">Industries</p>
          <div className="space-y-1 pb-3">
            {industryLinks.map((item) => (
              <Link key={item.href} href={item.href} className="block rounded px-2 py-2 text-sm" onClick={() => setMobileOpen(false)}>
                {item.label}
              </Link>
            ))}
          </div>
          <Link href="/how-it-works" className="block rounded px-2 py-2 text-sm">How It Works</Link>
          <div className="mt-3 grid gap-2">
            <button onClick={() => { onOpenSupport(); setMobileOpen(false); }} className="w-full rounded-md border px-3 py-2 text-sm" type="button">Talk to Expert</button>
            <Link href="/apply" className="w-full rounded-md bg-slate-900 px-3 py-2 text-center text-sm font-semibold text-white">Apply</Link>
            <a href="#" className="w-full rounded-md border px-3 py-2 text-sm text-center">Lender Login</a>
            <a href="#" className="w-full rounded-md border px-3 py-2 text-sm text-center">Referrer Login</a>
            <a href="#" className="w-full rounded-md border px-3 py-2 text-sm text-center">Staff Login</a>
          </div>
        </div>
      )}
    </header>
  );
}
