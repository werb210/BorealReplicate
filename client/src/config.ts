const VITE_API_URL = import.meta.env.VITE_API_URL;

if (!VITE_API_URL) {
  throw new Error("MISSING_API_URL");
}

export { VITE_API_URL };
