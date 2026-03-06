export async function safeFetch(url: string, options: RequestInit = {}) {
  const res = await fetch(url, options)

  if (!res.ok) {
    const text = await res.text().catch(() => "")
    throw new Error(`HTTP ${res.status}: ${text}`)
  }

  const contentType = res.headers.get("content-type") || ""

  if (contentType.includes("application/json")) {
    return res.json()
  }

  return res.text()
}
