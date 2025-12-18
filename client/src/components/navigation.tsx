import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ApplyNowButton, AskQuestionButton } from "@/components/cta-buttons";

export function Navigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigationItems = [
    { href: "/", label: "Home" },
    { href: "/funding-solutions", label: "Funding Solutions" },
    { href: "/industries", label: "Industries" },
    { href: "/how-it-works", label: "How It Works" }
  ];

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/">
              <h1 className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors cursor-pointer" data-testid="logo-boreal-financial">
                Boreal Financial
              </h1>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigationItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <a
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      location === item.href
                        ? "text-primary bg-primary/10"
                        : "text-gray-700 hover:text-primary"
                    }`}
                    data-testid={`nav-link-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {item.label}
                  </a>
                </Link>
              ))}
              <AskQuestionButton size="sm" variant="outline" />
              <ApplyNowButton size="sm" />
            </div>
          </div>

          <div className="md:hidden">
            <button
              className="p-2 rounded-md hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-2">
            <div className="flex flex-col space-y-1">
              {navigationItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <a
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      location === item.href
                        ? "text-primary bg-primary/10"
                        : "text-gray-700 hover:text-primary"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                    data-testid={`mobile-nav-link-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {item.label}
                  </a>
                </Link>
              ))}
              <div className="px-3 py-2 space-y-2">
                <AskQuestionButton className="w-full" size="sm" variant="outline" />
                <ApplyNowButton className="w-full" size="sm" />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
