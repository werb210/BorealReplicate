import { Link } from "wouter";
import { APPLY_URL } from "@/config/site";

export default function Footer() {
  return (
    <footer className="bg-[#071a2f] text-gray-300 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-8">
        <div>
          <h3 className="text-white font-semibold mb-4">Boreal Financial</h3>
          <p>Structured non-bank financing for Canadian businesses.</p>
        </div>

        <div>
          <h4 className="text-white mb-4">Explore</h4>
          <ul className="space-y-2">
            <li><a href="/products">Products</a></li>
            <li><a href="/industries">Industries</a></li>
            <li><a href="/credit-readiness">Credit Readiness</a></li>
            <li><Link href="/product-comparison" className="block hover:text-white">Product Comparison</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white mb-4">Contact</h4>
          <div className="mb-4 flex flex-col items-start gap-3">
            <a href={APPLY_URL} className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-700">
              Apply Now
            </a>
            <a href="/credit-readiness" className="rounded-lg border border-blue-400/70 px-4 py-2 font-medium text-blue-200 transition hover:bg-blue-500/10">
              Check your Credit Readiness
            </a>
          </div>
          <ul className="space-y-2">
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
