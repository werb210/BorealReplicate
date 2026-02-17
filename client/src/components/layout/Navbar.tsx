import { useState } from "react";
import { Link } from "wouter";
import headerLogo from "/images/Header_white.png";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#0b1220] text-white">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center">
          <img src={headerLogo} alt="Boreal Financial" className="h-10 w-auto object-contain md:h-12" />
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-white/80 md:flex">
          <Link href="/products" className="transition hover:text-white">
            Products
          </Link>
          <Link href="/industries" className="transition hover:text-white">
            Industries
          </Link>
          <Link href="/credit-readiness" className="transition hover:text-white">
            Credit Readiness
          </Link>
          <Link href="/contact" className="transition hover:text-white">
            Contact
          </Link>
          <Link
            href="/apply"
            className="rounded-full bg-blue-600 px-5 py-2 font-medium text-white transition hover:bg-blue-700"
          >
            Apply Now
          </Link>
        </nav>

        <button onClick={() => setOpen(!open)} className="text-white md:hidden" aria-label="Toggle menu">
          ☰
        </button>
      </div>

      {open && (
        <div className="absolute left-0 top-full w-full space-y-4 bg-[#0b1220] px-6 pb-6 pt-4 text-white md:hidden">
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
