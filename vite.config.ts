import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

export default defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...(process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer(),
          ),
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
      "react-helmet": path.resolve(import.meta.dirname, "vendor", "react-helmet", "index.js"),
      "react-helmet-async": path.resolve(import.meta.dirname, "vendor", "react-helmet-async", "index.js"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    target: "es2022",
    minify: "esbuild",
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
  preview: {
    headers: {
      "Content-Security-Policy": "default-src 'self'; img-src 'self' data:; script-src 'self' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline'; connect-src 'self' https://www.google-analytics.com;",
      "X-Frame-Options": "DENY",
      "X-Content-Type-Options": "nosniff",
      "Referrer-Policy": "strict-origin-when-cross-origin",
    },
  },
});
