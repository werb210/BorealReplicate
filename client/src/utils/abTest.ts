export function getVariant(key: string): "A" | "B" {
  if (typeof window === "undefined") {
    return "A";
  }

  const stored = localStorage.getItem(key);
  if (stored === "A" || stored === "B") {
    return stored;
  }

  const variant: "A" | "B" = Math.random() > 0.5 ? "A" : "B";
  localStorage.setItem(key, variant);
  return variant;
}
