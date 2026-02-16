import { Link } from "wouter";

export function Navbar() {
  return (
    <header className="flex items-center justify-between bg-black px-6 py-4 text-white">
      <div className="flex items-center gap-3">
        <img
          src="/images/Header_white.png"
          alt="Boreal Financial"
          className="h-10 w-auto object-contain md:h-12"
        />
      </div>

      <div className="hidden items-center gap-6 md:flex">
        <Link href="/products">Products</Link>
        <Link href="/industries">Industries</Link>
        <Link href="/credit-readiness">Credit Readiness</Link>
        <Link
          href="/apply"
          className="ml-6 whitespace-nowrap rounded-full bg-blue-600 px-6 py-2 font-medium text-white hover:bg-blue-700"
        >
          Apply Now
        </Link>
      </div>

      <div className="md:hidden">
        <a
          href="https://client.boreal.financial"
          className="rounded bg-white px-4 py-2 text-sm text-black"
        >
          Apply
        </a>
      </div>
    </header>
  );
}
