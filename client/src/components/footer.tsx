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
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-secondary-foreground" data-testid="footer-brand">Boreal Financial</h3>
            <p className="text-secondary-foreground/70 leading-relaxed text-sm" data-testid="footer-description">
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
            <ul className="space-y-2 text-secondary-foreground/70 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <a className="hover:text-secondary-foreground transition-colors">{link.label}</a>
                  </Link>
                </li>
              ))}
              <li>
                <a
                  className="hover:text-secondary-foreground transition-colors"
                  href="https://client.boreal.financial"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apply
                </a>
              </li>
              <li>
                <button
                  className="hover:text-secondary-foreground transition-colors"
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
            <p className="text-secondary-foreground/70 text-sm">
              Talk to an expert through the chatbot for FAQs, product fit, or a direct handoff to a human.
            </p>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 pt-6 text-center text-secondary-foreground/60 text-sm">
          <p data-testid="footer-copyright">&copy; 2024 Boreal Financial. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
