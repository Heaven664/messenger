import { ChatType, ChatsContextType } from "@/types/Chats/types";
import { ComponentProps } from "@/types/Layout/types";
import { createContext, useState } from "react";

const ChatsContext = createContext<ChatsContextType>({
  allChats: [],
  setAllChats: () => {},
});

const ChatsContextProvider = ({ children }: ComponentProps) => {
  const [allChats, setAllChats] = useState<ChatType[]>([]);

  const context: ChatsContextType = {
    allChats,
    setAllChats,
  };

  return (
    <ChatsContext.Provider value={context}>{children}</ChatsContext.Provider>
  );
};

export { ChatsContextProvider };

export default ChatsContext;
