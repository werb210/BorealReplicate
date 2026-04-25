import { api } from './client';

export async function submitIssueReport(payload: {
  message: string;
  screenshotBase64?: string;
  applicationId?: string;
  contactPhone?: string;
}) {
  return api('/api/client/issues', {
    method: 'POST',
    body: JSON.stringify({
      message: payload.message,
      screenshotBase64: payload.screenshotBase64 ?? null,
      applicationId: payload.applicationId ?? null,
      contactPhone: payload.contactPhone ?? null,
    }),
  });
}
