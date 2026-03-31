import { clearLead, getLead, saveLead } from "@/lib/leadStorage";

export async function retryLeadSubmission(sendFn: (data: Record<string, unknown>) => Promise<void>) {
  const lead = getLead();
  if (!lead) return;

  try {
    await sendFn(lead.data);
    clearLead();
  } catch {
    lead.retryCount += 1;
    saveLead(lead);
  }
}
