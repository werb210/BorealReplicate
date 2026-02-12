import { Helmet } from "@/lib/helmetAsync";

interface SEOProps {
  title: string;
  description: string;
  url?: string;
  image?: string;
  schema?: Record<string, unknown> | Array<Record<string, unknown>>;
}

const SITE_NAME = "Boreal Financial";
const BASE_URL = "https://borealfinancial.ca";

function getCanonicalUrl(url?: string) {
  if (url) {
    return url;
  }

  const path = typeof window !== "undefined" ? `${window.location.pathname}${window.location.search}` : "/";
  return `${BASE_URL}${path}`;
}

function getFullTitle(title: string) {
  return title.includes(`| ${SITE_NAME}`) ? title : `${title} | ${SITE_NAME}`;
}

export function SEO({ title, description, url, image, schema }: SEOProps) {
  const canonicalUrl = getCanonicalUrl(url);
  const fullTitle = getFullTitle(title);
  const schemaArray = Array.isArray(schema) ? schema : schema ? [schema] : [];

  return (
    <Helmet>
      <title>{fullTitle}</title>

      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta name="robots" content="index,follow" />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={SITE_NAME} />
      {image ? <meta property="og:image" content={image} /> : null}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {image ? <meta name="twitter:image" content={image} /> : null}

      {schemaArray.map((item, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(item)}
        </script>
      ))}
    </Helmet>
  );
}
