import { useState } from "react";
import { Link, useLocation } from "wouter";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { industries, products } from "@/data/marketplace";

type NavbarProps = {
  onOpenSupport: () => void;
};

function Dropdown({
  label,
  items,
}: {
  label: string;
  items: Array<{ href: string; label: string }>;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className="inline-flex items-center gap-1 text-sm font-medium text-secondary hover:text-primary"
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
        aria-haspopup="menu"
      >
        {label}
        <ChevronDown className="w-4 h-4" />
      </button>
      {open && (
        <div className="absolute left-0 mt-2 w-64 rounded-md border bg-background shadow-md p-2 z-50" role="menu">
          {items.map((item) => (
            <a key={item.href} href={item.href} className="block rounded px-2 py-2 text-sm hover:bg-muted" role="menuitem">
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export function Navbar({ onOpenSupport }: NavbarProps) {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const productItems = products.map((product) => ({
    href: `/products/${product.slug}`,
    label: product.name,
  }));

  const industryItems = industries.map((industry) => ({
    href: `/industries/${industry.slug}`,
    label: industry.name,
  }));

  const staticLinks = [
    { href: "/how-it-works", label: "How It Works" },
    { href: "/lender-login", label: "Lender Login" },
    { href: "/referrer-login", label: "Referrer Login" },
    { href: "/staff-login", label: "Staff Login" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-background border-b">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between" aria-label="Main navigation">
        <Link href="/">
          <a className="text-lg font-semibold text-secondary">Boreal Financial</a>
        </Link>

        <div className="hidden lg:flex items-center gap-6">
          <Dropdown label="Products" items={productItems} />
          <Dropdown label="Industries" items={industryItems} />
          {staticLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium hover:text-primary ${location === link.href ? "text-primary" : "text-secondary"}`}
            >
              {link.label}
            </a>
          ))}
          <Button asChild>
            <a href="/apply">Apply</a>
          </Button>
          <Button variant="outline" onClick={onOpenSupport} aria-label="Talk to an Expert">
            Talk to Expert
          </Button>
        </div>

        <button
          className="lg:hidden p-2 rounded-md"
          aria-label="Open mobile menu"
          onClick={() => setMobileMenuOpen((current) => !current)}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="lg:hidden border-t bg-background px-4 py-4 space-y-3">
          <p className="text-xs uppercase text-muted-foreground">Products</p>
          {productItems.map((item) => (
            <a key={item.href} href={item.href} className="block text-sm text-secondary">
              {item.label}
            </a>
          ))}
          <p className="text-xs uppercase text-muted-foreground pt-2">Industries</p>
          {industryItems.map((item) => (
            <a key={item.href} href={item.href} className="block text-sm text-secondary">
              {item.label}
            </a>
          ))}
          {staticLinks.map((link) => (
            <a key={link.href} href={link.href} className="block text-sm text-secondary">
              {link.label}
            </a>
          ))}
          <div className="flex flex-col gap-2 pt-2">
            <Button asChild>
              <a href="/apply">Apply</a>
            </Button>
            <Button variant="outline" onClick={onOpenSupport}>
              Talk to Expert
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
