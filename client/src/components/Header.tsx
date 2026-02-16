import { Link } from "wouter";
import { APPLY_URL } from "@/config/site";
import { buildApplyUrl, getReadinessSessionToken } from "@/utils/session";

export default function Header() {
  const readinessSessionToken = getReadinessSessionToken();
  const applyHref = buildApplyUrl(APPLY_URL, readinessSessionToken);

  return (
    <header className="border-b border-white/10 bg-[#071a2f]">
      <div className="flex items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center">
          <img src="/images/Header_white.png" alt="Boreal Financial" className="h-14 md:h-20 w-auto object-contain" />
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
