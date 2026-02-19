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

export const trackLeadProfile = (profile: {
  strength: "strong" | "moderate" | "weak";
  industry?: string;
  capital_range?: string;
  collateral_type?: string;
}) => {
  trackEvent("lead_profile", {
    ...profile,
  });
};

// ---- Revenue Value Modeling ----
const COMMISSION_RATE = 0.03; // Adjust to real average later

export const estimateCommissionValue = (
  capitalRange: string
): number => {
  const ranges: Record<string, number> = {
    "0-100k": 50000,
    "100k-250k": 175000,
    "250k-500k": 375000,
    "500k-1m": 750000,
    "1m+": 1500000,
    "Zero to $150,000": 75000,
    "$150,001 to $500,000": 325000,
    "$500,001 to $1,000,000": 750000,
    "$1,000,001 to $3,000,000": 2000000,
    "Over $3,000,000": 3000000,
  };

  const midpoint = ranges[capitalRange] || 100000;
  return midpoint * COMMISSION_RATE;
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
          trackEvent("engagement_score", {
            scroll_depth: m,
          });
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
