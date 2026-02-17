import { APPLY_URL } from "@/config/site";

export function Footer() {
  return (
    <footer className="mt-16 bg-slate-950 text-slate-200">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-12 sm:px-6 md:grid-cols-3 md:py-16 lg:px-8">
        <div>
          <img src="/images/100_100.png" alt="Boreal Financial" className="h-12 w-auto object-contain" />
          <h2 className="text-lg font-semibold">Boreal Financial</h2>
          <p className="mt-2 text-sm text-slate-400">
            Structured lending marketplace helping businesses across Canada and the United States.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide">Explore</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            <li><a href="/how-it-works">How It Works</a></li>
            <li><a href="/products/term-loans">Products</a></li>
            <li><a href="/industries/construction">Industries</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide">Start</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            <li><a href={APPLY_URL}>Start Capital Review</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/capital-readiness-score">Capital Readiness Score</a></li>
            <li><a href="/product-comparison">Product Comparison</a></li>
            <li><a href="/staff-login">Staff Login</a></li>
            <li><a href="/lender-login">Lender Login</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
