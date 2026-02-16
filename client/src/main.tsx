import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Providers are mounted within App; keep root minimal.

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
