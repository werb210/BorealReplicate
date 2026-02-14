import { useState } from "react";
import { Link } from "wouter";
import { APPLY_URL } from "@/config/site";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 flex w-full items-center justify-between bg-black px-4 py-3 text-white md:px-8">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <img src="/logo.png" className="h-8 object-contain md:h-10" alt="Boreal Financial" />
          <span className="text-lg font-semibold tracking-wide text-white md:text-xl">Boreal Financial</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-white md:flex">
          <Link href="/products">Products</Link>
          <Link href="/industries">Industries</Link>
          <Link href="/credit-readiness">Credit Readiness</Link>
          <a href={APPLY_URL} className="rounded bg-white px-4 py-2 font-semibold text-black">
            Apply Now
          </a>
        </nav>

        <button onClick={() => setOpen(!open)} className="text-white md:hidden" aria-label="Toggle menu">
          ☰
        </button>
      </div>

      {open && (
        <div className="absolute left-0 top-full w-full space-y-4 bg-black px-4 pb-6 pt-4 text-white md:hidden">
          <Link href="/products" onClick={() => setOpen(false)}>
            Products
          </Link>
          <Link href="/industries" onClick={() => setOpen(false)}>
            Industries
          </Link>
          <Link href="/credit-readiness" onClick={() => setOpen(false)}>
            Credit Readiness
          </Link>
          <a
            href={APPLY_URL}
            className="block rounded bg-white py-3 text-center font-semibold text-black"
            onClick={() => setOpen(false)}
          >
            Apply Now
          </a>
        </div>
      )}
    </header>
  );
}
