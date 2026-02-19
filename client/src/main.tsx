import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ErrorBoundary } from "./components/ErrorBoundary";
import "./index.css";
import "./styles/globals.css";

// ---- Advanced Tracking Layer ----
declare global {
  interface Window {
    dataLayer: any[];
  }
}

export const trackEvent = (eventName: string, payload: Record<string, any> = {}) => {
  if (typeof window !== "undefined" && window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      timestamp: Date.now(),
      ...payload,
    });
  }
};

export const trackConversion = (type: string, payload: Record<string, any> = {}) => {
  trackEvent("conversion", {
    conversion_type: type,
    ...payload,
  });
};

function resolveCtaLocation(element: Element): string {
  const locationHints: Array<{ selector: string; location: string }> = [
    { selector: "header, nav, [class*='nav']", location: "nav" },
    { selector: "footer, [class*='footer']", location: "footer" },
    { selector: "[class*='result'], [id*='result']", location: "results_page" },
    { selector: "[class*='hero'], [id*='hero']", location: "hero" },
  ];

  for (const { selector, location } of locationHints) {
    if (element.closest(selector)) {
      return location;
    }
  }

  return "hero";
}

function useScrollTracking() {
  useEffect(() => {
    const milestones = [25, 50, 75, 100];
    let fired: number[] = [];

    const onScroll = () => {
      const totalScrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScrollableHeight <= 0) {
        return;
      }

      const scrollPercent = (window.scrollY / totalScrollableHeight) * 100;

      milestones.forEach((m) => {
        if (scrollPercent >= m && !fired.includes(m)) {
          fired.push(m);
          trackEvent("scroll_depth", { percent: m });
        }
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
}

function TrackingProvider() {
  useScrollTracking();

  useEffect(() => {
    const onDocumentClick = (event: MouseEvent) => {
      const target = event.target as Element | null;
      if (!target) {
        return;
      }

      const clickableElement = target.closest("button, a");
      if (!clickableElement) {
        return;
      }

      const label = clickableElement.textContent?.trim().toLowerCase() ?? "";
      const location = resolveCtaLocation(clickableElement);

      if (label.includes("apply now")) {
        trackConversion("apply_click", {
          source: "website",
          location,
        });
      }

      if (label.includes("speak with advisor") || label.includes("advisor")) {
        trackEvent("advisor_click", { location });
      }
    };

    const onFormSubmit = (event: Event) => {
      const form = event.target as HTMLFormElement | null;
      if (!form || form.tagName !== "FORM") {
        return;
      }

      const configuredName = form.getAttribute("data-track-form") || form.getAttribute("name") || form.id;
      const inferredName = window.location.pathname.toLowerCase().includes("credit-readiness")
        ? "credit_readiness"
        : "generic_form";

      trackEvent("form_submit", {
        form: configuredName || inferredName,
      });
    };

    document.addEventListener("click", onDocumentClick);
    document.addEventListener("submit", onFormSubmit);

    return () => {
      document.removeEventListener("click", onDocumentClick);
      document.removeEventListener("submit", onFormSubmit);
    };
  }, []);

  return <App />;
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <TrackingProvider />
    </ErrorBoundary>
  </React.StrictMode>
);
