import { Helmet } from "react-helmet";

type Props = {
  title: string;
  description: string;
  canonical?: string;
  url?: string;
  schema?: Record<string, unknown> | Array<Record<string, unknown>>;
  jsonLd?: Record<string, unknown> | Array<Record<string, unknown>>;
  noindex?: boolean;
};

function getSchema(props: Props) {
  return props.schema ?? props.jsonLd;
}

export default function SEO({ title, description, canonical, url, noindex }: Props) {
  const href = canonical ?? url ?? (typeof window !== "undefined" ? window.location.href : undefined);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow"} />
      {href ? <link rel="canonical" href={href} /> : null}
    </Helmet>
  );
}

export function Seo(props: Props) {
  const schema = getSchema(props);

  return (
    <>
      <SEO {...props} />
      {Array.isArray(schema)
        ? schema.map((item, index) => (
            <script key={index} type="application/ld+json">
              {JSON.stringify(item)}
            </script>
          ))
        : schema
          ? <script type="application/ld+json">{JSON.stringify(schema)}</script>
          : null}
    </>
  );
}
