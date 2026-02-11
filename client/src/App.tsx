import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import { ChatbotProvider } from "@/hooks/use-chatbot";

import Home from "@/pages/home";
import LinesOfCredit from "@/pages/lines-of-credit";
import TermLoans from "@/pages/term-loans";
import Factoring from "@/pages/factoring";
import PurchaseOrderFinancing from "@/pages/purchase-order-financing";
import EquipmentFinancing from "@/pages/equipment-financing";
import Construction from "@/pages/construction";
import Manufacturing from "@/pages/manufacturing";
import Logistics from "@/pages/logistics";
import FundingSolutions from "@/pages/funding-solutions";
import Industries from "@/pages/industries";
import FaqPage from "@/pages/FaqPage";
import PillarTemplate from "@/pages/seo/PillarTemplate";
import LocationTemplate from "@/pages/seo/LocationTemplate";
import IndustryTemplate from "@/pages/seo/IndustryTemplate";
import ComparisonTemplate from "@/pages/seo/ComparisonTemplate";
import CaseStudyTemplate from "@/pages/seo/CaseStudyTemplate";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />

      <Route path="/products" component={FundingSolutions} />
      <Route path="/funding-solutions" component={FundingSolutions} />
      <Route path="/industries" component={Industries} />
      <Route path="/faq" component={FaqPage} />

      <Route path="/term-loans" component={TermLoans} />
      <Route path="/lines-of-credit" component={LinesOfCredit} />
      <Route path="/factoring" component={Factoring} />
      <Route path="/purchase-order-financing" component={PurchaseOrderFinancing} />
      <Route path="/equipment-financing" component={EquipmentFinancing} />

      <Route path="/industries/construction" component={Construction} />
      <Route path="/industries/manufacturing" component={Manufacturing} />
      <Route path="/industries/logistics" component={Logistics} />

      <Route path="/products/:product/:location" component={LocationTemplate} />
      <Route path="/products/:product" component={PillarTemplate} />
      <Route path="/industry/:industry/:product" component={IndustryTemplate} />
      <Route path="/compare/:slug" component={ComparisonTemplate} />
      <Route path="/case-studies/:slug" component={CaseStudyTemplate} />

      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ChatbotProvider>
          <Toaster />
          <Router />
        </ChatbotProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
