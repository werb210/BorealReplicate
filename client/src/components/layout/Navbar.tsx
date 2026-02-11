import { useState } from "react";
import { Link } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import { trackEvent } from "@/analytics/ga";

const productLinks = [
  { label: "Term Loans", href: "/products/term-loan" },
  { label: "Lines of Credit", href: "/products/line-of-credit" },
  { label: "Factoring", href: "/products/factoring" },
  { label: "Purchase Order Financing", href: "/products/purchase-order-finance" },
  { label: "Equipment Financing", href: "/products/equipment-finance" },
];

function DesktopDropdown({ items }: { items: Array<{ label: string; href: string }> }) {
  return (
    <div className="group relative">
      <button className="inline-flex items-center gap-1 px-3 py-2 text-sm font-medium" aria-haspopup="menu" aria-expanded="false">
        Products
        <ChevronDown className="h-4 w-4" aria-hidden="true" />
      </button>
      <div className="invisible absolute left-0 top-full z-20 mt-1 min-w-64 rounded-md border bg-white p-1 opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100" role="menu" aria-label="Products">
        {items.map((item) => (
          <Link key={item.href} href={item.href} onClick={() => trackEvent("click_product", { target: item.href })} className="block rounded px-3 py-2 text-sm hover:bg-slate-100" role="menuitem">
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b bg-white/95 backdrop-blur" role="banner">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3" aria-label="Main navigation">
        <div className="flex items-center gap-2">
          <Link href="/" className="text-lg font-bold tracking-tight" aria-label="Boreal Financial Home">
            Boreal
          </Link>
          <div className="hidden items-center md:flex">
            <DesktopDropdown items={productLinks} />
            <Link href="/industries" className="px-3 py-2 text-sm font-medium">Industries</Link>
            <Link href="/apply" className="px-3 py-2 text-sm font-medium">Apply</Link>
            <Link href="/contact" className="px-3 py-2 text-sm font-medium">Contact / Chat</Link>
          </div>
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <Link href="/staff-login" className="rounded-md border px-3 py-2 text-xs font-semibold">Staff Login</Link>
          <Link href="/partner-login" className="rounded-md border px-3 py-2 text-xs font-semibold">Lender/Referrer Login</Link>
          <Link href="/apply" className="rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white" onClick={() => trackEvent("start_application")}>Apply Now</Link>
        </div>

        <button
          className="rounded-md p-2 md:hidden"
          onClick={() => setMobileOpen((current) => !current)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
          type="button"
        >
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
          <div className="space-y-1 pb-3">
            <Link href="/industries" className="block rounded px-2 py-2 text-sm" onClick={() => setMobileOpen(false)}>Industries</Link>
            <Link href="/apply" className="block rounded px-2 py-2 text-sm" onClick={() => setMobileOpen(false)}>Apply</Link>
            <Link href="/contact" className="block rounded px-2 py-2 text-sm" onClick={() => setMobileOpen(false)}>Contact / Chat</Link>
          </div>
          <div className="mt-2 grid gap-2">
            <Link href="/staff-login" className="w-full rounded-md border px-3 py-2 text-center text-sm font-semibold" onClick={() => setMobileOpen(false)}>Staff Login</Link>
            <Link href="/partner-login" className="w-full rounded-md border px-3 py-2 text-center text-sm font-semibold" onClick={() => setMobileOpen(false)}>Lender/Referrer Login</Link>
            <Link href="/apply" className="w-full rounded-md bg-slate-900 px-3 py-2 text-center text-sm font-semibold text-white" onClick={() => setMobileOpen(false)}>Apply Now</Link>
          </div>
        </div>
      )}
    </header>
  );
}
