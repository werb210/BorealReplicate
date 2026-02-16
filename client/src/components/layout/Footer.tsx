export default function Footer() {
  return (
    <footer className="bg-[#071a2f] text-gray-300 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-8">
        <div>
          <h3 className="text-white font-semibold mb-4">Boreal Financial</h3>
          <p>Structured non-bank financing for Canadian businesses.</p>
        </div>

        <div>
          <h4 className="text-white mb-4">Explore</h4>
          <ul className="space-y-2">
            <li><a href="/products">Products</a></li>
            <li><a href="/industries">Industries</a></li>
            <li><a href="/credit-readiness">Credit Readiness</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white mb-4">Contact</h4>
          <ul className="space-y-2">
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/apply">Apply</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
