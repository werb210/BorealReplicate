export type AnalyticsParams = Record<string, unknown>;

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

export function trackEvent(name: string, data: any = {}) {
  if (typeof window === "undefined") return;
  if (process.env.NODE_ENV !== "production") return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: name,
    ...data,
  });

  if (typeof window.gtag === "function") {
    window.gtag("event", name, data);
  }
}
