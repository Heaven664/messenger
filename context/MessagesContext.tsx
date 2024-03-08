import { MessageType } from "@/types/ChatWindow/types";
import { createContext, useState } from "react";
import { ComponentProps } from "@/types/Layout/types";
import { MessagesContextType } from "@/types/Context/types";

const MessagesContext = createContext<MessagesContextType | null>(null);

const MessagesContextProvider = ({ children }: ComponentProps) => {
  const [messages, setMessages] = useState<MessageType[] | []>([]);

  // Update chat window header info
  const changeMessages = (value: MessageType[]) => {
    setMessages(value);
  };

  const context: MessagesContextType = {
    messages,
    changeMessages,
  };

  return (
    <MessagesContext.Provider value={context}>
      {children}
    </MessagesContext.Provider>
  );
};

export { MessagesContextProvider };

export default MessagesContext;
