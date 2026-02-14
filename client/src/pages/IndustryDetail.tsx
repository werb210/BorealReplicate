import { industries } from "@/data/industries";

type Props = { slug: string };

export default function IndustryDetail({ slug }: Props) {
  const industry = industries.find((item) => item.slug === slug);

  if (!industry) return <div className="p-20">Not found</div>;

  return (
    <div className="min-h-screen bg-black pb-16 pt-24 text-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h1 className="mb-6 text-4xl font-bold">Financing Solutions for {industry.name}</h1>
            <p className="mb-6 text-gray-300">
              We understand the capital challenges facing the {industry.name} industry — working capital gaps,
              equipment upgrades, receivables cycles, growth expansion and operational liquidity.
            </p>
            <p className="text-gray-400">
              Boreal structures institutional, banking, and private capital solutions aligned with your cash flow
              realities.
            </p>
          </div>
          <div>
            <img src={industry.heroImage} alt={industry.name} className="rounded-xl shadow-2xl" />
          </div>
        </div>

        <div className="mt-16 grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-semibold">Common Challenges</h2>
            <ul className="space-y-2 text-gray-400">
              <li>• Cash flow timing gaps</li>
              <li>• Equipment modernization</li>
              <li>• Growth capital needs</li>
              <li>• Supplier / A/R strain</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold">Capital Solutions</h2>
            <ul className="space-y-2 text-gray-400">
              <li>• Lines of Credit</li>
              <li>• Term Loans</li>
              <li>• Equipment Financing</li>
              <li>• PO Financing</li>
              <li>• Asset-Based Lending</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
