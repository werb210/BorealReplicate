import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  schema?: object;
}

interface LegacySeoProps {
  title: string;
  description: string;
  canonical?: string;
  jsonLd?: object;
}

export default function SEO({ title, description, schema }: SEOProps) {
  useEffect(() => {
    document.title = title;

    let metaDescription =
      document.querySelector('meta[name="description"]') ||
      document.createElement("meta");

    metaDescription.setAttribute("name", "description");
    metaDescription.setAttribute("content", description);
    document.head.appendChild(metaDescription);

    if (schema) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.innerHTML = JSON.stringify(schema);
      document.head.appendChild(script);
    }
  }, [title, description, schema]);

  return null;
}

export function Seo({ title, description, canonical, jsonLd }: LegacySeoProps) {
  useEffect(() => {
    if (canonical) {
      let link =
        document.querySelector('link[rel="canonical"]') ||
        document.createElement("link");
      link.setAttribute("rel", "canonical");
      link.setAttribute("href", canonical);
      document.head.appendChild(link);
    }
  }, [canonical]);

  return <SEO title={title} description={description} schema={jsonLd} />;
}
