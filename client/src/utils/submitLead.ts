import { apiRequest } from "@/lib/api";
import { WebsiteLeadPayload } from "@/types/lead";

export async function submitLead(payload: WebsiteLeadPayload) {
  if (!payload.email || !payload.name) {
    throw new Error("INVALID_LEAD_PAYLOAD");
  }

  try {
    return await apiRequest<{ leadId: string }>("/api/lead", {
      method: "POST",
      body: JSON.stringify(payload),
    });
  } catch (err) {
    console.error("Lead submission failed", err);
    throw err;
  }
}
