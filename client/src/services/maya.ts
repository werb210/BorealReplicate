const mayaEnabled = import.meta.env.VITE_MAYA_ENABLED === "true";
const mayaApiBase = (import.meta.env.VITE_MAYA_API_BASE ?? "").trim().replace(/\/+$/, "");

export function isMayaConfigured() {
  return mayaEnabled && Boolean(mayaApiBase);
}

export function buildMayaWebSocketUrl(_path: string) {
  return null;
}

export async function checkMayaHealth(_signal?: AbortSignal): Promise<boolean> {
  return Promise.resolve(false);
}

export async function sendMayaMessage(message: string) {
  const clean = message.trim();
  if (!clean) {
    throw new Error("EMPTY_MESSAGE");
  }

  return Promise.resolve({
    reply: "Thanks for your message. Our team will follow up with you directly.",
  });
}
