import { useState, type FormEvent } from "react";

export default function ContactModal() {
  const [submitted, setSubmitted] = useState(false);

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    await fetch("/api/crm/web-leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        companyName: form.get("company"),
        firstName: form.get("first"),
        lastName: form.get("last"),
        email: form.get("email"),
        phone: form.get("phone"),
      }),
    });

    await fetch("/api/support/event", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ event: "contact_modal_submit", source: "website" }),
    });

    setSubmitted(true);
  }

  if (submitted) return <div>Thank you. We’ll contact you shortly.</div>;

  return (
    <form onSubmit={submit} className="space-y-3">
      <input className="w-full rounded border p-2" name="company" placeholder="Company Name" required />
      <input className="w-full rounded border p-2" name="first" placeholder="First Name" required />
      <input className="w-full rounded border p-2" name="last" placeholder="Last Name" required />
      <input className="w-full rounded border p-2" name="email" type="email" required />
      <input className="w-full rounded border p-2" name="phone" required />
      <button className="rounded bg-slate-900 px-4 py-2 font-medium text-white" type="submit">Submit</button>
    </form>
  );
}
