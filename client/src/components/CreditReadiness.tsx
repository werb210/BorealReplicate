import { FormEvent, useState } from "react";

export default function CreditReadiness() {
  const [submitted, setSubmitted] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    await fetch("/api/crm/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(new FormData(event.currentTarget))),
    });

    setSubmitted(true);
  }

  if (submitted)
    return (
      <div className="p-10 text-center">
        <h3 className="text-xl font-semibold">
          A Boreal Intake Specialist will contact you shortly.
        </h3>
        <a href="/" className="underline mt-4 block">
          Continue
        </a>
      </div>
    );

  return (
    <form onSubmit={submit} className="space-y-4 max-w-2xl">
      <input name="companyName" placeholder="Company Name" className="border p-3 w-full text-black" required />
      <input name="fullName" placeholder="Full Name" className="border p-3 w-full text-black" required />
      <input name="phone" placeholder="Phone" className="border p-3 w-full text-black" required />
      <input name="email" placeholder="Email" className="border p-3 w-full text-black" required />
      <button className="bg-black text-white px-6 py-3 rounded w-full">
        Check Capital Readiness
      </button>
    </form>
  );
}
