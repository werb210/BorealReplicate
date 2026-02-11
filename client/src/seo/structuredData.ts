export type Schema = Record<string, unknown>;

const baseUrl = "https://borealfinancial.com";

export function financialServiceSchema(serviceName: string, description: string): Schema {
  return {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: serviceName,
    description,
    areaServed: ["Canada", "United States"],
    provider: {
      "@type": "Organization",
      name: "Boreal Financial",
      url: baseUrl,
    },
  };
}

export function breadcrumbSchema(items: Array<{ name: string; path: string }>): Schema {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${baseUrl}${item.path}`,
    })),
  };
}

export function faqSchema(faqs: Array<{ question: string; answer: string }>): Schema {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
