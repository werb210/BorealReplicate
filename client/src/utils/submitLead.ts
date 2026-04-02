import { apiRequest } from "@/lib/api";

export async function submitLead(data: unknown) {
  return apiRequest<{ leadId: string }>("/leads", {
    method: "POST",
    body: JSON.stringify(data),
  });
}
