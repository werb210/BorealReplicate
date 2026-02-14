import { industries } from "@/data/industries";

type Props = { slug: string };

export default function IndustryDetail({ slug }: Props) {
  const industry = industries.find((item) => item.slug === slug);

  if (!industry) return <div className="p-20">Not found</div>;

  return (
    <section className="bg-black py-16 text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 md:grid-cols-2">
        <div>
          <h1 className="mb-6 text-4xl font-bold">{industry.name}</h1>
          <p className="mb-4 text-lg">Businesses in {industry.name} face liquidity pressure, growth constraints, and capital access complexity.</p>
          <p>
            Boreal structures tailored facilities including Lines of Credit, Term Loans, Factoring, PO Financing and
            Asset Based Lending.
          </p>
        </div>

        <img src={industry.image} alt={industry.name} className="rounded shadow-lg" />
      </div>
    </section>
  );
}
