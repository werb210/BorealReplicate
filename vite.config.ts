import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const clientRoot = path.resolve(__dirname, "client");
const publicDir = path.resolve(clientRoot, "public");
const outDir = path.resolve(__dirname, "dist/public");

export default defineConfig({
  root: clientRoot,

  // Explicitly define public directory to prevent Vite copyDir ENOENT issues
  publicDir,

  plugins: [react()],

  resolve: {
    alias: {
      "@": path.resolve(clientRoot, "src"),
      "@shared": path.resolve(__dirname, "shared"),
    },
    dedupe: ["react", "react-dom"],
  },

  optimizeDeps: {
    include: ["react", "react-dom"],
  },

  build: {
    outDir,
    emptyOutDir: true,
    target: "es2022",

    rollupOptions: {
      input: path.resolve(clientRoot, "index.html"),
    },
  },
});
