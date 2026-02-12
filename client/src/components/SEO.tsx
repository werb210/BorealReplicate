import { Helmet } from "react-helmet";

export default function SEO({ title, description }: any) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={`https://canadianbusinessfinancing.com${window.location.pathname}`} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="/images/hero.jpg" />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Boreal Financial",
          url: "https://canadianbusinessfinancing.com",
          logo: "https://canadianbusinessfinancing.com/images/logo.png",
        })}
      </script>
    </Helmet>
  );
}

export function Seo({ title, description }: any) {
  return <SEO title={title} description={description} />;
}
