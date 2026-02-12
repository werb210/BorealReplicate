import { useState } from "react";
import { trackEvent } from "@/utils/analytics";

type ContactModalProps = {
  open: boolean;
  onClose: () => void;
};

type ContactForm = {
  company: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
};

const initialForm: ContactForm = {
  company: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
};

export default function ContactModal({ open, onClose }: ContactModalProps) {
  const [form, setForm] = useState<ContactForm>(initialForm);
  const [submitting, setSubmitting] = useState(false);

  const submit = async () => {
    if (!form.company || !form.firstName || !form.lastName || !form.email || !form.phone) {
      alert("All fields required");
      return;
    }

    try {
      setSubmitting(true);
      const utmParams = {
        utm_source: localStorage.getItem("utm_source"),
        utm_medium: localStorage.getItem("utm_medium"),
        utm_campaign: localStorage.getItem("utm_campaign"),
      };

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, utm: utmParams }),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      trackEvent("contact_submit", { category: "conversion", ...utmParams });
      alert("Submitted");
      setForm(initialForm);
      onClose();
    } catch (error) {
      console.error(error);
      alert("Unable to submit right now.");
    } finally {
      setSubmitting(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="w-full max-w-md rounded-xl bg-white p-8">
        <h2 className="mb-4 text-2xl font-bold">Contact Us</h2>

        {(Object.keys(form) as Array<keyof ContactForm>).map((key) => (
          <input
            key={key}
            className="mb-3 w-full rounded border p-2"
            placeholder={key.replace(/([A-Z])/g, " $1").replace(/^./, (value) => value.toUpperCase())}
            value={form[key]}
            onChange={(e) => setForm({ ...form, [key]: e.target.value })}
          />
        ))}

        <div className="mt-2 grid grid-cols-2 gap-2">
          <button
            onClick={onClose}
            className="w-full rounded border border-gray-300 px-4 py-2"
            disabled={submitting}
          >
            Cancel
          </button>
          <button
            onClick={submit}
            className="w-full rounded bg-orange-500 px-4 py-2 text-white"
            disabled={submitting}
          >
            {submitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </div>
    </div>
  );
}
