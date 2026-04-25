import { Navigate, Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Compare from "../pages/Compare";
import CreditReadiness from "../pages/CreditReadiness";
import CreditResults from "../pages/CreditResults";
import Podcasts from "../pages/Podcasts";
import HowItWorks from "../pages/HowItWorks";
import Products from "../pages/Products";
import Industries from "../pages/Industries";
import MainLayout from "../layouts/MainLayout";
import Apply from "../pages/Apply";
import Privacy from "../pages/privacy";
import Terms from "../pages/terms";
import SeoLandingPage from "../pages/SeoLandingPage";

export function AppRouter() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/products" element={<Products />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/products/:slug" element={<SeoLandingPage />} />
        <Route path="/industries/:slug" element={<SeoLandingPage />} />

        <Route path="/product-comparison" element={<Compare />} />
        <Route path="/compare" element={<Compare />} />

        <Route path="/credit-readiness" element={<CreditReadiness />} />
        <Route path="/credit-readiness/results" element={<CreditResults />} />
        <Route path="/credit-results" element={<CreditResults />} />

        <Route path="/podcasts" element={<Podcasts />} />
        <Route path="/how-it-works" element={<HowItWorks />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </MainLayout>
  );
}

export default AppRouter;
