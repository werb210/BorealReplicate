import { AlertCircle } from "lucide-react";
import { Seo } from "@/components/Seo";
import { SiteLayout } from "@/components/SiteLayout";

export default function NotFound() {
  return (
    <SiteLayout>
      <Seo title="Page Not Found | Boreal Financial" description="The page you requested could not be found." canonical="https://borealfinancial.com/404" />
      <section className="py-24">
        <div className="mx-auto max-w-xl px-4 text-center">
          <AlertCircle className="w-10 h-10 mx-auto text-primary" />
          <h1 className="text-3xl font-semibold mt-4">404: Page not found</h1>
          <p className="mt-3 text-muted-foreground">The URL you entered is unavailable. Explore products or start an application instead.</p>
          <div className="mt-6 flex justify-center gap-3">
            <a className="underline" href="/">Home</a>
            <a className="underline" href="/apply">Apply</a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
