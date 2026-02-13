import { industries } from "@/data/industries";

type Props = { slug: string };

export default function IndustryDetail({ slug }: Props) {
  const industry = industries.find((item) => item.slug === slug);

  if (!industry) return <div className="p-20">Not found</div>;

  return (
    <div>
      <div
        className="h-[60vh] flex items-center justify-center text-white"
        style={{
          backgroundImage: `url(${industry.heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-black/50 w-full h-full flex items-center justify-center">
          <h1 className="text-5xl font-semibold text-center">
            {industry.name} Financing
          </h1>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16 space-y-12">
        <p className="text-lg text-gray-200 leading-relaxed">{industry.summary}</p>

        <div>
          <h2 className="text-2xl font-semibold mb-6">Products Available</h2>
          <ul className="grid md:grid-cols-2 gap-6 text-gray-200">
            <li>• Line of Credit</li>
            <li>• Term Loan</li>
            <li>• Equipment Financing</li>
            <li>• Accounts Receivable Financing</li>
          </ul>
        </div>

        <div className="pt-8">
          <a
            href="https://client.boreal.financial"
            className="inline-block bg-black text-white px-6 py-3 rounded"
          >
            Apply Now
          </a>
        </div>
      </div>
    </div>
  );
}
