import { Link } from "wouter";
import { APPLY_URL } from "@/config/site";
import { buildApplyUrl, getReadinessSessionToken } from "@/utils/session";

export default function Header() {
  const readinessSessionToken = getReadinessSessionToken();
  const applyHref = buildApplyUrl(APPLY_URL, readinessSessionToken);

  return (
    <header className="border-b border-white/10 bg-[#071a2f] px-5 py-4 md:px-8">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-2">
          <img
            src="/images/header_white_transparent.png"
            alt="Boreal Financial"
            className="h-14 w-auto"
          />
          <span className="text-lg font-semibold tracking-wide text-white md:text-xl">Boreal Financial</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-white md:flex">
          <Link href="/products">Products</Link>
          <Link href="/industries">Industries</Link>
          <Link href="/credit-readiness">Credit Readiness</Link>
          <Link href="/contact">Contact</Link>
          <a href={applyHref} className="rounded-full bg-blue-600 px-5 py-2 font-medium text-white">Apply Now</a>
        </nav>
      </div>
    </header>
  );
}
