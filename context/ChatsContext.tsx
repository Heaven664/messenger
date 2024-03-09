import { ChatType, ChatsContextType } from "@/types/Chats/types";
import { ComponentProps } from "@/types/Layout/types";
import { createContext, useState } from "react";

const ChatsContext = createContext<ChatsContextType>({
  allChats: [],
  handleChatsChange: () => {},
});

const ChatsContextProvider = ({ children }: ComponentProps) => {
  const [allChats, setAllChats] = useState<ChatType[]>([]);

  // Update displayed chats list
  const handleChatsChange = (value: ChatType[]) => {
    setAllChats(value);
  };

  const context: ChatsContextType = {
    allChats,
    handleChatsChange,
  };

  return (
    <ChatsContext.Provider value={context}>{children}</ChatsContext.Provider>
  );
};

export { ChatsContextProvider };

export default ChatsContext;
