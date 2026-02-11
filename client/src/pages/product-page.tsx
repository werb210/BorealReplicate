import { useRoute } from "wouter";
import { Seo } from "@/components/Seo";
import { SiteLayout } from "@/components/SiteLayout";
import { Button } from "@/components/ui/button";
import { breadcrumbJsonLd, financialServiceJsonLd, organizationJsonLd, webPageJsonLd } from "@/lib/structured-data";
import { getProduct } from "@/data/marketplace";
import NotFound from "@/pages/not-found";

export default function ProductPage() {
  const [, params] = useRoute<{ slug: string }>("/products/:slug");
  const product = params?.slug ? getProduct(params.slug) : undefined;

  if (!product) {
    return <NotFound />;
  }

  const title = `${product.name} | Boreal Financial`;
  const description = product.longDescription;
  const path = `/products/${product.slug}`;

  return (
    <SiteLayout>
      <Seo
        title={title}
        description={description}
        canonical={`https://borealfinancial.com${path}`}
        jsonLd={[
          organizationJsonLd,
          webPageJsonLd(path, title, description),
          financialServiceJsonLd(product.name, description, path),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Products", path: "/products/term-loans" },
            { name: product.name, path },
          ]),
        ]}
      />

      <section className="py-16 border-b">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-semibold">{product.name}</h1>
          <p className="mt-4 text-muted-foreground">{product.longDescription}</p>
          <div className="mt-8 flex gap-3 flex-col sm:flex-row">
            <Button asChild><a href="/apply">Start Application</a></Button>
            <Button asChild variant="outline"><a href="/how-it-works">How It Works</a></Button>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
