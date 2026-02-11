const BASE_URL = "https://borealfinancial.com";

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Boreal Financial",
  url: BASE_URL,
  logo: `${BASE_URL}/assets/og-image.png`,
  sameAs: [
    "https://www.linkedin.com/company/borealfinancial"
  ]
};

export const coreFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How quickly can Boreal Financial provide funding options?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most applicants receive lender match options within 24 to 48 hours after submitting complete documentation."
      }
    },
    {
      "@type": "Question",
      name: "Which businesses does Boreal Financial support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Boreal Financial supports construction, manufacturing, logistics, and other B2B businesses across Canada and the United States."
      }
    },
    {
      "@type": "Question",
      name: "What funding products are available?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Available products include term loans, lines of credit, factoring, purchase order financing, and equipment financing."
      }
    }
  ]
};

export function financialServiceJsonLd(name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: `Boreal Financial ${name}`,
    description,
    url: `${BASE_URL}${path}`,
    provider: {
      "@type": "Organization",
      name: "Boreal Financial",
      url: BASE_URL
    },
    areaServed: ["CA", "US"],
    serviceType: name
  };
}
