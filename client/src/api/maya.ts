import { apiRequest, type ApiResult } from "@/lib/api";

const mayaEnabled = import.meta.env.VITE_MAYA_ENABLED === "true";
const mayaApiBase = (import.meta.env.VITE_MAYA_API_BASE ?? "").trim().replace(/\/+$/, "");

type MayaChatResponse = {
  reply?: string;
  data?: {
    reply?: string;
  };
};

export function isMayaConfigured() {
  return mayaEnabled && Boolean(mayaApiBase);
}

export function buildMayaWebSocketUrl(path: string) {
  if (!isMayaConfigured()) {
    return null;
  }

  const pathWithSlash = path.startsWith("/") ? path : `/${path}`;
  const wsBase = mayaApiBase.replace(/^http:/i, "ws:").replace(/^https:/i, "wss:");
  return `${wsBase}${pathWithSlash}`;
}

export async function checkMayaHealth(_signal?: AbortSignal): Promise<boolean> {
  if (!isMayaConfigured()) {
    return false;
  }

  const response = await apiRequest(`${mayaApiBase}/health`, {
    method: "GET",
  });

  return response.success;
}

export async function sendMayaMessage(message: string): Promise<ApiResult<MayaChatResponse>> {
  return apiRequest<MayaChatResponse>("/maya/chat", {
    method: "POST",
    body: { message },
  });
}
