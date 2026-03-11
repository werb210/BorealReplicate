import { useEffect, useState } from "react";
import { apiUrl } from "@/config/api";

export function useLenderCount() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const loadCount = async () => {
      try {
        const res = await fetch(apiUrl("/api/public/lender-count"));
        const data = await res.json();
        setCount(data.count);
      } catch {
        setCount(null);
      }
    };

    void loadCount();
  }, []);

  return count;
}
