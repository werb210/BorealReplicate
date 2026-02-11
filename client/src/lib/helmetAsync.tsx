import type { ReactNode } from "react";
import { Helmet } from "react-helmet";

interface HelmetProviderProps {
  children: ReactNode;
}

export { Helmet };

export function HelmetProvider({ children }: HelmetProviderProps) {
  return <>{children}</>;
}
