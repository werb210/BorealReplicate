import { useState } from "react";
import ContactModal from "@/components/ContactModal";
import CapitalReadinessModal from "@/components/CapitalReadinessModal";
import ProductComparisonModal from "@/components/ProductComparisonModal";

export function Footer() {
  const [contactOpen, setContactOpen] = useState(false);
  const [scoreOpen, setScoreOpen] = useState(false);
  const [comparisonOpen, setComparisonOpen] = useState(false);

  return (
    <>
      <footer className="footer">
        <div className="footer-grid container">
          <div>
            <h4>About</h4>
            <a href="/about">Who We Are</a>
            <a href="/apply">Apply</a>
          </div>

          <div>
            <h4>Products</h4>
            <a href="/products/term-loans">Term Loans</a>
            <a href="/products/line-of-credit">Line of Credit</a>
          </div>

          <div>
            <h4>Legal</h4>
            <a href="/privacy">Privacy</a>
            <a href="/terms">Terms</a>
          </div>

          <div className="footer-actions">
            <button onClick={() => setContactOpen(true)}>Contact Us</button>
            <button onClick={() => setScoreOpen(true)}>Credit Readiness Score</button>
            <button onClick={() => setComparisonOpen(true)}>Compare Financing Options</button>
          </div>
        </div>
      </footer>

      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
      <CapitalReadinessModal open={scoreOpen} onClose={() => setScoreOpen(false)} />
      <ProductComparisonModal open={comparisonOpen} onClose={() => setComparisonOpen(false)} />
    </>
  );
}
