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
import Footer from "@/components/layout/Footer";
import { initGA, trackPageView } from "@/analytics/ga";
import { scrollToTop } from "@/utils/scrollToTop";
import Compare from "@/pages/Compare";
import CreditReadiness from "@/pages/CreditReadiness";
import CreditResults from "@/pages/CreditResults";
import Podcasts from "@/pages/Podcasts";
import Products from "@/pages/Products";
import ProductDetail from "@/pages/ProductDetail";
import MediaFinancing from "@/pages/products/MediaFinancing";
import Apply from "@/pages/Apply";
import FloatingChat from "@/components/FloatingChat";

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
      <main id="main-content">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/how-it-works" component={HowItWorks} />

          <Route path="/products" component={Products} />
          <Route path="/products/media-financing" component={MediaFinancing} />
          <Route path="/products/:slug">{(params) => <ProductDetail slug={params.slug} />}</Route>

          <Route path="/industries" component={Industries} />
          <Route path="/industries/:slug">{(params) => <IndustryDetail slug={params.slug} />}</Route>

          <Route path="/product-comparison" component={Compare} />
          <Route path="/compare" component={Compare} />
          <Route path="/capital-readiness" component={CreditReadiness} />
          <Route path="/credit-readiness" component={CreditReadiness} />
          <Route path="/credit-results" component={CreditResults} />
          <Route path="/podcasts" component={Podcasts} />
          <Route path="/contact" component={Contact} />
          <Route path="/apply" component={Apply} />
          <Route path="/apply/:rest*" component={Apply} />
          <Route path="/lender-login" component={PartnerLogin} />
          <Route path="*" component={NotFound} />
        </Switch>
      </main>
      <Footer />
      <FloatingChat />
    </div>
  );
}
