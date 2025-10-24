export type ErrorCode =
  | "INTERNAL_ERROR"
  | "VALIDATION_FAILED"
  | "NOT_FOUND"
  | "USER_EXISTS"
  | "ORIGIN_FORBIDDEN"
  | "RATE_LIMITED"
  | "CSRF_TOKEN_MISSING"
  | "CSRF_TOKEN_INVALID";

interface ErrorDescriptor {
  status: number;
  message: string;
}

const catalog: Record<ErrorCode, ErrorDescriptor> = {
  INTERNAL_ERROR: { status: 500, message: "Internal server error" },
  VALIDATION_FAILED: { status: 400, message: "Validation failed" },
  NOT_FOUND: { status: 404, message: "Resource not found" },
  USER_EXISTS: { status: 409, message: "Username already exists" },
  ORIGIN_FORBIDDEN: { status: 403, message: "Origin not allowed" },
  RATE_LIMITED: { status: 429, message: "Too many requests" },
  CSRF_TOKEN_MISSING: { status: 403, message: "Missing CSRF token" },
  CSRF_TOKEN_INVALID: { status: 403, message: "Invalid CSRF token" },
};

export class AppError extends Error {
  readonly code: ErrorCode;
  readonly status: number;
  readonly expose: boolean;

  constructor(code: ErrorCode, message?: string, options?: { expose?: boolean }) {
    const descriptor = catalog[code];
    super(message ?? descriptor.message);
    this.code = code;
    this.status = descriptor.status;
    this.expose = options?.expose ?? this.status < 500;
  }
}

export function getErrorDescriptor(code: ErrorCode) {
  return catalog[code];
}

export function toAppError(error: unknown): AppError {
  if (error instanceof AppError) {
    return error;
  }

  const err = error instanceof Error ? error : new Error(String(error));
  const appError = new AppError("INTERNAL_ERROR");
  appError.stack = err.stack;
  return appError;
}
