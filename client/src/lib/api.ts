import { API_BASE_URL } from "@/config/api";

type ApiSuccess<T> = { success: true; data: T };
type ApiFailure = { success: false; message: string; status?: number };

export type ApiResult<T> = ApiSuccess<T> | ApiFailure;

const DEFAULT_TIMEOUT_MS = 10_000;

function buildUrl(path: string): string {
  if (/^https?:\/\//i.test(path)) {
    return path;
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${API_BASE_URL}${normalizedPath}`;
}

export async function apiRequest<T>(path: string, options: RequestInit = {}): Promise<ApiResult<T>> {
  const timeoutMs = typeof options.keepalive === "boolean" && options.keepalive ? 0 : DEFAULT_TIMEOUT_MS;
  const timeoutController = new AbortController();
  const userSignal = options.signal;

  let timeoutId: ReturnType<typeof setTimeout> | undefined;
  let didTimeout = false;

  const handleUserAbort = () => {
    timeoutController.abort();
  };

  if (userSignal) {
    if (userSignal.aborted) {
      return { success: false, message: "aborted" };
    }
    userSignal.addEventListener("abort", handleUserAbort, { once: true });
  }

  if (timeoutMs > 0) {
    timeoutId = setTimeout(() => {
      didTimeout = true;
      timeoutController.abort();
    }, timeoutMs);
  }

  try {
    const isFormData = options.body instanceof FormData;
    const headers = new Headers(options.headers || {});

    if (!isFormData) {
      if (!headers.has("Content-Type")) {
        headers.set("Content-Type", "application/json");
      }
      if (!headers.has("Accept")) {
        headers.set("Accept", "application/json");
      }
    }

    const body =
      options.body && !isFormData && typeof options.body !== "string"
        ? JSON.stringify(options.body)
        : options.body;

    const response = await window.fetch(buildUrl(path), {
      ...options,
      headers,
      body,
      signal: timeoutController.signal,
      credentials: options.credentials ?? "include",
    });

    const responseText = await response.text();
    let parsed: T | { message?: string; error?: string } | null = null;

    if (responseText) {
      try {
        parsed = JSON.parse(responseText);
      } catch {
        parsed = null;
      }
    }

    if (!response.ok) {
      const parsedMessage =
        parsed && typeof parsed === "object" && !Array.isArray(parsed)
          ? (parsed.message ?? parsed.error)
          : undefined;

      return {
        success: false,
        message: parsedMessage || `Request failed with status ${response.status}`,
        status: response.status,
      };
    }

    return { success: true, data: parsed as T };
  } catch (error) {
    if (didTimeout) {
      return { success: false, message: "timeout" };
    }

    if (error instanceof DOMException && error.name === "AbortError") {
      return { success: false, message: "aborted" };
    }

    return {
      success: false,
      message: error instanceof Error ? error.message : "Request failed",
    };
  } finally {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    if (userSignal) {
      userSignal.removeEventListener("abort", handleUserAbort);
    }
  }
}
