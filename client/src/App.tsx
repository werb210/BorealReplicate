import { TooltipProvider } from "@radix-ui/react-tooltip";
import { useEffect, useRef } from "react";
import { Toaster } from "@/components/ui/toaster";
import { AppRouter } from "@/router/AppRouter";
import { trackEvent } from "@/utils/analytics";
import SeoJsonLd from "./components/SeoJsonLd";
import { financialServiceSchema, organizationSchema } from "./seo/structuredData";

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
    <TooltipProvider delayDuration={200}>
      <SeoJsonLd data={organizationSchema} />
      <SeoJsonLd data={financialServiceSchema} />
      <Toaster />
      <AppRouter />
    </TooltipProvider>
  );
}

export default App;
