const base =
  import.meta.env.VITE_API_BASE_URL ||
  "/api";

if (!base) {
  throw new Error("API BASE URL NOT CONFIGURED");
}

export const API_BASE_URL = base;
