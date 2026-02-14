import { Link } from "wouter";

export default function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-black/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="Boreal Financial" className="h-8" />
          <span className="text-lg font-semibold text-white">Boreal Financial</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-white md:flex">
          <Link href="/products">Products</Link>
          <Link href="/industries">Industries</Link>
          <Link href="/credit-readiness">Capital Readiness</Link>
          <a href="https://client.boreal.financial" className="rounded bg-blue-600 px-4 py-2 text-white">
            Apply Now
          </a>
          <Link href="/contact" className="rounded border px-4 py-2">
            Contact Us
          </Link>
        </nav>

        <div className="flex gap-2 md:hidden">
          <a href="https://client.boreal.financial" className="rounded bg-blue-600 px-3 py-1 text-sm text-white">
            Apply
          </a>
          <Link href="/contact" className="rounded border px-3 py-1 text-sm text-white">
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}
