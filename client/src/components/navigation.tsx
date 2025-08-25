import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigationItems = [
    { href: "/", label: "Home" },
    { href: "/business-line-of-credit", label: "Line of Credit" },
    { href: "/media-financing", label: "Media Financing" },
    { href: "/equipment-financing", label: "Equipment" },
    { href: "/account-receivable-financing", label: "Receivables" },
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
                        ? 'text-primary bg-primary/10' 
                        : 'text-gray-700 hover:text-primary'
                    }`}
                    data-testid={`nav-link-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {item.label}
                  </a>
                </Link>
              ))}
              <a href="https://staff.boreal.financial/" target="_blank" rel="noopener noreferrer" data-testid="business-image-header">
                <img 
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&h=40" 
                  alt="Business professionals in meeting" 
                  className="h-10 w-auto rounded-lg hover:opacity-80 transition-opacity cursor-pointer"
                />
              </a>
            </div>
          </div>
          
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
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
                        ? 'text-primary bg-primary/10' 
                        : 'text-gray-700 hover:text-primary'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                    data-testid={`mobile-nav-link-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {item.label}
                  </a>
                </Link>
              ))}
              <div className="px-3 py-2">
                <Button asChild className="w-full" data-testid="button-apply-now-mobile">
                  <a href="https://staff.boreal.financial/" target="_blank" rel="noopener noreferrer">
                    Apply Now
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
