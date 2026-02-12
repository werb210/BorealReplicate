import { useState } from "react";
import Modal from "@/components/ui/Modal";
import ContactModal from "@/features/contact/ContactModal";
import ReadinessModal from "@/features/readiness/ReadinessModal";
import ComparisonModal from "@/features/comparison/ComparisonModal";

export function Footer() {
  const [contactOpen, setContactOpen] = useState(false);
  const [scoreOpen, setScoreOpen] = useState(false);
  const [comparisonOpen, setComparisonOpen] = useState(false);

  return (
    <>
      <footer className="footer border-t border-slate-200 bg-slate-50 py-10">
        <div className="container footer-grid">
          <div>
            <h4>Boreal Financial</h4>
            <p className="text-sm text-slate-600">Structured non-bank financing for Canadian businesses.</p>
          </div>

          <div>
            <h4>Explore</h4>
            <a href="/how-it-works">How it Works</a>
            <a href="/apply">Apply</a>
          </div>

          <div>
            <h4>Tools</h4>
            <button onClick={() => setScoreOpen(true)}>Capital Readiness Score</button>
            <button onClick={() => setComparisonOpen(true)}>Product Comparison</button>
            <button onClick={() => setContactOpen(true)}>Contact Us</button>
          </div>

          <div>
            <h4>Legal</h4>
            <a href="/privacy">Privacy</a>
            <a href="/terms">Terms</a>
          </div>
        </div>
      </footer>

      <Modal open={contactOpen} onClose={() => setContactOpen(false)}>
        <ContactModal />
      </Modal>
      <Modal open={scoreOpen} onClose={() => setScoreOpen(false)}>
        <ReadinessModal />
      </Modal>
      <Modal open={comparisonOpen} onClose={() => setComparisonOpen(false)}>
        <ComparisonModal />
      </Modal>
    </>
  );
}
