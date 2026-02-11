import type { ReactNode } from "react";

export interface HelmetProps {
  children?: ReactNode;
}

export interface HelmetProviderProps {
  children?: ReactNode;
}

export function Helmet(props: HelmetProps): null;
export function HelmetProvider(props: HelmetProviderProps): ReactNode;
