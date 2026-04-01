import { apiRequest } from "@/lib/api";

function normalizePath(path: string): string {
  if (!path.startsWith("/")) {
    return `/api/${path}`;
  }

  return path;
}

export async function apiPost<T>(path: string, payload?: unknown): Promise<T> {
  return apiRequest<T>(normalizePath(path), {
    method: "POST",
    body: JSON.stringify(payload ?? {}),
  });
}

export async function apiGet<T>(path: string): Promise<T> {
  return apiRequest<T>(normalizePath(path), {
    method: "GET",
  });
}
