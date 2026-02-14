import { useEffect, useState } from "react";
import { API_BASE_URL } from "@/config/env";

export function useLenderCount() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const loadCount = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/public/lender-count`);
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
