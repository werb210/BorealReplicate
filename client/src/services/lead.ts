import { WebsiteLeadPayload } from "@/types/lead";

function createLeadId() {
  return `lead-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}

export async function submitLead(data: WebsiteLeadPayload) {
  if (!data.email || !data.fullName) {
    throw new Error("INVALID_LEAD_PAYLOAD");
  }

  return Promise.resolve({ leadId: createLeadId() });
}
