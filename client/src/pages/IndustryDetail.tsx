import { industries } from "@/data/industries";

type Props = { slug: string };

export default function IndustryDetail({ slug }: Props) {
  const industry = industries.find((item) => item.slug === slug);

  if (!industry) return <div className="bg-black px-6 py-16 text-white">Not found</div>;

  return (
    <section className="bg-black py-20 text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
        <div>
          <h1 className="mb-6 text-4xl font-bold">Financing Solutions for {industry.name}</h1>
          <p className="text-lg leading-relaxed text-gray-300">
            Businesses in {industry.name} face liquidity pressure, growth constraints, and capital access complexity.
            Boreal structures tailored facilities including Lines of Credit, Term Loans, Factoring, PO Financing and
            Asset-Based Lending.
          </p>
        </div>

        <img src={industry.image} alt={industry.name} className="rounded shadow-xl" />
      </div>
    </section>
  );
}
