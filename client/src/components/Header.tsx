import { Link } from "wouter";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-black text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-3">
          <img src="/logo.svg" alt="Boreal Financial" className="h-8 w-auto" />
          <span className="text-lg font-semibold tracking-wide">Boreal Financial</span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm md:flex">
          <Link href="/products">Products</Link>
          <Link href="/industries">Industries</Link>
          <Link href="/capital-readiness">Credit Readiness</Link>
          <a href="https://client.boreal.financial" className="rounded bg-white px-4 py-2 text-black">
            Apply Now
          </a>
          <Link href="/contact" className="rounded border border-white px-4 py-2">
            Contact
          </Link>
        </nav>

        <div className="flex gap-3 md:hidden">
          <a href="https://client.boreal.financial" className="rounded bg-white px-3 py-2 text-xs text-black">
            Apply
          </a>
          <Link href="/contact" className="rounded border border-white px-3 py-2 text-xs">
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}
