import { createContext, useContext, useState, ReactNode, useCallback } from "react";
import Chatbot from "@/components/chatbot";

type ChatbotContextValue = {
  isOpen: boolean;
  openChatbot: () => void;
  closeChatbot: () => void;
  resetChatbot: () => void;
};

const ChatbotContext = createContext<ChatbotContextValue | undefined>(undefined);

export function ChatbotProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [resetCount, setResetCount] = useState(0);

  const openChatbot = useCallback(() => setIsOpen(true), []);
  const closeChatbot = useCallback(() => setIsOpen(false), []);
  const resetChatbot = useCallback(() => setResetCount((count) => count + 1), []);

  return (
    <ChatbotContext.Provider value={{ isOpen, openChatbot, closeChatbot, resetChatbot }}>
      {children}
      <Chatbot
        isOpen={isOpen}
        onOpen={openChatbot}
        onClose={closeChatbot}
        onReset={resetChatbot}
        resetCount={resetCount}
      />
    </ChatbotContext.Provider>
  );
}

export function useChatbot() {
  const context = useContext(ChatbotContext);
  if (!context) {
    throw new Error("useChatbot must be used within a ChatbotProvider");
  }
  return context;
}
