import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "wouter";

const navItems = [
  { href: "/industries", label: "Industries" },
  { href: "/products", label: "Products" },
  { href: "/capital-readiness", label: "Capital Readiness" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/95 text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img
            src="/images/Header.png"
            alt="Boreal Financial"
            className="h-10 w-auto object-contain"
          />
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
          <Link
            href="/apply"
            className="ml-6 whitespace-nowrap rounded-full bg-blue-600 px-6 py-2 font-medium text-white hover:bg-blue-700"
          >
            Apply Now
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <Link href="/contact" className="rounded border border-white/40 px-3 py-2 text-xs font-medium">
            Contact
          </Link>
          <Link href="/apply" className="rounded bg-white px-3 py-2 text-xs font-semibold text-black">
            Apply Now
          </Link>
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
          <Link href="/apply" className="rounded px-2 py-2 text-sm text-white/90 hover:bg-white/10" onClick={() => setOpen(false)}>
            Apply Now
          </Link>
          <Link href="/contact" className="rounded px-2 py-2 text-sm text-white/90 hover:bg-white/10" onClick={() => setOpen(false)}>
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
