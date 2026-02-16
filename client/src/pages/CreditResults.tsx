import { getReadinessSessionToken } from "@/utils/session";

export default function CreditResults() {
  const sessionToken = getReadinessSessionToken() ?? "";

  return (
    <div className="py-24 text-center">
      <h1 className="mb-6 text-4xl font-semibold">Preliminary Assessment Complete</h1>

      <p className="mb-10 text-slate-400">Based on your responses, you may qualify for structured financing options.</p>

      <a href={`https://client.boreal.financial/apply?readiness=${sessionToken}`} className="btn-primary">
        Continue to Full Application
      </a>
    </div>
  );
}
