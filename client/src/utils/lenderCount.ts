export async function fetchLenderCount(): Promise<number> {
  try {
    const res = await fetch("/api/public/lender-count");
    const data = await res.json();
    return data.count || 0;
  } catch {
    return 0;
  }
}
