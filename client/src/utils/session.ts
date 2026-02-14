export const READINESS_SESSION_STORAGE_KEY = "boreal_readiness_session";

export function getReadinessSessionToken(): string | null {
  if (typeof window === "undefined") return null;
  return window.localStorage.getItem(READINESS_SESSION_STORAGE_KEY);
}

export function setReadinessSessionToken(token: string) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(READINESS_SESSION_STORAGE_KEY, token);
}

export function buildApplyUrl(baseUrl: string, readinessSessionToken?: string | null) {
  if (!readinessSessionToken) return baseUrl;
  const url = new URL(baseUrl);
  url.searchParams.set("readinessSession", readinessSessionToken);
  return url.toString();
}
