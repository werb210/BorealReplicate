import { useState } from "react";
import { Link } from "wouter";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-black text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.png" className="h-8" alt="Boreal Financial" />
          <span className="text-lg font-semibold">Boreal Financial</span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          <Link href="/industries">Industries</Link>
          <Link href="/products">Products</Link>
          <Link href="/credit-readiness">Credit Readiness</Link>
          <a href="https://client.boreal.financial" className="rounded bg-white px-4 py-2 text-black">
            Apply Now
          </a>
          <Link href="/contact" className="rounded border border-white px-4 py-2">
            Contact Us
          </Link>
        </div>

        <button onClick={() => setOpen((value) => !value)} className="text-2xl md:hidden" aria-label="Toggle navigation menu">
          ☰
        </button>
      </div>

      {open && (
        <div className="flex flex-col gap-3 px-4 pb-4 md:hidden">
          <Link href="/industries" onClick={() => setOpen(false)}>Industries</Link>
          <Link href="/products" onClick={() => setOpen(false)}>Products</Link>
          <Link href="/credit-readiness" onClick={() => setOpen(false)}>Credit Readiness</Link>
          <a href="https://client.boreal.financial" className="rounded bg-white px-4 py-2 text-center text-black">
            Apply Now
          </a>
          <Link href="/contact" onClick={() => setOpen(false)}>Contact Us</Link>
        </div>
      )}
    </header>
  );
}
