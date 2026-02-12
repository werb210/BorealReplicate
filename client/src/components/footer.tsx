import { useState } from "react";
import ContactModal from "@/components/ContactModal";
import CapitalReadinessModal from "@/components/CapitalReadinessModal";
import ProductComparisonModal from "@/components/ProductComparisonModal";

export function Footer() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      <footer className="mt-16 bg-slate-950 text-slate-200">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 sm:px-6 lg:px-8 md:grid-cols-3">
          <div>
            <h2 className="text-lg font-semibold">Boreal Financial</h2>
            <p className="mt-2 text-sm text-slate-400">
              Structured lending marketplace helping businesses across Canada and the United States.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide">Explore</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li><a href="/how-it-works">How It Works</a></li>
              <li><a href="/products/term-loans">Products</a></li>
              <li><a href="/industries/construction">Industries</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide">Start</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li><a href="/apply">Start Application</a></li>
              <li><button className="text-left" onClick={() => setContactOpen(true)}>Contact Us</button></li>
              <li><a href="/staff-login">Staff Login</a></li>
              <li><a href="/lender-login">Lender Login</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-2 flex justify-center gap-6 px-4 pb-10">
          <CapitalReadinessModal />
          <ProductComparisonModal />
        </div>
      </footer>

      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}
