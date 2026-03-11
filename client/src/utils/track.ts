import { apiUrl } from "@/config/api";

export function track(event: string, metadata?: unknown) {
  const send = async () => {
    try {
      await fetch(apiUrl("/api/support/track"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ event, metadata }),
      });
    } catch {
      // best-effort tracking
    }
  };

  void send();
}
