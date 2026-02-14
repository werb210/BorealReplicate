import { useState } from "react";
import { Link } from "wouter";

const APPLY_PATH = "/credit-readiness";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-black text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-3">
          <img src="/logo.svg" alt="Boreal Financial" className="h-8 w-auto sm:h-10" />
          <span className="text-lg font-semibold sm:text-xl">Boreal Financial</span>
        </Link>

        <button className="sm:hidden" onClick={() => setOpen(!open)} aria-label="Toggle navigation menu">
          ☰
        </button>

        <nav className="hidden items-center gap-6 text-sm sm:flex">
          <Link href="/industries">Industries</Link>
          <Link href="/products">Products</Link>
          <Link href="/credit-readiness">Credit Check</Link>
          <Link href={APPLY_PATH} className="rounded bg-white px-4 py-2 font-medium text-black">
            Apply Now
          </Link>
        </nav>
      </div>

      {open && (
        <div className="space-y-3 px-4 pb-4 text-sm sm:hidden">
          <Link href="/industries" onClick={() => setOpen(false)}>
            Industries
          </Link>
          <Link href="/products" onClick={() => setOpen(false)}>
            Products
          </Link>
          <Link href="/credit-readiness" onClick={() => setOpen(false)}>
            Credit Check
          </Link>
          <Link
            href={APPLY_PATH}
            className="block rounded bg-white px-4 py-2 text-center text-black"
            onClick={() => setOpen(false)}
          >
            Apply Now
          </Link>
        </div>
      )}
    </header>
  );
}
