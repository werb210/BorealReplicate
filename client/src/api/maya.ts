import { apiClient } from "@/api/client";

const mayaEnabled = import.meta.env.VITE_MAYA_ENABLED === "true";
const mayaApiBaseUrl = import.meta.env.VITE_API_URL;

export const sendMayaMessage = (message) => {
  if (!mayaEnabled) return;

  return apiClient("/api/v1/maya/message", {
    method: "POST",
    body: JSON.stringify({ message })
  });
};

export const isMayaConfigured = () => {
  return mayaEnabled && Boolean(mayaApiBaseUrl);
};

export const buildMayaWebSocketUrl = (path = "/ws") => {
  if (!mayaApiBaseUrl) return null;

  const websocketBase = mayaApiBaseUrl.replace(/^http:/, "ws:").replace(/^https:/, "wss:");
  return `${websocketBase}/api/v1/maya${path}`;
};

export const checkMayaHealth = async (signal?: AbortSignal) => {
  if (!mayaApiBaseUrl) return false;

  const res = await fetch(`${mayaApiBaseUrl}/api/v1/maya/health`, { signal });
  return res.ok;
};
