import { APPLY_URL } from "@/config/site";

export default function Distribution() {
  return (
    <div className="bg-slate-900 py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h1 className="mb-6 text-5xl font-semibold">Capital Built for Distribution Velocity</h1>
        <p className="text-lg text-gray-300">Inventory lines. PO funding. Receivables acceleration.</p>
        <a href={APPLY_URL} className="mt-8 inline-block rounded-md bg-white px-6 py-3 text-black">Apply Now</a>
      </div>
    </div>
  );
}
