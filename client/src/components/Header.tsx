import { useState } from "react";
import { Link } from "wouter";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#071226]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <img src="/logo.svg" alt="Boreal Financial" className="h-8 w-auto" />
          <span className="text-lg font-semibold text-white">Boreal Financial</span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-white/80 md:flex">
          <Link href="/products">Products</Link>
          <Link href="/industries">Industries</Link>
          <Link href="/capital-readiness">Capital Readiness</Link>
          <Link href="/compare">Product Comparison</Link>
          <Link href="/contact">Contact</Link>

          <Link
            href="/apply"
            className="rounded-full bg-blue-600 px-6 py-2 font-medium text-white transition hover:bg-blue-700"
          >
            Apply Now
          </Link>
        </nav>

        <button className="text-white md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          ☰
        </button>
      </div>

      {open && (
        <div className="space-y-4 bg-[#071226] px-6 pb-6 text-white md:hidden">
          <Link href="/products" onClick={() => setOpen(false)}>
            Products
          </Link>
          <Link href="/industries" onClick={() => setOpen(false)}>
            Industries
          </Link>
          <Link href="/capital-readiness" onClick={() => setOpen(false)}>
            Capital Readiness
          </Link>
          <Link href="/compare" onClick={() => setOpen(false)}>
            Product Comparison
          </Link>
          <Link href="/contact" onClick={() => setOpen(false)}>
            Contact
          </Link>

          <Link
            href="/apply"
            className="mt-4 block rounded-full bg-blue-600 py-3 text-center"
            onClick={() => setOpen(false)}
          >
            Apply Now
          </Link>
        </div>
      )}
    </header>
  );
}
