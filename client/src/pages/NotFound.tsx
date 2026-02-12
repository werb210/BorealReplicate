import { Link } from "wouter";
import { SEO } from "@/seo/SEO";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-2xl px-4 py-16 text-center">
      <SEO
        title="Page Not Found"
        description="The page you requested could not be found. Return to Boreal Financial's homepage to continue."
      />
      <h1 className="text-3xl font-bold">Page not found</h1>
      <p className="mt-3 text-slate-600">We couldn't find that page.</p>
      <Link href="/" className="mt-5 inline-block rounded-md bg-slate-900 px-4 py-2 text-white">Back to Home</Link>
    </section>
  );
}
