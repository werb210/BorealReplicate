import { useState } from "react";
import { Link } from "wouter";
import { APPLY_URL } from "@/config/site";

const productLinks = [
  { label: "Term Loans", path: "/products/term-loans" },
  { label: "Line of Credit", path: "/products/line-of-credit" },
  { label: "Factoring", path: "/products/factoring" },
  { label: "Equipment Financing", path: "/products/equipment-financing" },
  { label: "Purchase Order Financing", path: "/products/purchase-order-financing" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center">
          <img src="/images/logo.png" alt="Boreal" className="h-14 w-auto" />
        </Link>

        <nav className="relative flex items-center gap-8 text-sm font-medium">
          <div onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} className="relative">
            <button className="hover:text-blue-600">Products</button>
            {open && (
              <div className="absolute right-0 top-full w-60 rounded-md border bg-white py-2 shadow-lg">
                {productLinks.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={() => setOpen(false)}
                    className="block px-4 py-2 hover:bg-gray-50"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/industries">Industries</Link>
          <Link href="/lender-login">Lender / Referrer Login</Link>

          <a href={APPLY_URL} className="rounded-md bg-blue-600 px-5 py-2 text-white">
            Apply Now
          </a>
        </nav>
      </div>
    </header>
  );
}
