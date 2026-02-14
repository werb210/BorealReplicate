const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8080";

type JsonBody = Record<string, unknown>;

const axios = {
  async post<TResponse>(path: string, data?: JsonBody) {
    const response = await fetch(`${API_BASE_URL}${path}`, {
      method: "POST",
      headers: data ? { "Content-Type": "application/json" } : undefined,
      body: data ? JSON.stringify(data) : undefined,
      credentials: "include",
    });

    if (!response.ok) {
      const text = await response.text();
      throw new Error(text || `Request failed with status ${response.status}`);
    }

    if (response.status === 204) {
      return { data: undefined as TResponse };
    }

    const responseData = (await response.json()) as TResponse;
    return { data: responseData };
  },
};

export default axios;
