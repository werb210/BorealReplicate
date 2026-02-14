import { useParams } from "wouter";

export default function ProductPage() {
  const params = useParams();
  const slug = params?.slug ?? "product";

  return (
    <div className="min-h-screen bg-black pb-16 pt-24 text-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h1 className="mb-6 text-4xl font-bold">{slug}</h1>

            <p className="mb-6 text-gray-300">
              Designed to provide flexible capital aligned with operational needs and growth objectives.
            </p>

            <ul className="space-y-2 text-gray-400">
              <li>• Typical Terms: 6–60 months</li>
              <li>• Competitive market-based rates</li>
              <li>• Structured around cash flow</li>
              <li>• Fast underwriting</li>
            </ul>

            <div className="mt-8">
              <a href="https://client.boreal.financial" className="rounded bg-blue-600 px-6 py-3">
                Apply Now
              </a>
            </div>
          </div>

          <div>
            <img src={`/images/products/${slug}.jpg`} alt={slug} className="rounded-xl shadow-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
