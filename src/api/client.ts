import { API_BASE } from '../config/api';

export async function api(path: string, options: RequestInit = {}) {
  const isFormData =
    typeof FormData !== 'undefined' && options.body instanceof FormData;

  const res = await fetch(`${API_BASE}${path}`, {
    ...options,
    credentials: 'include',
    headers: {
      ...(isFormData ? {} : { 'Content-Type': 'application/json' }),
      ...(options.headers as Record<string, string>),
    },
  });

  const json = await res.json().catch(() => ({} as unknown));

  if (!res.ok) {
    const errMsg =
      (json as { error?: { message?: string } | string })?.error;
    const msg =
      typeof errMsg === 'string'
        ? errMsg
        : (errMsg as { message?: string } | undefined)?.message ?? 'API error';
    throw new Error(msg);
  }

  if ((json as { status?: string })?.status === 'ok') {
    return (json as { data?: unknown }).data ?? json;
  }

  return json;
}

export const apiFetch = api;
