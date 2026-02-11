import { useEffect } from "react";
import { Route, Switch, useLocation } from "wouter";
import Home from "@/pages/Home";
import Apply from "@/pages/Apply";
import HowItWorks from "@/pages/HowItWorks";
import ProductPage from "@/pages/ProductPage";
import IndustryPage from "@/pages/IndustryPage";
import Industries from "@/pages/industries";
import Contact from "@/pages/Contact";
import StaffLogin from "@/pages/StaffLogin";
import PartnerLogin from "@/pages/PartnerLogin";
import NotFound from "@/pages/NotFound";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ChatWidget } from "@/components/ChatWidget";
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
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <a href="#main-content" className="sr-only rounded bg-slate-900 px-3 py-2 text-white focus:not-sr-only focus:absolute focus:left-3 focus:top-3">
        Skip to content
      </a>
      <AnalyticsListener />
      <Navbar />
      <main id="main-content">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/apply" component={Apply} />
          <Route path="/how-it-works" component={HowItWorks} />
          <Route path="/products/:slug" component={ProductPage} />
          <Route path="/industries" component={Industries} />
          <Route path="/industries/:slug" component={IndustryPage} />
          <Route path="/contact" component={Contact} />
          <Route path="/staff-login" component={StaffLogin} />
          <Route path="/partner-login" component={PartnerLogin} />
          <Route path="/lender-login" component={PartnerLogin} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}
