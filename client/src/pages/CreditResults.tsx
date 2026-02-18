const CREDIT_RESULT_STORAGE_KEY = "boreal_credit_readiness_result";

function loadResult() {
  const stored = sessionStorage.getItem(CREDIT_RESULT_STORAGE_KEY);
  if (!stored) {
    return { score: 72, tier: "yellow" as const };
  }

  try {
    const parsed = JSON.parse(stored) as { score?: number; tier?: "green" | "yellow" | "red" };
    if (typeof parsed.score === "number" && parsed.tier) {
      return { score: Math.max(0, Math.min(100, parsed.score)), tier: parsed.tier };
    }
  } catch {
    // ignore malformed payloads
  }

  return { score: 72, tier: "yellow" as const };
}

export default function CreditResults() {
  const { score, tier } = loadResult();
  const isGreen = tier === "green" || score >= 80;
  const isYellow = !isGreen && (tier === "yellow" || score >= 60);

  const cardAccentClasses = isGreen
    ? "border border-emerald-400/60 shadow-[0_0_40px_rgba(16,185,129,0.2)]"
    : isYellow
      ? "border border-amber-300/60 shadow-[0_0_28px_rgba(251,191,36,0.16)]"
      : "border border-white/10";

  const scoreBarClasses = isGreen
    ? "bg-emerald-400"
    : isYellow
      ? "bg-amber-400"
      : "bg-rose-400";

  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-[#0b1220] px-6 text-white">
      <div className={`w-full max-w-xl rounded-2xl bg-[#0E1A2B] p-8 text-center ${cardAccentClasses}`}>
        <h2 className="mb-4 text-2xl font-semibold">Credit Readiness Assessment</h2>
        <div className="mb-6 overflow-hidden rounded-full bg-white/10">
          <div className={`h-2 rounded-full transition-all ${scoreBarClasses}`} style={{ width: `${score}%` }} />
        </div>


        {isGreen && (
          <p className="mb-6 text-white/80">
            Congratulations! You are strongly positioned to apply for capital or equipment. Please proceed to the application form and we will begin the underwriting process and build your application package for funding.
          </p>
        )}

        {isYellow && (
          <p className="mb-6 text-white/80">
            Congratulations! You are positioned to apply. There may be some areas we need to investigate further and clarify during underwriting, but structured capital options are available.
          </p>
        )}

        {!isGreen && !isYellow && (
          <p className="mb-6 text-white/80">
            Your profile may require additional strengthening before funding. Connect with an advisor and we will outline practical steps to improve readiness.
          </p>
        )}

        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://client.boreal.financial"
            className="flex h-11 min-w-[170px] items-center justify-center rounded-full bg-blue-600 px-6 font-medium text-white transition hover:bg-blue-700"
          >
            Apply Now
          </a>

          <a
            href="/contact"
            className="flex h-11 min-w-[170px] items-center justify-center rounded-full border border-white/30 px-6 text-white/80 transition hover:bg-white/10"
          >
            Speak With Advisor
          </a>
        </div>
      </div>
    </div>
  );
}
