import { useEffect, useState } from "react";
import { Route, Switch, useLocation } from "wouter";
import Home from "@/pages/Home";
import Apply from "@/pages/Apply";
import HowItWorks from "@/pages/HowItWorks";
import ProductPage from "@/pages/ProductPage";
import IndustryPage from "@/pages/IndustryPage";
import NotFound from "@/pages/NotFound";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SupportModal } from "@/components/support/SupportModal";
import { initGA, trackPageView } from "@/analytics/ga";

function AnalyticsListener() {
  const [location] = useLocation();

  useEffect(() => {
    initGA();
  }, []);

  useEffect(() => {
    trackPageView(location);
  }, [location]);

  return null;
}

export function AppRouter() {
  const [supportOpen, setSupportOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <a href="#main-content" className="sr-only rounded bg-slate-900 px-3 py-2 text-white focus:not-sr-only focus:absolute focus:left-3 focus:top-3">
        Skip to content
      </a>
      <AnalyticsListener />
      <Navbar onOpenSupport={() => setSupportOpen(true)} />
      <main id="main-content">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/apply" component={Apply} />
          <Route path="/how-it-works" component={HowItWorks} />
          <Route path="/products/:slug" component={ProductPage} />
          <Route path="/industries/:slug" component={IndustryPage} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
      <SupportModal open={supportOpen} onOpenChange={setSupportOpen} />
    </div>
  );
}
