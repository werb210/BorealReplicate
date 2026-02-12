import { useState, type FormEvent } from "react";

export default function ContactModal() {
  const [submitted, setSubmitted] = useState(false);

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) return <div>Thank you. We’ll contact you shortly.</div>;

  return (
    <form onSubmit={submit} className="space-y-4">
      <input className="w-full rounded border p-2" name="company" placeholder="Company Name" required />
      <input className="w-full rounded border p-2" name="fullName" placeholder="Full Name" required />
      <input className="w-full rounded border p-2" name="email" type="email" placeholder="Email" required />
      <input className="w-full rounded border p-2" name="mobilePhone" type="tel" placeholder="Mobile Phone" required />
      <button className="rounded bg-slate-900 px-4 py-2 font-medium text-white" type="submit">Submit</button>
    </form>
  );
}
