import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { AppRouter } from "@/router/AppRouter";
import { useUTMCapture } from "@/hooks/useUTM";
import "./index.css";

function RootApp() {
  useUTMCapture();

  return <AppRouter />;
}

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <RootApp />
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>,
);
