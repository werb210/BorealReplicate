import { Helmet } from "@/lib/helmetAsync";

interface SEOProps {
  title: string;
  description: string;
  schema?: Record<string, unknown> | Array<Record<string, unknown>>;
}

export function SEO({ title, description, schema }: SEOProps) {
  const schemaArray = Array.isArray(schema) ? schema : schema ? [schema] : [];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {schemaArray.map((item, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(item)}
        </script>
      ))}
    </Helmet>
  );
}
