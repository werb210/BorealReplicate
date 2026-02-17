import type { Request } from "express";

type Level = "info" | "warn" | "error";

type LogPayload = Record<string, unknown> & {
  msg: string;
  traceId?: string;
};

function emit(level: Level, payload: LogPayload) {
  const entry = {
    level,
    ts: new Date().toISOString(),
    ...payload,
  };

  const line = JSON.stringify(entry);
  if (level === "error") {
    console.error(line);
  } else if (level === "warn") {
    console.warn(line);
  } else {
    console.log(line);
  }
}

export const logger = {
  info: (payload: LogPayload) => emit("info", payload),
  warn: (payload: LogPayload) => emit("warn", payload),
  error: (payload: LogPayload) => emit("error", payload),
};

export function getTraceId(req: Request) {
  return req.traceId ?? "missing-trace-id";
}
