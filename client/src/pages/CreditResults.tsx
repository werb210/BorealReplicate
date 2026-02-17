import { Link } from "wouter";

const CREDIT_RESULT_STORAGE_KEY = "boreal_credit_readiness_result";

function loadResult() {
  const stored = sessionStorage.getItem(CREDIT_RESULT_STORAGE_KEY);
  if (!stored) {
    return { score: 72, status: "yellow" as const };
  }

  try {
    const parsed = JSON.parse(stored) as { score?: number; tier?: "green" | "yellow" | "red" };
    if (typeof parsed.score === "number" && parsed.tier) {
      return { score: Math.max(0, Math.min(100, parsed.score)), status: parsed.tier };
    }
  } catch {
    // noop
  }

  return { score: 72, status: "yellow" as const };
}

export default function CreditResults() {
  const { score, status } = loadResult();

  const colors = {
    green: "bg-green-500",
    yellow: "bg-yellow-500",
    red: "bg-red-500"
  };

  const messaging = {
    green: "You are a prime candidate for funding based on the information provided. While no approval is guaranteed, your profile aligns strongly with institutional underwriting standards.",
    yellow: "You are positioned to apply. There may be areas we need to strengthen or clarify during underwriting, but structured capital options are available.",
    red: "There are material weaknesses that may limit approval today. That said, we can identify corrective steps and position you for funding."
  };

  return (
    <div className="h-screen flex items-center justify-center bg-[#0b1220] text-white px-6">
      <div className="w-full max-w-2xl bg-[#111a2e] rounded-xl p-10 text-center space-y-8">
        <h1 className="text-3xl font-semibold">Credit Readiness Assessment</h1>

        <div className="w-full h-4 bg-white/10 rounded-full overflow-hidden">
          <div className={`${colors[status]} h-full`} style={{ width: `${score}%` }} />
        </div>

        <p className="text-white/80">{messaging[status]}</p>

        <div className="flex gap-6 justify-center pt-6">
          <div>
            <Link href="/apply" className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full">Access Structured Capital</Link>
            <p className="cta-microcopy mt-2 text-xs text-white/70">Confidential. No impact to credit. 2-minute intake.</p>
          </div>
          <Link href="/contact" className="border border-white/20 px-6 py-3 rounded-full">Speak With Advisor</Link>
        </div>
      </div>
    </div>
  );
}
