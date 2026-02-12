import { useState } from "react";
import ContactModal from "@/components/ContactModal";
import CapitalReadinessModal from "@/components/CapitalReadinessModal";
import ProductComparisonModal from "@/components/ProductComparisonModal";

export function Footer() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      <footer className="mt-20 bg-gray-100">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 text-sm md:grid-cols-4">
          <div>
            <h4 className="mb-3 font-semibold">About</h4>
            <p>
              Boreal Financial is a strategic capital advisory + funding marketplace serving Canadian and U.S.
              businesses.
            </p>
          </div>

          <div>
            <h4 className="mb-3 font-semibold">Products</h4>
            <p>Term Loans</p>
            <p>Line of Credit</p>
            <p>Factoring</p>
            <p>Equipment Financing</p>
            <p>Purchase Order Financing</p>
          </div>

          <div>
            <h4 className="mb-3 font-semibold">Industries</h4>
            <p>Construction</p>
            <p>Manufacturing</p>
            <p>Logistics</p>
          </div>

          <div>
            <h4 className="mb-3 font-semibold">Legal</h4>
            <p>Privacy</p>
            <p>Terms</p>
            <button className="mt-2 text-left underline" onClick={() => setContactOpen(true)}>
              Contact Us
            </button>
          </div>
        </div>

        <div className="mt-6 flex justify-center gap-6 pb-10">
          <CapitalReadinessModal />
          <ProductComparisonModal />
        </div>
      </footer>

      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}
