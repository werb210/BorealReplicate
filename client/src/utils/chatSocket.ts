import { buildWebSocketUrl } from "./buildWebSocketUrl";

export function createSafeWebSocket(path: string) {
  return new WebSocket(buildWebSocketUrl(path));
}

let socket: WebSocket | null = null;

export function getChatSocket(): WebSocket | null {
  try {
    if (socket && socket.readyState === WebSocket.OPEN) {
      return socket;
    }

    socket = new WebSocket(buildWebSocketUrl("/ws/chat"));

    socket.onerror = () => {
      console.warn("WebSocket failed — chat disabled.");
    };

    return socket;
  } catch (err) {
    console.warn("WebSocket init error:", err);
    return null;
  }
}

export function clearChatSocket() {
  socket = null;
}
