import { useMemo, useState } from "react";
import { calculateReadinessScore, type ReadinessInput } from "@/utils/readinessScore";
import { trackEvent } from "@/utils/analytics";

interface CapitalReadinessModalProps {
  open: boolean;
  onClose: () => void;
}

const defaultState: ReadinessInput = {
  yearsInBusiness: 0,
  annualRevenue: 0,
  creditScore: 620,
  industryRisk: "medium",
};

export default function CapitalReadinessModal({ open, onClose }: CapitalReadinessModalProps) {
  const [values, setValues] = useState<ReadinessInput>(defaultState);
  const [submitted, setSubmitted] = useState(false);

  const score = useMemo(() => calculateReadinessScore(values), [values]);

  const category = score >= 80 ? "Strong" : score >= 60 ? "Moderate" : "Needs structuring";

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4" role="dialog" aria-modal="true">
      <div className="w-full max-w-xl rounded-xl bg-white p-6 shadow-2xl">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold">Capital Readiness Score</h3>
          <button type="button" onClick={onClose} className="rounded border px-3 py-1 text-sm">Close</button>
        </div>

        <div className="mt-5 grid gap-3 md:grid-cols-2">
          <label className="text-sm font-medium">
            Years in Business
            <input className="mt-1 w-full rounded border px-3 py-2" type="number" min={0} value={values.yearsInBusiness} onChange={(e) => setValues((prev) => ({ ...prev, yearsInBusiness: Number(e.target.value) }))} />
          </label>
          <label className="text-sm font-medium">
            Annual Revenue (USD)
            <input className="mt-1 w-full rounded border px-3 py-2" type="number" min={0} value={values.annualRevenue} onChange={(e) => setValues((prev) => ({ ...prev, annualRevenue: Number(e.target.value) }))} />
          </label>
          <label className="text-sm font-medium">
            Credit Score
            <input className="mt-1 w-full rounded border px-3 py-2" type="number" min={300} max={850} value={values.creditScore} onChange={(e) => setValues((prev) => ({ ...prev, creditScore: Number(e.target.value) }))} />
          </label>
          <label className="text-sm font-medium">
            Industry Risk
            <select className="mt-1 w-full rounded border px-3 py-2" value={values.industryRisk} onChange={(e) => setValues((prev) => ({ ...prev, industryRisk: e.target.value as "low" | "medium" | "high" }))}>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </label>
        </div>

        <button
          type="button"
          className="mt-4 rounded bg-slate-900 px-4 py-2 font-semibold text-white"
          onClick={() => {
            setSubmitted(true);
            trackEvent("readiness_score_calculated", {
              score,
              category,
              source: "homepage",
            });
          }}
        >
          Calculate
        </button>

        {submitted ? (
          <div className="mt-4 rounded-lg border bg-slate-50 p-4">
            <div className="mb-2 flex items-center justify-between text-sm">
              <span className="font-medium">Score</span>
              <span className="font-bold">{score}/100 • {category}</span>
            </div>
            <div className="h-3 w-full rounded-full bg-slate-200">
              <div className="h-3 rounded-full bg-orange-500" style={{ width: `${score}%` }} />
            </div>
            <a href="/apply" className="mt-4 inline-block rounded bg-orange-500 px-4 py-2 text-white" onClick={() => trackEvent("apply_clicked", { source: "readiness_modal" })}>
              Apply
            </a>
          </div>
        ) : null}
      </div>
    </div>
  );
}
