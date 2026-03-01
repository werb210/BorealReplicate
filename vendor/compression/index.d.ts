import type { RequestHandler } from "express";

declare function compression(): RequestHandler;

export default compression;
