const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8080";

async function post<TResponse>(path: string, data?: unknown): Promise<TResponse> {
  const res = await fetch(`${API_BASE_URL}${path}`, {
    method: "POST",
    headers: data ? { "Content-Type": "application/json" } : undefined,
    body: data ? JSON.stringify(data) : undefined,
    credentials: "include",
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || `Request failed with status ${res.status}`);
  }

  if (res.status === 204) {
    return undefined as TResponse;
  }

  return res.json() as Promise<TResponse>;
}

export async function createAiSession(source: "website") {
  return post<{ sessionId: string }>("/api/ai/session", { source });
}

export async function sendAiMessage(sessionId: string, message: string) {
  return post<{ reply: string }>(`/api/ai/session/${sessionId}/message`, { message });
}

export async function escalateToHuman(sessionId: string) {
  return post<void>(`/api/ai/session/${sessionId}/escalate`);
}

export async function reportIssue(
  sessionId: string,
  description: string,
  screenshot: string,
) {
  return post<void>(`/api/ai/session/${sessionId}/report`, {
    description,
    screenshot,
  });
}
