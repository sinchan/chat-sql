import { createContext, FC, ReactNode, useState } from "react";

export interface Message {
  sender: "user" | "ChatSQL";
  text: string;
}

export interface MessageList {
  messages: Message[];
}

type MessageContextType = {
  messages: Message[];
  sendMessage: (message: string) => Promise<void>;
};

export const MessageContext = createContext<MessageContextType>({
  messages: [],
  sendMessage: async () => {},
});

export default function MessageProvider({ children }: { children: ReactNode }) {
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "ChatSQL",
      text: "Hi there! I’m ChatSQL, your SQL assistant. How can I help you?",
    },
  ]);

  const sendMessage = async (message: string) => {
    const userMessage: Message = {
      sender: "user",
      text: message,
    };
    const systemStandardMessage: Message = {
      sender: "ChatSQL",
      text: "Sorry I’m not ready to answer any questions yet!",
    };
    setMessages((prevMessages) => [
      ...prevMessages,
      userMessage,
      systemStandardMessage,
    ]);
  };

  return (
    <MessageContext.Provider value={{ messages, sendMessage }}>
      {children}
    </MessageContext.Provider>
  );
}
