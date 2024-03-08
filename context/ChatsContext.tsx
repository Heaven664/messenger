import { ChatType, ChatsContextType } from "@/types/Chats/types";
import { ComponentProps } from "@/types/Layout/types";
import { createContext, useState } from "react";

const ChatsContext = createContext<ChatsContextType>({
  curChats: [],
  handleChatsChange: () => {},
});

const ChatsContextProvider = ({ children }: ComponentProps) => {
  const [curChats, setCurChats] = useState<ChatType[]>([]);

  // Update displayed chats list
  const handleChatsChange = (value: ChatType[]) => {
    setCurChats(value);
  };

  const context: ChatsContextType = {
    curChats,
    handleChatsChange,
  };

  return (
    <ChatsContext.Provider value={context}>{children}</ChatsContext.Provider>
  );
};

export { ChatsContextProvider };

export default ChatsContext;
