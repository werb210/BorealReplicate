import { API_BASE } from "@/api/base";

export function getValidatedApiUrl() {
  return API_BASE;
}

export function validateEnv() {
  getValidatedApiUrl();
}
