import { Helmet } from "react-helmet";

export { Helmet };

export function HelmetProvider({ children }) {
  return children ?? null;
}
