import { Helmet } from "react-helmet";

export default function SEO({ title, description }: any) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={`https://borealfinancial.com${window.location.pathname}`} />
      <meta name="robots" content="index,follow" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="/images/hero.jpg" />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Boreal Financial",
          url: "https://borealfinancial.com",
          logo: "https://borealfinancial.com/images/logo.png",
        })}
      </script>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FinancialService",
          name: "Boreal Financial",
          areaServed: "Canada",
          serviceType: "Business Financing Marketplace",
          url: "https://borealfinancial.com",
        })}
      </script>
    </Helmet>
  );
}

export function Seo({ title, description }: any) {
  return <SEO title={title} description={description} />;
}
