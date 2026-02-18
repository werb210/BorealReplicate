import { Link } from "wouter";
import logo from "../../public/images/Header.png";
import { APPLY_URL } from "@/config/site";
import { buildApplyUrl, getReadinessSessionToken } from "@/utils/session";

export default function Header() {
  const readinessSessionToken = getReadinessSessionToken();
  const applyHref = buildApplyUrl(APPLY_URL, readinessSessionToken);

  return (
    <header className="w-full bg-[#0B1320] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <img
            src={logo}
            alt="Boreal Financial"
            className="h-12 w-auto object-contain"
          />
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
