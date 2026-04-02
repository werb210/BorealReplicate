import { API_BASE_URL } from "../config/api";

function buildUrl(path: string) {
  const cleanPath = path.replace(/^\/+/, "");
  const cleanBase = API_BASE_URL.replace(/\/+$/, "");

  return `${cleanBase}/${cleanPath}`;
}

export async function apiFetch(
  path: string,
  options: RequestInit = {}
) {
  const url = buildUrl(path);

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...(options.headers as Record<string, string> || {}),
  };

  if (!headers["x-request-id"]) {
    headers["x-request-id"] =
      "rid-" + Math.random().toString(36).slice(2, 10);
  }

  const token = localStorage.getItem("auth_token");
  if (token && !headers["Authorization"]) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const res = await fetch(url, {
    ...options,
    headers,
  });

  // HARD FAIL ON NETWORK / BACKEND ISSUES
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`API ERROR ${res.status}: ${text}`);
  }

  return res.json();
}
