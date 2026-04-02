import { afterEach, describe, expect, it, vi } from "vitest";
import { getValidatedApiUrl, validateEnv } from "../system/env";

describe("validateEnv", () => {
  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it("throws when VITE_API_URL is missing", () => {
    vi.stubEnv("VITE_API_URL", "");
    expect(() => validateEnv()).toThrowError("MISSING_API_URL");
  });

  it("forces /api/v1 contract on API base", () => {
    vi.stubEnv("VITE_API_URL", "https://example.com");
    expect(getValidatedApiUrl()).toBe("https://example.com/api/v1");
  });
});
