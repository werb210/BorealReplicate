import { useState, type FormEvent } from "react";
import { API_BASE_URL } from "@/config/env";

export default function LeadCaptureModal({ onDone }: { onDone?: () => void }) {
  const [done, setDone] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);

    await fetch(`${API_BASE_URL}/api/support/event`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        event: "lead_capture_submit",
        source: "website",
        email: form.get("email"),
      }),
    });

    setDone(true);
    onDone?.();
  }

  if (done) {
    return <p className="text-sm">Thanks — a strategist will reach out shortly.</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <h2 className="text-2xl font-semibold">Get Your Capital Strategy Call</h2>
      <input className="w-full rounded border p-2" name="name" placeholder="Name" required />
      <input className="w-full rounded border p-2" name="email" type="email" placeholder="Email" required />
      <input className="w-full rounded border p-2" name="company" placeholder="Company" required />
      <button className="rounded bg-orange-500 px-4 py-2 font-semibold text-white" type="submit">Request Call</button>
    </form>
  );
}
