import { useState } from "react";
import { Link } from "wouter";
import logo from "/logo.svg";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 flex w-full items-center justify-between bg-black px-4 py-3 text-white md:px-8">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <img src={logo} alt="Boreal Financial" className="h-16 w-auto object-contain md:h-20" />
        </Link>

        <nav className="w-full py-4 px-6 hidden items-center justify-between gap-6 text-sm font-medium text-white md:flex">
          <Link href="/products">Products</Link>
          <Link href="/industries">Industries</Link>
          <Link href="/credit-readiness">Credit Readiness</Link>
          <Link href="/apply" className="ml-6 whitespace-nowrap rounded-full bg-blue-600 px-6 py-2 font-medium text-white hover:bg-blue-700">
            Apply Now
          </Link>
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
          <Link
            href="/apply"
            className="block rounded bg-white py-3 text-center font-semibold text-black"
            onClick={() => setOpen(false)}
          >
            Apply Now
          </Link>
        </div>
      )}
    </header>
  );
}
