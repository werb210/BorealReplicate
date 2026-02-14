import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "wouter";
import { APPLY_URL } from "@/config/site";

const navItems = [
  { href: "/industries", label: "Industries" },
  { href: "/products", label: "Products" },
  { href: "/capital-readiness", label: "Capital Readiness" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/95 text-white backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src="/logo.png" className="h-8 md:h-10" alt="Boreal Financial" />
          <span className="text-base font-semibold tracking-wide text-white md:text-lg">Boreal Financial</span>
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
          <a href={APPLY_URL} className="ml-2 rounded bg-white px-6 py-2 text-sm font-semibold text-black transition hover:opacity-90">
            Apply Now
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <Link href="/contact" className="rounded border border-white/40 px-3 py-2 text-xs font-medium">
            Contact
          </Link>
          <a href={APPLY_URL} className="rounded bg-white px-3 py-2 text-xs font-semibold text-black">
            Apply Now
          </a>
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

      <div className={`overflow-hidden border-t border-white/10 bg-[#040b1a] transition-all duration-300 lg:hidden ${open ? "max-h-96" : "max-h-0"}`}>
        <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="rounded px-2 py-2 text-sm text-white/90 hover:bg-white/10" onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
          <a href={APPLY_URL} className="rounded px-2 py-2 text-sm text-white/90 hover:bg-white/10" onClick={() => setOpen(false)}>
            Apply Now
          </a>
          <Link href="/contact" className="rounded px-2 py-2 text-sm text-white/90 hover:bg-white/10" onClick={() => setOpen(false)}>
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
