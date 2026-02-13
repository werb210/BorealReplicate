import { useEffect } from "react";
import { Route, Switch, useLocation } from "wouter";
import Home from "@/pages/Home";
import HowItWorks from "@/pages/HowItWorks";
import Industries from "@/pages/industries";
import IndustryDetail from "@/pages/IndustryDetail";
import Contact from "@/pages/Contact";
import PartnerLogin from "@/pages/PartnerLogin";
import NotFound from "@/pages/NotFound";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { initGA, trackPageView } from "@/analytics/ga";
import { scrollToTop } from "@/utils/scrollToTop";
import TermLoans from "@/pages/products/TermLoans";
import LineOfCredit from "@/pages/products/LineOfCredit";
import Factoring from "@/pages/products/Factoring";
import Equipment from "@/pages/products/Equipment";
import PurchaseOrder from "@/pages/products/PurchaseOrder";
import ProductComparison from "@/pages/ProductComparison";
import CapitalReadinessScore from "@/pages/CapitalReadinessScore";
import Podcasts from "@/pages/Podcasts";

function AnalyticsListener() {
  const [location] = useLocation();

  useEffect(() => {
    initGA();
  }, []);

  useEffect(() => {
    trackPageView(location);
    scrollToTop();
  }, [location]);

  return null;
}

export function AppRouter() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <AnalyticsListener />
      <Navbar />
      <main id="main-content">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/how-it-works" component={HowItWorks} />

          <Route path="/products/term-loans" component={TermLoans} />
          <Route path="/products/line-of-credit" component={LineOfCredit} />
          <Route path="/products/factoring" component={Factoring} />
          <Route path="/products/equipment-financing" component={Equipment} />
          <Route path="/products/purchase-order-financing" component={PurchaseOrder} />

          <Route path="/industries" component={Industries} />
          <Route path="/industries/:slug">{(params) => <IndustryDetail slug={params.slug} />}</Route>

          <Route path="/product-comparison" component={ProductComparison} />
          <Route path="/capital-readiness" component={CapitalReadinessScore} />
          <Route path="/capital-readiness-score" component={CapitalReadinessScore} />
          <Route path="/podcasts" component={Podcasts} />
          <Route path="/contact" component={Contact} />
          <Route path="/lender-login" component={PartnerLogin} />
          <Route path="*" component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}
