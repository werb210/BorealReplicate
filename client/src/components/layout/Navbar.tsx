import { useState } from "react";
import { Link } from "wouter";
import logo from "/logo.svg";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#07122A]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <img src={logo} className="h-7 w-7" alt="Boreal Financial logo" />
          <span className="text-lg font-semibold text-white">Boreal Financial</span>
        </Link>

        <nav className="hidden items-center gap-8 text-white md:flex">
          <Link href="/products">Products</Link>
          <Link href="/industries">Industries</Link>
          <Link href="/capital-readiness">Capital Readiness</Link>
          <Link href="/product-comparison">Product Comparison</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/apply" className="rounded-full bg-blue-600 px-6 py-2 text-white transition hover:bg-blue-500">
            Apply Now
          </Link>
        </nav>

        <button onClick={() => setOpen(!open)} className="text-white md:hidden" aria-label="Toggle menu">
          ☰
        </button>
      </div>

      {open && (
        <div className="space-y-4 bg-[#07122A] px-6 pb-6 text-white md:hidden">
          <Link href="/products" onClick={() => setOpen(false)}>
            Products
          </Link>
          <Link href="/industries" onClick={() => setOpen(false)}>
            Industries
          </Link>
          <Link href="/capital-readiness" onClick={() => setOpen(false)}>
            Capital Readiness
          </Link>
          <Link href="/product-comparison" onClick={() => setOpen(false)}>
            Product Comparison
          </Link>
          <Link href="/contact" onClick={() => setOpen(false)}>
            Contact
          </Link>
          <Link
            href="/apply"
            className="block rounded-full bg-blue-600 py-3 text-center"
            onClick={() => setOpen(false)}
          >
            Apply Now
          </Link>
        </div>
      )}
    </header>
  );
}
