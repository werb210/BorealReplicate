import type { RequestHandler } from "express";

type HelmetDirectives = Record<string, string[]>;

interface HelmetOptions {
  contentSecurityPolicy?: {
    directives: HelmetDirectives;
  };
  crossOriginEmbedderPolicy?: boolean;
}

declare function helmet(options?: HelmetOptions): RequestHandler;

export default helmet;
