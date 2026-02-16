export function buildWebSocketUrl(path = "/ws/chat"): string {
  // Always derive WS origin from the active window location.
  const wsProtocol = window.location.protocol === "https:" ? "wss:" : "ws:";
  const host = window.location.host;
  return `${wsProtocol}//${host}${path}`;
}

export function createSafeWebSocket(path: string) {
  return new WebSocket(buildWebSocketUrl(path));
}

let socket: WebSocket | null = null;

export function getChatSocket(): WebSocket | null {
  try {
    if (socket && socket.readyState === WebSocket.OPEN) {
      return socket;
    }

    const url = buildWebSocketUrl("/ws/chat");
    socket = new WebSocket(url);

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
