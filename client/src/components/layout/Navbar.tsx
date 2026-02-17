import { useState } from "react";
import { Link } from "wouter";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#0c1a2b]">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-4">
          <img
            src="/images/header_white_transparent.png"
            alt="Boreal Financial"
            className="h-14 w-auto object-contain"
          />
          <span className="text-xl font-semibold tracking-wide text-white">Boreal Financial</span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-white/80 md:flex">
          <Link href="/products">Products</Link>
          <Link href="/industries">Industries</Link>
          <Link href="/credit-readiness">Credit Readiness</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/apply" className="rounded-full bg-blue-600 px-5 py-2 text-white hover:bg-blue-500">
            Apply Now
          </Link>
        </nav>

        <button onClick={() => setOpen(!open)} className="text-white md:hidden" aria-label="Toggle menu">
          ☰
        </button>
      </div>

      {open && (
        <div className="absolute left-0 top-full w-full space-y-4 bg-[#0c1a2b] px-6 pb-6 pt-4 text-white md:hidden">
          <Link href="/products" onClick={() => setOpen(false)}>
            Products
          </Link>
          <Link href="/industries" onClick={() => setOpen(false)}>
            Industries
          </Link>
          <Link href="/credit-readiness" onClick={() => setOpen(false)}>
            Credit Readiness
          </Link>
          <Link href="/contact" onClick={() => setOpen(false)}>
            Contact
          </Link>
          <Link
            href="/apply"
            className="block rounded-full bg-blue-600 py-3 text-center font-medium text-white"
            onClick={() => setOpen(false)}
          >
            Apply Now
          </Link>
        </div>
      )}
    </header>
  );
}
