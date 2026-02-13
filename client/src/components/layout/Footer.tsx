export function Footer() {
  return (
    <footer className="footer border-t border-slate-200 bg-slate-50 py-10">
      <div className="container footer-grid">
        <div>
          <h4>Boreal Financial</h4>
          <p className="text-sm text-slate-600">Structured non-bank financing for Canadian businesses.</p>
        </div>

        <div>
          <h4>Explore</h4>
          <a href="/how-it-works">How it Works</a>
          <a href="/industries">Industries</a>
        </div>

        <div>
          <h4>Tools</h4>
          <a href="/capital-readiness-score">Capital Readiness Score</a>
          <a href="/product-comparison">Product Comparison</a>
          <a href="/contact">Contact Us</a>
        </div>
      </div>
    </footer>
  );
}
