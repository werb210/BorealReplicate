import { afterEach, describe, expect, it, vi } from "vitest";
import { validateEnv } from "../system/env";

describe("validateEnv", () => {
  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it("throws when VITE_API_URL is missing", () => {
    vi.stubEnv("VITE_API_URL", "");
    expect(() => validateEnv()).toThrowError("MISSING_API_URL");
  });

  it("throws when VITE_API_URL does not include /api/v1", () => {
    vi.stubEnv("VITE_API_URL", "https://example.com/api/v2");
    expect(() => validateEnv()).toThrowError("INVALID_API_VERSION");
  });
});
