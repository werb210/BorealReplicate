import { API_BASE_URL } from "@/config/env";

export function track(event: string, metadata?: any) {
  const send = async () => {
    try {
      await fetch(`${API_BASE_URL}/api/support/track`, {
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
