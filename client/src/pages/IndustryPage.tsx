import { useParams } from "wouter";

export default function IndustryPage() {
  const params = useParams();
  const industry = params?.slug ?? "industry";

  return (
    <section className="bg-black py-16 text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 md:grid-cols-2">
        <div>
          <h1 className="mb-6 text-4xl font-bold">{industry}</h1>
          <p className="mb-4 text-lg">
            Businesses in {industry} face liquidity pressure, growth constraints, and capital access complexity.
          </p>
          <p>
            Boreal structures tailored facilities including Lines of Credit, Term Loans, Factoring, PO Financing and
            Asset Based Lending.
          </p>
        </div>

        <img src={`/images/industries/${industry}.jpg`} className="rounded shadow-lg" alt={industry} />
      </div>
    </section>
  );
}
