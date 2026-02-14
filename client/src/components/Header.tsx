import { Link } from "wouter";

export default function Header() {
  return (
    <header className="bg-black px-6 py-4 text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <img src="/logo.png" className="h-10" alt="Boreal Financial" />
          <span className="text-xl font-semibold">Boreal Financial</span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          <Link href="/products">Products</Link>
          <Link href="/industries">Industries</Link>
          <Link href="/capital-readiness">Capital Readiness</Link>
          <a
            href="https://client.boreal.financial"
            className="rounded bg-white px-5 py-2 font-semibold text-black"
          >
            Apply Now
          </a>
        </div>

        <div className="md:hidden">
          <a
            href="https://client.boreal.financial"
            className="rounded bg-white px-4 py-2 text-sm text-black"
          >
            Apply
          </a>
        </div>
      </div>
    </header>
  );
}
