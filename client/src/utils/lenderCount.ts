import { API_BASE_URL } from "@/config/env";

export async function fetchLenderCount(): Promise<number> {
  try {
    const res = await fetch(`${API_BASE_URL}/api/public/lender-count`);
    const data = await res.json();
    return data.count || 0;
  } catch {
    return 0;
  }
}
