export type AnalyticsParams = Record<string, unknown>;

declare global {
  interface Window {
    dataLayer: unknown[];
  }
}

export function trackEvent(name: string, params: AnalyticsParams = {}) {
  if (typeof window === "undefined") {
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: name, ...params });
}
