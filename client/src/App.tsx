import { useEffect, useRef } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AppRouter } from "@/router/AppRouter";
import { trackEvent } from "@/utils/analytics";

function App() {
  const trackedDepthRef = useRef({ fifty: false, seventyFive: false });

  useEffect(() => {
    function handleScroll() {
      const scrollPercent =
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;

      if (scrollPercent > 50 && !trackedDepthRef.current.fifty) {
        trackEvent("scroll_50");
        trackedDepthRef.current.fifty = true;
      }
      if (scrollPercent > 75 && !trackedDepthRef.current.seventyFive) {
        trackEvent("scroll_75");
        trackedDepthRef.current.seventyFive = true;
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <AppRouter />
        <div className="fixed bottom-6 right-6 rounded-full bg-black px-4 py-3 text-white shadow-lg">
          AI Assistant
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
