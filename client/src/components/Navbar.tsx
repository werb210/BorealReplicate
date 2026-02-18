import { Link } from "wouter";
import { APPLY_URL } from "@/config/site";

export function Navbar() {
  return (
    <header className="w-full border-b border-white/5 bg-[#020C1C]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/images/header_white_transparent.png"
            alt="Boreal Financial"
            className="w-auto object-contain"
            style={{ height: "54px" }}
          />
          <span className="text-xl font-semibold tracking-wide text-white">Boreal Financial</span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-white/80 md:flex">
          <Link href="/products">Products</Link>
          <Link href="/industries">Industries</Link>
          <Link href="/credit-readiness">Credit Readiness</Link>
          <Link href="/contact">Contact</Link>

          <a
            href={APPLY_URL}
            className="ml-4 rounded-full bg-blue-600 px-6 py-2 font-medium text-white transition hover:bg-blue-700"
          >
            Apply Now
          </a>
        </nav>
      </div>
    </header>
  );
}
