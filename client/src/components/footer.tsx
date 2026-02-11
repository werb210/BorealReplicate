export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-200 mt-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 grid gap-6 md:grid-cols-3">
        <div>
          <h2 className="font-semibold text-lg">Boreal Financial</h2>
          <p className="text-sm text-slate-400 mt-2">
            Structured lending marketplace helping businesses across Canada and the United States.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-sm uppercase tracking-wide">Explore</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            <li><a href="/how-it-works">How It Works</a></li>
            <li><a href="/products/term-loans">Products</a></li>
            <li><a href="/industries/construction">Industries</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-sm uppercase tracking-wide">Start</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            <li><a href="/apply">Start Application</a></li>
            <li><a href="/staff-login">Staff Login</a></li>
            <li><a href="/lender-login">Lender Login</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
