import zlib from "node:zlib";

export default function compression() {
  return (req, res, next) => {
    const acceptEncoding = String(req.headers["accept-encoding"] ?? "");
    if (!acceptEncoding.includes("gzip")) {
      next();
      return;
    }

    const originalWrite = res.write.bind(res);
    const originalEnd = res.end.bind(res);
    const chunks = [];

    res.write = (chunk, ...args) => {
      if (chunk !== undefined && chunk !== null) {
        chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(String(chunk)));
      }
      return true;
    };

    res.end = (chunk, ...args) => {
      if (chunk !== undefined && chunk !== null) {
        chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(String(chunk)));
      }

      if (res.statusCode < 200 || res.statusCode >= 300 || chunks.length === 0) {
        return originalEnd(chunk, ...args);
      }

      const payload = Buffer.concat(chunks);
      const contentType = String(res.getHeader("Content-Type") ?? "");
      const isCompressible =
        contentType.includes("application/json") ||
        contentType.includes("text/") ||
        contentType.includes("javascript") ||
        contentType.includes("xml");

      if (!isCompressible || payload.length < 1024) {
        res.setHeader("Content-Length", payload.length);
        originalWrite(payload);
        return originalEnd();
      }

      const gzipped = zlib.gzipSync(payload);
      res.setHeader("Content-Encoding", "gzip");
      res.setHeader("Vary", "Accept-Encoding");
      res.setHeader("Content-Length", gzipped.length);
      originalWrite(gzipped);
      return originalEnd();
    };

    next();
  };
}
