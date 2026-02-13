import { useState } from "react";
import { Link } from "wouter";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#050B1A]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold text-white">
          Boreal
        </Link>

        <nav className="hidden items-center gap-8 text-white md:flex">
          <Link href="/products">Products</Link>
          <Link href="/industries">Industries</Link>
          <Link href="/capital-readiness">Capital Readiness</Link>
          <Link href="/product-comparison">Product Comparison</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/contact" className="rounded-full bg-blue-600 px-5 py-2 text-white">
            Apply Now
          </Link>
        </nav>

        <button className="text-white md:hidden" onClick={() => setOpen((prev) => !prev)} aria-label="Toggle menu">
          ☰
        </button>
      </div>

      {open && (
        <div className="flex flex-col gap-4 border-t border-white/10 bg-[#050B1A] px-6 pb-6 text-white md:hidden">
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
            href="/contact"
            onClick={() => setOpen(false)}
            className="rounded-full bg-blue-600 py-2 text-center"
          >
            Apply Now
          </Link>
        </div>
      )}
    </header>
  );
}
