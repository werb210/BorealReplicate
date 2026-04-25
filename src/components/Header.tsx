import { Link, NavLink } from "react-router-dom";

const APPLY_URL = (import.meta.env.VITE_APPLY_URL as string) ?? "https://client.boreal.financial";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#020817]/95 backdrop-blur">
      <div className="container-bf flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/images/boreal-logo.svg"
            alt="Boreal Financial"
            className="h-8"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = "/images/boreal-logo.png";
            }}
          />
        </Link>
        <nav className="hidden gap-6 text-sm text-white/85 md:flex">
          <NavLink to="/products" className="hover:text-white">Products</NavLink>
          <NavLink to="/industries" className="hover:text-white">Industries</NavLink>
          <NavLink to="/credit-readiness" className="hover:text-white">Credit Readiness</NavLink>
          <NavLink to="/about" className="hover:text-white">About</NavLink>
          <NavLink to="/contact" className="hover:text-white">Contact</NavLink>
        </nav>
        <a
          href={APPLY_URL}
          className="rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600"
        >
          Apply now
        </a>
      </div>
    </header>
  );
}
