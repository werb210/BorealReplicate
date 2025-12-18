import { Link } from "wouter";
import { AskQuestionButton, ApplyNowButton } from "@/components/cta-buttons";

export function Footer() {
  const fundingLinks = [
    { href: "/term-loans", label: "Term Loans" },
    { href: "/lines-of-credit", label: "Lines of Credit" },
    { href: "/factoring", label: "Factoring" },
    { href: "/purchase-order-financing", label: "PO Financing" },
    { href: "/equipment-financing", label: "Equipment Financing" }
  ];

  const industryLinks = [
    { href: "/construction", label: "Construction" },
    { href: "/manufacturing", label: "Manufacturing" },
    { href: "/logistics", label: "Logistics" }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2 space-y-4">
            <h3 className="text-2xl font-bold text-white" data-testid="footer-brand">Boreal Financial</h3>
            <p className="text-gray-400 leading-relaxed" data-testid="footer-description">
              Financing built for construction, manufacturing, and logistics. Five core products, one persistent chatbot, and a
              team that understands equipment-heavy, cash-flow-driven work.
            </p>
            <div className="flex flex-wrap gap-3">
              <ApplyNowButton size="sm" variant="secondary" />
              <AskQuestionButton size="sm" variant="outline" />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4" data-testid="footer-services-heading">Funding</h4>
            <ul className="space-y-2 text-gray-400">
              {fundingLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <a className="hover:text-white transition-colors" data-testid={`footer-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}>
                      {link.label}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4" data-testid="footer-contact-heading">Industries</h4>
            <ul className="space-y-2 text-gray-400">
              {industryLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <a className="hover:text-white transition-colors" data-testid={`footer-link-${link.label.toLowerCase()}`}>
                      {link.label}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 space-y-1 text-gray-400 text-sm">
              <p>Email: <a href="mailto:Info@boreal.financial" className="hover:text-white">Info@boreal.financial</a></p>
              <p>Client Portal: <a href="https://staff.boreal.financial/" target="_blank" rel="noopener noreferrer" className="hover:text-white">Apply Now</a></p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center text-gray-400">
          <p data-testid="footer-copyright">&copy; 2024 Boreal Financial. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
