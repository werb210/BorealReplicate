export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-slate-600">
        <p>© {new Date().getFullYear()} Boreal Financial. Structured lending marketplace for Canada and the United States.</p>
      </div>
    </footer>
  );
}
