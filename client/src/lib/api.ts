import { apiFetch } from "@/api/client";

export async function api<T>(path: string, options: RequestInit = {}): Promise<T> {
  const normalizedOptions = {
    ...options,
    body:
      options.body && typeof options.body !== "string"
        ? JSON.stringify(options.body)
        : options.body,
  };

  return apiFetch(path, normalizedOptions) as Promise<T>;
}
