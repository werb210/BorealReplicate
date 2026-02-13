import { useState } from "react";
import { Link } from "wouter";
import { APPLY_URL } from "@/config/site";
import { industries } from "@/data/industries";

export function Navbar() {
  const [openIndustries, setOpenIndustries] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#020817]/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center gap-2">
          <img src="/images/logo.png" alt="Boreal" className="h-14 w-auto" />
        </Link>

        <nav className="relative flex items-center gap-6 text-sm font-medium text-slate-100">
          <Link href="/products" className="hover:text-blue-300">Products</Link>
          <div className="relative" onMouseEnter={() => setOpenIndustries(true)} onMouseLeave={() => setOpenIndustries(false)}>
            <Link href="/industries" className="hover:text-blue-300">Industries</Link>
            {openIndustries && (
              <div className="absolute right-0 top-full mt-2 w-64 rounded-xl bg-[#0a1731] p-2 ring-1 ring-white/20">
                {industries.map((industry) => (
                  <Link key={industry.slug} href={`/industries/${industry.slug}`} className="block rounded-md px-3 py-2 hover:bg-white/10">
                    {industry.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link href="/capital-readiness" className="hover:text-blue-300">Capital Readiness</Link>
          <Link href="/product-comparison" className="hover:text-blue-300">Product Comparison</Link>
          <Link href="/contact" className="hover:text-blue-300">Contact</Link>
          <a href={APPLY_URL} className="rounded-full bg-blue-600 px-5 py-2.5 text-white hover:bg-blue-500">Apply Now</a>
        </nav>
      </div>
    </header>
  );
}
