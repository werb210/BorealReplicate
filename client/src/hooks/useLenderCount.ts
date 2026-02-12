import { useEffect, useState } from "react";
import { API_BASE_URL } from "@/config/env";

export function useLenderCount() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/public/lender-count`)
      .then((res) => res.json())
      .then((data) => setCount(data.count))
      .catch(() => setCount(null));
  }, []);

  return count;
}
