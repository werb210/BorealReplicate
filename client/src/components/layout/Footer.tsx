export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-8 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Boreal Financial. Marketplace lending for Canadian businesses.</p>
        <p>
          Contact: <a className="font-medium text-slate-800 hover:underline" href="mailto:info@boreal.financial">info@boreal.financial</a>
        </p>
      </div>
    </footer>
  );
}
