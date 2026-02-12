import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "wouter";
import { track } from "@/utils/track";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  const toggleMenu = (menu: string) => {
    setOpenMenu((current) => (current === menu ? null : menu));
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (!navRef.current?.contains(event.target as Node)) {
        setOpenMenu(null);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  return (
    <header className="nav sticky top-0 z-50 border-b border-slate-200 bg-white" role="banner" ref={navRef}>
      <nav className="navbar container" aria-label="Main navigation">
        <div className="nav-left">
          <a href="/" aria-label="Boreal Financial home">
            <img src="/images/logo.png" className="logo" alt="Boreal Financial" loading="lazy" style={{ height: 40, objectFit: "cover" }} />
          </a>
          <a href="/apply" className="apply-btn" onClick={() => track("apply_clicked", { source: "navbar" })}>Apply Now</a>
        </div>

        <button
          type="button"
          className="mobile-toggle rounded p-2"
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <ul className={`nav-right ${mobileOpen ? "open" : ""}`}>
          <li className="nav-dropdown dropdown">
            <button type="button" onClick={() => toggleMenu("products")}>Products</button>
            <ul className={`nav-dropdown-menu dropdown-menu ${openMenu === "products" ? "open" : ""}`}>
              <li><Link href="/products/term-loans">Term Loans</Link></li>
              <li><Link href="/products/line-of-credit">Line of Credit</Link></li>
              <li><Link href="/products/factoring">Factoring</Link></li>
              <li><Link href="/products/equipment-financing">Equipment Financing</Link></li>
              <li><Link href="/products/purchase-order-financing">Purchase Order Financing</Link></li>
            </ul>
          </li>

          <li className="nav-dropdown dropdown">
            <button type="button" onClick={() => toggleMenu("industries")}>Industries</button>
            <ul className={`nav-dropdown-menu dropdown-menu ${openMenu === "industries" ? "open" : ""}`}>
              <li><Link href="/construction">Construction</Link></li>
              <li><Link href="/manufacturing">Manufacturing</Link></li>
              <li><Link href="/logistics">Logistics</Link></li>
            </ul>
          </li>

          <li>
            <a href="/portal/login" className="login-btn">
              Lender / Referrer Login
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
