import { Link } from "wouter";
import { AskQuestionButton, ApplyNowButton } from "@/components/cta-buttons";
import { useChatbot } from "@/hooks/use-chatbot";

const navLinks = [
  { href: "/products", label: "Products" },
  { href: "/industries", label: "Industries" }
];

export function Footer() {
  const { openChatbot, resetChatbot } = useChatbot();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white" data-testid="footer-brand">Boreal Financial</h3>
            <p className="text-gray-400 leading-relaxed" data-testid="footer-description">
              Marketplace lending for construction, manufacturing, and logistics. We match your deal to lenders who
              understand equipment-heavy operations and complex cash cycles.
            </p>
            <div className="flex flex-wrap gap-3">
              <ApplyNowButton size="sm" variant="secondary" />
              <AskQuestionButton size="sm" variant="outline" />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-gray-400">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <a className="hover:text-white transition-colors">{link.label}</a>
                  </Link>
                </li>
              ))}
              <li>
                <a className="hover:text-white transition-colors" href="/apply">
                  Apply
                </a>
              </li>
              <li>
                <button
                  className="hover:text-white transition-colors"
                  onClick={() => {
                    resetChatbot();
                    openChatbot();
                  }}
                >
                  Contact / Chat
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Need guidance?</h4>
            <p className="text-gray-400 text-sm">
              Talk to an expert through the chatbot for FAQs, product fit, or a direct handoff to a human.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center text-gray-400">
          <p data-testid="footer-copyright">&copy; 2024 Boreal Financial. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
