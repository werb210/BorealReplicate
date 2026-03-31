import { useState } from "react";
import { submitLead } from "@/api/lead";

export default function LeadForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  async function handleSubmit() {
    await submitLead(form);

    // redirect to client app with prefill
    const query = new URLSearchParams(form).toString();
    window.location.href = `https://client.boreal.financial/apply?${query}`;
  }

  return (
    <div>
      <input placeholder="Name" onChange={(e)=>setForm({...form, name: e.target.value})} />
      <input placeholder="Email" onChange={(e)=>setForm({...form, email: e.target.value})} />
      <input placeholder="Phone" onChange={(e)=>setForm({...form, phone: e.target.value})} />

      <button onClick={handleSubmit}>Apply Now</button>
    </div>
  );
}
