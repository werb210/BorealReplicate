import { VITE_API_URL } from "@/config";

const normalizedApiUrl = VITE_API_URL.replace(/\/$/, "");

export const API_BASE = `${normalizedApiUrl}/api/v1`;

if (!API_BASE.includes("/api/v1")) {
  throw new Error("INVALID_API_BASE");
}
