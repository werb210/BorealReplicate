import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

// Import all pages
import Home from "@/pages/home";
import BusinessLineOfCredit from "@/pages/business-line-of-credit";
import MediaFinancing from "@/pages/media-financing";
import AccountReceivableFinancing from "@/pages/account-receivable-financing";
import EquipmentFinancing from "@/pages/equipment-financing";
import RetailInventoryFinancing from "@/pages/retail-inventory-financing";
import Factoring from "@/pages/factoring";
import POFinancing from "@/pages/po-financing";

function Router() {
  return (
    <Switch>
      {/* Homepage */}
      <Route path="/" component={Home} />
      
      {/* Service Pages */}
      <Route path="/business-line-of-credit" component={BusinessLineOfCredit} />
      <Route path="/media-financing" component={MediaFinancing} />
      <Route path="/account-receivable-financing" component={AccountReceivableFinancing} />
      <Route path="/equipment-financing" component={EquipmentFinancing} />
      <Route path="/retail-inventory-financing" component={RetailInventoryFinancing} />
      <Route path="/factoring" component={Factoring} />
      <Route path="/po-financing" component={POFinancing} />
      
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
