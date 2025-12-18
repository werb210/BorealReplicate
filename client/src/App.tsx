import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import { ChatbotProvider } from "@/hooks/use-chatbot";

// Import all pages
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
import HowItWorks from "@/pages/how-it-works";

function Router() {
  return (
    <Switch>
      {/* Homepage */}
      <Route path="/" component={Home} />

      {/* Navigation Pages */}
      <Route path="/funding-solutions" component={FundingSolutions} />
      <Route path="/industries" component={Industries} />
      <Route path="/how-it-works" component={HowItWorks} />

      {/* Funding Pages */}
      <Route path="/term-loans" component={TermLoans} />
      <Route path="/lines-of-credit" component={LinesOfCredit} />
      <Route path="/factoring" component={Factoring} />
      <Route path="/purchase-order-financing" component={PurchaseOrderFinancing} />
      <Route path="/equipment-financing" component={EquipmentFinancing} />

      {/* Industry Pages */}
      <Route path="/construction" component={Construction} />
      <Route path="/manufacturing" component={Manufacturing} />
      <Route path="/logistics" component={Logistics} />
      
      {/* Fallback to 404 */}
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
