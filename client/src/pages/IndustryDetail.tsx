import { APPLY_URL } from "@/config/site";
import { industries } from "@/data/industries";

type Props = { slug: string };

export default function IndustryDetail({ slug }: Props) {
  const industry = industries.find((item) => item.slug === slug);

  if (!industry) return <div className="p-20">Not found</div>;

  return (
    <div className="text-white">
      <section className="bg-black px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h1 className="mb-6 text-4xl font-semibold">Capital Solutions for {industry.name}</h1>
          <p className="max-w-2xl text-lg text-gray-300">
            Industry-specific financing strategies designed for growth.
          </p>
        </div>
      </section>

      <section className="section mx-auto max-w-5xl">
        <h2 className="mb-4 text-2xl font-semibold">Industry Pain Points</h2>
        <p className="text-gray-300">{industry.problems}</p>
      </section>

      <section className="section mx-auto max-w-5xl border-t border-white/10">
        <h2 className="mb-4 text-2xl font-semibold">Product Solutions</h2>
        <p className="text-gray-300">{industry.solutions}</p>
      </section>

      <section className="section mx-auto max-w-5xl border-t border-white/10">
        <a href={APPLY_URL} className="inline-block rounded bg-white px-6 py-3 font-semibold text-black">
          Apply Now
        </a>
      </section>
    </div>
  );
}
