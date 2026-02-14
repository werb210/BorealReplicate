import IndustryCard from "@/components/IndustryCard";

const industries = [
  "Construction",
  "Manufacturing",
  "Retail",
  "Healthcare",
  "Distribution",
  "Media",
];

export default function Industries() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <h1 className="mb-12 text-4xl font-semibold">Industry Financing Solutions</h1>

        <div className="grid gap-10 md:grid-cols-3">
          {industries.map((industry) => (
            <IndustryCard key={industry} industry={industry} />
          ))}
        </div>
      </div>
    </div>
  );
}
