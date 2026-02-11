import type { ComponentType } from "react";
import { seoGeneratedPages } from "@/pages/seo-generated/routeManifest";
import NotFound from "@/pages/not-found";

interface SeoGeneratedPageProps {
  path: string;
}

export default function SeoGeneratedPage({ path }: SeoGeneratedPageProps) {
  const PageComponent = seoGeneratedPages[path] as ComponentType | undefined;
  if (!PageComponent) {
    return <NotFound />;
  }

  return <PageComponent />;
}
