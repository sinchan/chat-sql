import { createContext, FC, ReactNode, useState } from "react";

export interface Message {
  sender: "user" | "ChatSQL";
  text: string;
  data?: { [key: string]: string }[];
  sql?: string;
  error?: string;
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
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    const result = await fetch("/api/processMessage", {
      method: "POST",
      body: JSON.stringify({ message }),
    });

    const generatedMessage = await result.json();

    setMessages((prevMessages) => [
      ...prevMessages,
      {
        sender: "ChatSQL",
        ...generatedMessage,
      },
    ]);
  };

  return (
    <MessageContext.Provider value={{ messages, sendMessage }}>
      {children}
    </MessageContext.Provider>
  );
}
