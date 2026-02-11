import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { SEO } from "@/seo/SEO";

type Reason = "General" | "Funding" | "Issue";

type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  reason: Reason;
};

const initialForm: ContactFormData = {
  name: "",
  email: "",
  phone: "",
  company: "",
  message: "",
  reason: "General",
};

export default function Contact() {
  const query = useMemo(() => new URLSearchParams(window.location.search), []);
  const reasonQuery = query.get("reason");
  const focusQuery = query.get("focus");
  const formRef = useRef<HTMLFormElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [submission, setSubmission] = useState<ContactFormData | null>(null);
  const [formData, setFormData] = useState<ContactFormData>({
    ...initialForm,
    reason: reasonQuery === "issue" ? "Issue" : reasonQuery === "funding" ? "Funding" : "General",
  });

  useEffect(() => {
    if (focusQuery === "form") {
      window.setTimeout(() => formRef.current?.querySelector<HTMLInputElement>("input")?.focus(), 0);
    }
  }, [focusQuery]);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setSubmission(formData);
    setSubmitted(true);
  };

  return (
    <section className="mx-auto max-w-3xl px-4 py-12">
      <SEO title="Contact Boreal | Boreal Financial" description="Contact Boreal to request a call, discuss funding options, or report an issue." />
      <h1 className="text-3xl font-bold">Contact Boreal</h1>
      <p className="mt-2 text-slate-600">Send us a request and our team will follow up. You can also use this form to request a call or report an issue.</p>

      {submitted ? (
        <div className="mt-6 rounded-lg border bg-slate-50 p-4">
          <h2 className="text-xl font-semibold">Submitted</h2>
          <p className="mt-1 text-sm text-slate-600">Your request was saved in this demo build.</p>
          {submission ? <p className="mt-2 text-sm text-slate-700">Reason: {submission.reason}</p> : null}
        </div>
      ) : null}

      <form ref={formRef} onSubmit={handleSubmit} className="mt-6 space-y-3 rounded-lg border p-4">
        {(["name", "email", "phone", "company"] as const).map((field) => (
          <input
            key={field}
            required={field !== "phone" && field !== "company"}
            value={formData[field]}
            onChange={(event) => setFormData((current) => ({ ...current, [field]: event.target.value }))}
            placeholder={field[0].toUpperCase() + field.slice(1)}
            className="w-full rounded-md border px-3 py-2"
          />
        ))}
        <select
          value={formData.reason}
          onChange={(event) => setFormData((current) => ({ ...current, reason: event.target.value as Reason }))}
          className="w-full rounded-md border px-3 py-2"
        >
          <option>General</option>
          <option>Funding</option>
          <option>Issue</option>
        </select>
        <textarea
          required
          value={formData.message}
          onChange={(event) => setFormData((current) => ({ ...current, message: event.target.value }))}
          placeholder="Message"
          className="min-h-28 w-full rounded-md border px-3 py-2"
        />
        <button type="submit" className="rounded-md bg-slate-900 px-4 py-2 font-semibold text-white">Submit</button>
      </form>
    </section>
  );
}
