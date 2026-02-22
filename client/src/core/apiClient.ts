import { apiRequest } from "@/lib/queryClient";

async function request<T>(method: "GET" | "POST", url: string, body?: unknown): Promise<{ data: T }> {
  const response = await apiRequest(method, `/api${url}`, body);
  const data = (await response.json()) as T;
  return { data };
}

const api = {
  get<T>(url: string) {
    return request<T>("GET", url);
  },
  post<T>(url: string, body?: unknown) {
    return request<T>("POST", url, body);
  },
};

export default api;
