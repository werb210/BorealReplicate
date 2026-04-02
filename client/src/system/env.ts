export function getValidatedApiUrl() {
  const API = import.meta.env.VITE_API_URL;

  if (!API) throw new Error("MISSING_API_URL");
  if (!API.includes("/api/v1")) throw new Error("INVALID_API_VERSION");

  return API.replace(/\/$/, "");
}

export function validateEnv() {
  getValidatedApiUrl();
}
