import { SEO } from "@/seo/SEO";

interface LegacySEOProps {
  title: string;
  description: string;
  url?: string;
  image?: string;
  schema?: Record<string, unknown> | Array<Record<string, unknown>>;
  canonical?: string;
  jsonLd?: Record<string, unknown> | Array<Record<string, unknown>>;
  noindex?: boolean;
}

function normalizeSchema(props: LegacySEOProps) {
  return props.schema ?? props.jsonLd;
}

function normalizeUrl(props: LegacySEOProps) {
  return props.url ?? props.canonical;
}

export default function LegacySEO(props: LegacySEOProps) {
  return (
    <SEO
      title={props.title}
      description={props.description}
      url={normalizeUrl(props)}
      image={props.image}
      schema={normalizeSchema(props)}
      noindex={props.noindex}
    />
  );
}

export function Seo(props: LegacySEOProps) {
  return (
    <SEO
      title={props.title}
      description={props.description}
      url={normalizeUrl(props)}
      image={props.image}
      schema={normalizeSchema(props)}
      noindex={props.noindex}
    />
  );
}
