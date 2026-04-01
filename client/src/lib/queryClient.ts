import { QueryClient, QueryFunction } from "@tanstack/react-query";
import { apiGet, apiPost } from "@/lib/apiClient";
import { apiRequest } from "@/lib/api";

export async function fetcher<T>(url: string): Promise<T> {
  return apiGet<T>(url);
}

export async function apiMutationRequest(
  method: string,
  url: string,
  data?: unknown | undefined,
): Promise<unknown> {
  if (method.toUpperCase() !== "POST") {
    throw new Error(`Unsupported method: ${method}`);
  }

  return apiPost(url, data);
}

export function getQueryFn<T>(): QueryFunction<T> {
  return async ({ queryKey }) => {
    const url = queryKey.join("/") as string;
    return apiRequest<T>(url, { method: "GET" });
  };
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: getQueryFn(),
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});
