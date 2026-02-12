import { useEffect } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { AppRouter } from "@/router/AppRouter";
import { useUTMCapture } from "@/hooks/useUTM";
import "./index.css";

declare global {
  interface Window {
    dataLayer: unknown[];
  }
}

function RootApp() {
  useUTMCapture();

  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: "page_view" });
  }, []);

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
