import { format } from "node:util";
import { existsSync, mkdirSync, createWriteStream, type WriteStream } from "node:fs";
import path from "node:path";

const LOG_DIR = process.env.LOG_DIRECTORY ?? path.resolve(process.cwd(), "logs");

function ensureLogDirectory() {
  if (!existsSync(LOG_DIR)) {
    mkdirSync(LOG_DIR, { recursive: true });
  }
}

type LogLevel = "fatal" | "error" | "warn" | "info" | "debug" | "trace";

interface LogEntry {
  level: LogLevel;
  msg: string;
  time: string;
  context?: Record<string, unknown>;
  stack?: string;
}

const levelWeights: Record<LogLevel, number> = {
  fatal: 60,
  error: 50,
  warn: 40,
  info: 30,
  debug: 20,
  trace: 10,
};

const defaultLevel: LogLevel = (process.env.LOG_LEVEL as LogLevel) ?? "info";

function serialize(entry: LogEntry) {
  const payload: Record<string, unknown> = {
    level: entry.level,
    msg: entry.msg,
    time: entry.time,
  };

  if (entry.context && Object.keys(entry.context).length > 0) {
    payload.context = entry.context;
  }

  if (entry.stack) {
    payload.stack = entry.stack;
  }

  return JSON.stringify(payload);
}

class PinoLite {
  private minimumLevel: number;
  private stream: WriteStream | null = null;
  private currentDate: string | null = null;

  constructor(level: LogLevel) {
    this.minimumLevel = levelWeights[level] ?? levelWeights.info;
    ensureLogDirectory();
  }

  private shouldLog(level: LogLevel) {
    return (levelWeights[level] ?? levelWeights.info) >= this.minimumLevel;
  }

  private rotateStreamIfNeeded(dateStamp: string) {
    if (this.currentDate === dateStamp && this.stream) {
      return;
    }

    this.stream?.end();

    const filename = path.join(LOG_DIR, `${dateStamp}.log`);
    this.stream = createWriteStream(filename, { flags: "a" });
    this.currentDate = dateStamp;
  }

  private emit(level: LogLevel, message: unknown, context?: Record<string, unknown>) {
    if (!this.shouldLog(level)) {
      return;
    }

    const time = new Date().toISOString();
    let msg: string;
    let stack: string | undefined;
    const dayStamp = time.slice(0, 10);
    this.rotateStreamIfNeeded(dayStamp);

    if (message instanceof Error) {
      msg = message.message;
      stack = message.stack;
    } else if (typeof message === "string") {
      msg = message;
    } else {
      msg = format(message);
    }

    const entry: LogEntry = { level, msg, time, context, stack };
    const serialized = serialize(entry) + "\n";
    process.stdout.write(serialized);
    this.stream?.write(serialized);
  }

  fatal(message: unknown, context?: Record<string, unknown>) {
    this.emit("fatal", message, context);
  }

  error(message: unknown, context?: Record<string, unknown>) {
    this.emit("error", message, context);
  }

  warn(message: unknown, context?: Record<string, unknown>) {
    this.emit("warn", message, context);
  }

  info(message: unknown, context?: Record<string, unknown>) {
    this.emit("info", message, context);
  }

  debug(message: unknown, context?: Record<string, unknown>) {
    this.emit("debug", message, context);
  }

  trace(message: unknown, context?: Record<string, unknown>) {
    this.emit("trace", message, context);
  }

  child(extra: Record<string, unknown>) {
    return new Proxy(this, {
      get: (target, prop) => {
        if (typeof prop !== "string") {
          return (target as any)[prop];
        }

        if (!(prop in target)) {
          return (target as any)[prop];
        }

        const fn = (target as any)[prop];
        if (typeof fn !== "function") {
          return fn;
        }

        return (message: unknown, context?: Record<string, unknown>) => {
          const mergedContext = { ...(context ?? {}), ...extra };
          return fn.call(target, message, mergedContext);
        };
      },
    });
  }
}

export function createLogger(level: LogLevel = defaultLevel) {
  return new PinoLite(level);
}

export const logger = createLogger(process.env.NODE_ENV === "production" ? "info" : "debug");
