import { useState } from "react";
import { trackEvent } from "@/utils/analytics";

type ContactModalProps = {
  open: boolean;
  onClose: () => void;
};

type ContactForm = {
  companyName: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
};

const initialForm: ContactForm = {
  companyName: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
};

async function submitContact(data: ContactForm) {
  await fetch("/api/support/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
}

export default function ContactModal({ open, onClose }: ContactModalProps) {
  const [form, setForm] = useState<ContactForm>(initialForm);
  const [submitting, setSubmitting] = useState(false);

  const submit = async () => {
    if (!form.companyName || !form.firstName || !form.lastName || !form.email || !form.phone) {
      alert("All fields required");
      return;
    }

    try {
      setSubmitting(true);
      await submitContact(form);

      trackEvent("contact_submit", { category: "conversion" });
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

        <input
          className="mb-3 w-full rounded border p-2"
          placeholder="Company Name"
          value={form.companyName}
          onChange={(e) => setForm({ ...form, companyName: e.target.value })}
        />
        <input
          className="mb-3 w-full rounded border p-2"
          placeholder="First Name"
          value={form.firstName}
          onChange={(e) => setForm({ ...form, firstName: e.target.value })}
        />
        <input
          className="mb-3 w-full rounded border p-2"
          placeholder="Last Name"
          value={form.lastName}
          onChange={(e) => setForm({ ...form, lastName: e.target.value })}
        />
        <input
          className="mb-3 w-full rounded border p-2"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          className="mb-3 w-full rounded border p-2"
          placeholder="Phone"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />

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
