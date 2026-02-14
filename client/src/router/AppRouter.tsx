import { useEffect } from "react";
import { Route, Switch, useLocation } from "wouter";
import Home from "@/pages/Home";
import HowItWorks from "@/pages/HowItWorks";
import Industries from "@/pages/Industries";
import IndustryDetail from "@/pages/IndustryDetail";
import Contact from "@/pages/Contact";
import PartnerLogin from "@/pages/PartnerLogin";
import NotFound from "@/pages/NotFound";
import Header from "@/components/Header";
import { Footer } from "@/components/layout/Footer";
import { initGA, trackPageView } from "@/analytics/ga";
import { scrollToTop } from "@/utils/scrollToTop";
import TermLoans from "@/pages/products/TermLoans";
import LineOfCredit from "@/pages/products/LineOfCredit";
import Factoring from "@/pages/products/Factoring";
import Equipment from "@/pages/products/Equipment";
import PurchaseOrder from "@/pages/products/PurchaseOrder";
import Compare from "@/pages/Compare";
import CapitalReadiness from "@/pages/CapitalReadiness";
import Podcasts from "@/pages/Podcasts";
import Products from "@/pages/Products";
import ProductDetail from "@/pages/ProductDetail";
import Apply from "@/pages/Apply";

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
    <div className="min-h-screen bg-[#020817] text-white">
      <AnalyticsListener />
      <Header />
      <main id="main-content" className="pt-20">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/how-it-works" component={HowItWorks} />

          <Route path="/products" component={Products} />
          <Route path="/products/:slug">{(params) => <ProductDetail slug={params.slug} />}</Route>
          <Route path="/products/term-loans" component={TermLoans} />
          <Route path="/products/line-of-credit" component={LineOfCredit} />
          <Route path="/products/factoring" component={Factoring} />
          <Route path="/products/equipment-financing" component={Equipment} />
          <Route path="/products/purchase-order-financing" component={PurchaseOrder} />
          <Route path="/products/po-financing" component={PurchaseOrder} />

          <Route path="/industries" component={Industries} />
          <Route path="/industries/:slug">{(params) => <IndustryDetail slug={params.slug} />}</Route>

          <Route path="/product-comparison" component={Compare} />
          <Route path="/compare" component={Compare} />
          <Route path="/capital-readiness" component={CapitalReadiness} />
          <Route path="/credit-readiness" component={CapitalReadiness} />
          <Route path="/podcasts" component={Podcasts} />
          <Route path="/contact" component={Contact} />
          <Route path="/apply" component={Apply} />
          <Route path="/lender-login" component={PartnerLogin} />
          <Route path="*" component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}
