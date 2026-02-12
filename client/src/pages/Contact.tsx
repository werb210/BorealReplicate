import { FormEvent, useState } from "react";
import { SEO } from "@/seo/SEO";
import { trackEvent } from "@/utils/analytics";
import { scrollToTop } from "@/utils/scrollToTop";
import { useEffect } from "react";

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

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>(initialForm);

  useEffect(() => {
    scrollToTop();
  }, []);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    trackEvent("contact_form_submitted", {
      source: "contact_page",
      company: formData.companyName,
    });
    setSubmitted(true);
  };

  return (
    <section className="mx-auto max-w-3xl px-4 py-12">
      <SEO title="Contact Boreal | Boreal Financial" description="Connect with Boreal for structured capital advisory." />
      <h1 className="text-4xl font-semibold text-slate-900">Contact Boreal</h1>
      <p className="mt-3 text-slate-600">Tell us about your business and an advisor will follow up.</p>

      {submitted ? <p className="mt-6 rounded-lg border bg-slate-50 p-4">Thanks — your request has been submitted.</p> : null}

      <form onSubmit={handleSubmit} className="mt-8 space-y-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <input className="w-full rounded-lg border px-3 py-3" placeholder="Company Name" required value={formData.companyName} onChange={(e) => setFormData((prev) => ({ ...prev, companyName: e.target.value }))} />
        <input className="w-full rounded-lg border px-3 py-3" placeholder="Full Name" required value={formData.fullName} onChange={(e) => setFormData((prev) => ({ ...prev, fullName: e.target.value }))} />
        <input className="w-full rounded-lg border px-3 py-3" type="email" placeholder="Email" required value={formData.email} onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))} />
        <input className="w-full rounded-lg border px-3 py-3" type="tel" placeholder="Mobile Phone" required value={formData.mobilePhone} onChange={(e) => setFormData((prev) => ({ ...prev, mobilePhone: e.target.value }))} />
        <button type="submit" className="rounded-lg bg-slate-900 px-5 py-3 font-semibold text-white">Submit</button>
      </form>
    </section>
  );
}
