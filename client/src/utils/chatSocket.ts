export function createSafeWebSocket(path: string) {
  const protocol = window.location.protocol === "https:" ? "wss:" : "ws:";
  const host = window.location.host;
  return new WebSocket(`${protocol}//${host}${path}`);
}

let socket: WebSocket | null = null;

export function getChatSocket(): WebSocket | null {
  try {
    if (socket && socket.readyState === WebSocket.OPEN) {
      return socket;
    }

    socket = createSafeWebSocket("/ws/chat");

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
