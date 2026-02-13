import { useEffect } from "react";
import { APPLY_URL } from "@/config/site";

export default function Apply() {
  useEffect(() => {
    window.location.href = APPLY_URL;
  }, []);

  return (
    <section className="mx-auto max-w-xl px-4 py-16">
      <h1 className="text-3xl font-bold">Redirecting to Application</h1>
      <p className="mt-3 text-slate-600">
        If you are not redirected, <a href={APPLY_URL} className="underline">click here to continue</a>.
      </p>
    </section>
  );
}
