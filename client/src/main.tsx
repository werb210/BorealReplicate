import { useEffect } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { AppRouter } from "@/router/AppRouter";
import AIChatWidget from "@/components/AIChatWidget";
import { useUTMCapture } from "@/hooks/useUTM";
import "./index.css";
import "./styles/global.css";

declare global {
  interface Window {
    dataLayer: unknown[];
  }
}

function RootApp() {
  useUTMCapture();

  useEffect(() => {
    if (!import.meta.env.VITE_GA_ID) {
      return;
    }

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: "page_view" });
  }, []);

  useEffect(() => {
    if (!("serviceWorker" in navigator)) {
      return;
    }

    navigator.serviceWorker.register("/sw.js").catch((error) => {
      console.error("Service worker registration failed", error);
    });
  }, []);

  return (
    <>
      <AppRouter />
      <AIChatWidget />
    </>
  );
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
