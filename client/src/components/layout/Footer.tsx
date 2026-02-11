import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 text-sm text-slate-700 md:grid-cols-3">
        <div>
          <h3 className="mb-3 font-semibold text-slate-900">About</h3>
          <p>Boreal Financial — strategic capital advisory and marketplace financing for Canadian businesses.</p>
        </div>

        <div>
          <h3 className="mb-3 font-semibold text-slate-900">Navigate</h3>
          <ul className="space-y-2">
            <li><Link href="/products/term-loans" className="hover:text-orange-600">Products</Link></li>
            <li><Link href="/industries/construction" className="hover:text-orange-600">Industries</Link></li>
            <li><Link href="/apply" className="hover:text-orange-600">Apply</Link></li>
            <li><Link href="/lender-login" className="hover:text-orange-600">Lender / Referral Login</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 font-semibold text-slate-900">Legal</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-orange-600">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-orange-600">Terms of Use</a></li>
            <li>
              Contact: <a className="font-medium text-slate-800 hover:underline" href="mailto:info@boreal.financial">info@boreal.financial</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
