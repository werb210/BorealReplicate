export function Footer() {
  return (
    <footer className="footer border-t border-slate-200 bg-slate-100 py-12 md:py-16">
      <div className="container footer-grid">
        <div>
          <img src="/images/100_100.png" alt="Boreal Financial" className="h-12 w-auto object-contain" />
          <h4 className="text-slate-900">Boreal Financial</h4>
          <p className="mt-2 text-sm leading-6 text-slate-600">Structured non-bank financing for Canadian businesses.</p>
        </div>

        <div>
          <h4 className="text-slate-900">Explore</h4>
          <a href="/how-it-works">How it Works</a>
          <a href="/industries">Industries</a>
          <a href="/podcasts">Podcasts</a>
        </div>

        <div>
          <h4 className="text-slate-900">Tools</h4>
          <a href="/capital-readiness">Capital Readiness Score</a>
          <a href="/product-comparison">Product Comparison</a>
          <a href="/contact">Contact Us</a>
        </div>
      </div>
    </footer>
  );
}
