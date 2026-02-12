import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="nav sticky top-0 z-50 border-b border-slate-200 bg-white" role="banner">
      <nav className="navbar container" aria-label="Main navigation">
        <div className="nav-left">
          <a href="/" aria-label="Boreal Financial home">
            <img src="/images/logo.png" className="logo" alt="Boreal Financial" style={{ height: 42 }} />
          </a>
          <a href="/apply" className="apply-btn">Apply Now</a>
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

        <div className={`nav-right ${mobileOpen ? "open" : ""}`}>
          <div className="dropdown">
            <button type="button">Products</button>
            <div className="dropdown-content">
              <a href="/products/term-loans">Term Loans</a>
              <a href="/products/line-of-credit">Line of Credit</a>
              <a href="/products/factoring">Factoring</a>
              <a href="/products/equipment-financing">Equipment Financing</a>
              <a href="/products/purchase-order">Purchase Order Financing</a>
            </div>
          </div>

          <div className="dropdown">
            <button type="button">Industries</button>
            <div className="dropdown-content">
              <a href="/industries/construction">Construction</a>
              <a href="/industries/manufacturing">Manufacturing</a>
              <a href="/industries/logistics">Logistics</a>
            </div>
          </div>

          <a href="/portal/login" className="login-btn">
            Lender / Referrer Login
          </a>
        </div>
      </nav>
    </header>
  );
}
