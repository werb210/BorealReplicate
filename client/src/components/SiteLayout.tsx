import { ReactNode, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/footer";
import { SupportModal } from "@/components/SupportModal";
import LeadModal from "./LeadModal";

type SiteLayoutProps = {
  children: ReactNode;
};

export function SiteLayout({ children }: SiteLayoutProps) {
  const [supportOpen, setSupportOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-primary text-primary-foreground px-3 py-2 rounded">
        Skip to main content
      </a>
      <Navbar onOpenSupport={() => setSupportOpen(true)} />
      <main id="main-content">{children}</main>
      <Footer />
      <SupportModal open={supportOpen} onOpenChange={setSupportOpen} />
      <LeadModal />
    </div>
  );
}
