import { useEffect } from "react";

export function useUTMCapture() {
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const params = new URLSearchParams(window.location.search);
    const utmSource = params.get("utm_source");

    if (utmSource) {
      localStorage.setItem("utm_source", utmSource);
      localStorage.setItem("utm_medium", params.get("utm_medium") ?? "");
      localStorage.setItem("utm_campaign", params.get("utm_campaign") ?? "");
    }
  }, []);
}
