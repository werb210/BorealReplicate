import { createRoot } from "react-dom/client";
import { HelmetProvider } from "@/lib/helmetAsync";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);
