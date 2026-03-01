const kebab = (key) => key.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);

const toCsp = (directives = {}) =>
  Object.entries(directives)
    .map(([directive, values]) => `${kebab(directive)} ${values.join(" ")}`)
    .join("; ");

export default function helmet(options = {}) {
  const cspDirectives = options.contentSecurityPolicy?.directives;
  const includeCoep = options.crossOriginEmbedderPolicy !== false;

  return (_req, res, next) => {
    res.setHeader("X-DNS-Prefetch-Control", "off");
    res.setHeader("X-Frame-Options", "DENY");
    res.setHeader("X-Download-Options", "noopen");
    res.setHeader("X-Content-Type-Options", "nosniff");
    res.setHeader("Referrer-Policy", "no-referrer");
    res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
    res.setHeader("Cross-Origin-Resource-Policy", "same-origin");
    res.setHeader("Origin-Agent-Cluster", "?1");
    res.setHeader("X-XSS-Protection", "0");
    res.setHeader("Permissions-Policy", "camera=(), microphone=(), geolocation=()");

    if (includeCoep) {
      res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
    }

    if (cspDirectives) {
      res.setHeader("Content-Security-Policy", toCsp(cspDirectives));
    }

    next();
  };
}
