import { Helmet } from "react-helmet-async";

type JsonLd = Record<string, unknown> | Array<Record<string, unknown>>;

interface SeoProps {
  title: string;
  description: string;
  canonical: string;
  ogType?: "website" | "article";
  image?: string;
  twitterCard?: "summary" | "summary_large_image";
  jsonLd?: JsonLd;
}

const DEFAULT_OG_IMAGE = "https://borealfinancial.com/assets/og-image.png";

export function Seo({
  title,
  description,
  canonical,
  ogType = "website",
  image = DEFAULT_OG_IMAGE,
  twitterCard = "summary_large_image",
  jsonLd
}: SeoProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {jsonLd ? <script type="application/ld+json">{JSON.stringify(jsonLd)}</script> : null}
    </Helmet>
  );
}
