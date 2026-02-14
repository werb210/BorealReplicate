import { FormEvent, useEffect, useState } from "react";
import { SEO } from "@/seo/SEO";
import { trackEvent } from "@/utils/analytics";
import { scrollToTop } from "@/utils/scrollToTop";
import { safeFetch } from "@/lib/safeFetch";

type ContactFormData = {
  companyName: string;
  fullName: string;
  email: string;
  mobilePhone: string;
};

const initialForm: ContactFormData = {
  companyName: "",
  fullName: "",
  email: "",
  mobilePhone: "",
};

function splitName(fullName: string) {
  const trimmed = fullName.trim();
  if (!trimmed) return { firstName: "", lastName: "" };
  const parts = trimmed.split(/\s+/);
  const firstName = parts.shift() ?? "";
  const lastName = parts.join(" ") || "N/A";
  return { firstName, lastName };
}

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    scrollToTop();
  }, []);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (submitting) return;

    setSubmitting(true);
    setError(null);

    const { firstName, lastName } = splitName(formData.fullName);

    try {
      const response = await safeFetch("/api/contact/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          company: formData.companyName,
          firstName,
          lastName,
          email: formData.email,
          phone: formData.mobilePhone,
        }),
      });

      if (!response.ok) {
        throw new Error("Unable to submit contact form.");
      }

      trackEvent("contact_form_submitted", {
        source: "contact_page",
        company: formData.companyName,
      });

      setShowSuccess(true);
      setFormData(initialForm);
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : "Submission failed");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="mx-auto max-w-3xl px-4 py-12 text-white">
      <SEO title="Contact Boreal | Boreal Financial" description="Connect with Boreal for structured capital advisory." />
      <h1 className="text-4xl font-semibold text-white">Contact Boreal</h1>
      <h2 className="mt-3 text-4xl font-bold text-white">Tell us about your business and an advisor will follow up.</h2>

      <form onSubmit={handleSubmit} className="mt-8 space-y-4 rounded-xl border border-white/20 bg-[#0a1731] p-6 shadow-sm">
        <input className="w-full rounded-lg border border-white/20 bg-[#050B1A] px-3 py-3" placeholder="Company Name" required value={formData.companyName} onChange={(e) => setFormData((prev) => ({ ...prev, companyName: e.target.value }))} />
        <input className="w-full rounded-lg border border-white/20 bg-[#050B1A] px-3 py-3" placeholder="Full Name" required value={formData.fullName} onChange={(e) => setFormData((prev) => ({ ...prev, fullName: e.target.value }))} />
        <input className="w-full rounded-lg border border-white/20 bg-[#050B1A] px-3 py-3" type="email" placeholder="Email" required value={formData.email} onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))} />
        <input className="w-full rounded-lg border border-white/20 bg-[#050B1A] px-3 py-3" type="tel" placeholder="Mobile Phone" required value={formData.mobilePhone} onChange={(e) => setFormData((prev) => ({ ...prev, mobilePhone: e.target.value }))} />
        <button type="submit" disabled={submitting} className="rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white disabled:opacity-70">{submitting ? "Submitting..." : "Submit"}</button>
        {error ? <p className="text-sm text-red-300">{error}</p> : null}
      </form>

      {showSuccess ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
          <div className="w-full max-w-md rounded-2xl border border-white/20 bg-[#0a1731] p-6 text-center">
            <p className="text-lg font-semibold">A Boreal Intake Specialist will contact you shortly</p>
            <button onClick={() => { setShowSuccess(false); window.location.href = "/"; }} className="mt-5 rounded-full bg-white px-5 py-2.5 font-semibold text-black">Continue</button>
          </div>
        </div>
      ) : null}
    </section>
  );
}
