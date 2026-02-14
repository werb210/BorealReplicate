import { useEffect, useMemo } from "react";
import { APPLY_URL } from "@/config/site";
import { buildApplyUrl, getReadinessSessionToken } from "@/utils/session";

export default function Apply() {
  const applyHref = useMemo(() => buildApplyUrl(APPLY_URL, getReadinessSessionToken()), []);

  useEffect(() => {
    window.location.href = applyHref;
  }, [applyHref]);

  return (
    <section className="mx-auto max-w-xl px-4 py-16">
      <h1 className="text-3xl font-bold">Redirecting to Application</h1>
      <p className="mt-3 text-slate-600">
        If you are not redirected, <a href={applyHref} className="underline">click here to continue</a>.
      </p>
    </section>
  );
}
