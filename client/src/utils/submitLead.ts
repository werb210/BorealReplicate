import { apiRequest } from "@/lib/api";

export async function submitLead(data: any) {
  return apiRequest("/api/lead", {
    method: "POST",
    body: JSON.stringify(data),
  });
}
