import { apiRequest } from "@/lib/api";
import { WebsiteLeadPayload } from "@/types/lead";

export async function submitLead(data: WebsiteLeadPayload) {
  return apiRequest<{ leadId: string }>("/leads", {
    method: "POST",
    body: JSON.stringify(data),
  });
}
