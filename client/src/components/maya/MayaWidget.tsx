import { useState } from "react";
import { sendMayaMessage } from "@/api/maya";

export default function MayaWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<any[]>([]);

  async function send() {
    if (!input) return;

    const msg = input;
    setInput("");

    setMessages((m) => [...m, { role: "user", text: msg }]);

    try {
      const res = await sendMayaMessage(msg);
      const reply = res?.reply || res?.data?.reply || "No response";

      setMessages((m) => [...m, { role: "maya", text: reply }]);
    } catch {
      setMessages((m) => [...m, { role: "maya", text: "Error" }]);
    }
  }

  return (
    <div style={{ position: "fixed", bottom: 20, right: 20 }}>
      {!open && (
        <button onClick={() => setOpen(true)}>Chat with Maya</button>
      )}

      {open && (
        <div style={{ width: 300, height: 400, border: "1px solid #ccc", background: "#fff" }}>
          <div style={{ height: 300, overflow: "auto" }}>
            {messages.map((m, i) => (
              <div key={i}><b>{m.role}:</b> {m.text}</div>
            ))}
          </div>

          <input value={input} onChange={(e)=>setInput(e.target.value)} />
          <button onClick={send}>Send</button>
          <button onClick={() => setOpen(false)}>Close</button>
        </div>
      )}
    </div>
  );
}
