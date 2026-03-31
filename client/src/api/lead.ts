import { apiRequest } from "@/lib/api";

export async function submitLead(data: any) {
  return apiRequest("/leads", {
    method: "POST",
    body: data,
  });
}
