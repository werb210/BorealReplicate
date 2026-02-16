function buildWebSocketUrl(): string {
  const { protocol, host } = window.location;
  const wsProtocol = protocol === "https:" ? "wss:" : "ws:";
  return `${wsProtocol}//${host}/ws/chat`;
}

let socket: WebSocket | null = null;

export function getChatSocket(): WebSocket | null {
  try {
    if (socket && socket.readyState === WebSocket.OPEN) {
      return socket;
    }

    socket = new WebSocket(buildWebSocketUrl());

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
