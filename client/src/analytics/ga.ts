const GA_MEASUREMENT_ID = "G-BOREAL1234";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

let initialized = false;

export function initGA() {
  if (initialized || typeof window === "undefined") {
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag(...args: unknown[]) {
    const dataLayer = window.dataLayer || [];
    dataLayer.push(args);
    window.dataLayer = dataLayer;
  };

  window.gtag("js", new Date());
  window.gtag("config", GA_MEASUREMENT_ID, { send_page_view: false });
  initialized = true;
}

export function trackEvent(eventName: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined" || !window.gtag) {
    return;
  }

  window.gtag("event", eventName, params);
}

export function trackPageView(path: string) {
  trackEvent("page_view", { page_path: path });
}
