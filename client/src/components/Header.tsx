import { Link } from "wouter";
import { APPLY_URL } from "@/config/site";
import { buildApplyUrl, getReadinessSessionToken } from "@/utils/session";

export default function Header() {
  const readinessSessionToken = getReadinessSessionToken();
  const applyLabel = readinessSessionToken ? "Continue Application" : "Apply Now";
  const applyHref = buildApplyUrl(APPLY_URL, readinessSessionToken);

  return (
    <header className="bg-[#071a2f] h-[120px] flex items-center px-8">
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto gap-6">
        <Link href="/" className="flex items-center">
          <img
            src="/images/header_white_transparent.png"
            alt="Boreal Financial"
            className="h-20 w-auto"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-white text-sm">
          <Link href="/products">Products</Link>
          <Link href="/industries">Industries</Link>
          <Link href="/credit-readiness">Credit Readiness</Link>
          <Link href="/contact" className="border px-4 py-2 rounded">
            Contact
          </Link>
          <a
            href={applyHref}
            className="bg-blue-600 px-6 py-2 rounded-full font-medium"
          >
            {applyLabel}
          </a>
        </nav>
      </div>
    </header>
  );
}
