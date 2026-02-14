import { useState } from "react";
import { Link } from "wouter";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-black text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-3">
          <img src="/logo.png" className="h-8 md:h-10" alt="Boreal Financial" />
          <span className="text-lg font-semibold tracking-wide text-white">Boreal Financial</span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          <Link href="/industries">Industries</Link>
          <Link href="/products">Products</Link>
          <Link href="/credit-readiness">Credit Readiness</Link>
          <Link href="/contact" className="rounded border border-white px-4 py-2">
            Contact Us
          </Link>
          <a href="https://client.boreal.financial" className="rounded bg-white px-6 py-2 text-black transition hover:opacity-90">
            Apply Now
          </a>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <button onClick={() => setOpen(!open)} className="text-2xl" aria-label="Toggle navigation menu">
            ☰
          </button>
          <a href="https://client.boreal.financial" className="rounded bg-white px-4 py-2 text-sm text-black">
            Apply
          </a>
        </div>
      </div>

      {open && (
        <div className="flex flex-col gap-3 px-4 pb-4 md:hidden">
          <Link href="/industries" onClick={() => setOpen(false)}>
            Industries
          </Link>
          <Link href="/products" onClick={() => setOpen(false)}>
            Products
          </Link>
          <Link href="/credit-readiness" onClick={() => setOpen(false)}>
            Credit Readiness
          </Link>
          <Link href="/contact" onClick={() => setOpen(false)}>
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
}
