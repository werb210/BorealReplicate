import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "wouter";
import { APPLY_URL } from "@/config/site";
import { buildApplyUrl, getReadinessSessionToken } from "@/utils/session";
import { industries } from "@/data/industries";

const navItems = [
  { href: "/industries", label: "Industries" },
  { href: "/products", label: "Products" },
  { href: "/credit-readiness", label: "Credit Readiness" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const readinessSessionToken = getReadinessSessionToken();
  const applyLabel = readinessSessionToken ? "Continue Application" : "Apply Now";
  const applyHref = buildApplyUrl(APPLY_URL, readinessSessionToken);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/95 text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img
            src="/images/Header.png"
            alt="Boreal Financial"
            className="h-10 w-auto object-contain"
          />
          <span className="text-sm font-semibold tracking-wide text-white md:text-base">Boreal Financial</span>
        </Link>

        <div className="hidden items-center gap-4 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="px-2 py-1 text-sm text-white/90 transition hover:text-white">
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="rounded border border-white/40 px-4 py-2 text-sm">
            Contact
          </Link>
          <a href={applyHref} className="ml-6 whitespace-nowrap rounded-full bg-blue-600 px-6 py-2 font-medium text-white hover:bg-blue-700">{applyLabel}</a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <Link href="/contact" className="rounded border border-white/40 px-3 py-2 text-xs font-medium">
            Contact
          </Link>
          <a href={applyHref} className="rounded bg-white px-3 py-2 text-xs font-semibold text-black">{applyLabel}</a>
          <button
            onClick={() => setOpen((value) => !value)}
            className="rounded border border-white/30 p-2"
            aria-expanded={open}
            aria-label="Toggle navigation menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <div className={`overflow-hidden border-t border-white/10 bg-[#040b1a] transition-all duration-300 lg:hidden ${open ? "max-h-[85vh]" : "max-h-0"}`}>
        <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="rounded px-2 py-2 text-sm text-white/90 hover:bg-white/10" onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
          <a href={applyHref} className="rounded px-2 py-2 text-sm text-white/90 hover:bg-white/10" onClick={() => setOpen(false)}>{applyLabel}</a>
          <Link href="/contact" className="rounded px-2 py-2 text-sm text-white/90 hover:bg-white/10" onClick={() => setOpen(false)}>
            Contact
          </Link>
          <div className="my-1 border-t border-white/10 pt-2">
            <p className="px-2 py-1 text-xs uppercase tracking-[0.2em] text-slate-400">Industries</p>
            <div className="grid grid-cols-2 gap-1">
              {industries.map((industry) => (
                <Link key={`mobile-${industry.slug}`} href={`/industries/${industry.slug}`} className="rounded px-2 py-2 text-sm text-white/90 hover:bg-white/10" onClick={() => setOpen(false)}>
                  {industry.name}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
