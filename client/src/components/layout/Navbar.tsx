import { useState } from "react";
import { Link } from "wouter";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0b1220] border-b border-white/10">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-4">
          <img
            src="/images/header_white_transparent.png"
            alt="Boreal Financial"
            className="h-20 w-auto object-contain"
          />
          <span className="text-2xl font-semibold tracking-wide text-white">
            Boreal Financial
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-white/80">
          <Link href="/products" className="hover:text-white">Products</Link>
          <Link href="/industries" className="hover:text-white">Industries</Link>
          <Link href="/credit-readiness" className="hover:text-white">Credit Readiness</Link>
          <Link href="/contact" className="hover:text-white">Contact</Link>
          <Link
            href="/apply"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition"
          >
            Apply Now
          </Link>
        </nav>
      </div>
    </header>
  );
}
