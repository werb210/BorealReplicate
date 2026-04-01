export type ApiResponse<T> =
  | { success: true; data: T }
  | { success: false; error: string };

export async function apiPost<T>(_path: string, _payload?: unknown): Promise<T> {
  throw new Error("API_DISABLED_FOR_STATIC_SITE");
}

export async function apiGet<T>(_path: string): Promise<T> {
  throw new Error("API_DISABLED_FOR_STATIC_SITE");
}
