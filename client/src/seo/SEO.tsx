import { Helmet } from "@/lib/helmetAsync";

interface SEOProps {
  title: string;
  description: string;
  schema?: Record<string, unknown> | Array<Record<string, unknown>>;
}

const SITE_NAME = "Boreal Financial";
const BASE_URL = "https://borealfinancial.com";

export function SEO({ title, description, schema }: SEOProps) {
  const schemaArray = Array.isArray(schema) ? schema : schema ? [schema] : [];
  const path = typeof window !== "undefined" ? window.location.pathname + window.location.search : "/";
  const url = `${BASE_URL}${path}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta name="robots" content="index,follow" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
      {schemaArray.map((item, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(item)}
        </script>
      ))}
    </Helmet>
  );
}
