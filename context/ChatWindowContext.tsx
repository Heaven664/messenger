import { HeaderInfoType } from "@/types/ChatWindow/types";
import { createContext, useState } from "react";
import { ComponentProps } from "@/types/Layout/types";
import { HeaderContextType } from "@/types/Context/types";

const ChatWindowContext = createContext<HeaderContextType | null>(null);

const ChatWindowContextProvider = ({ children }: ComponentProps) => {
  const [headerInfo, setHeaderInfo] = useState<HeaderInfoType>({
    name: "Omar Hamid",
    userId: "1",
    imageUrl: "/general/main.HEIC",
    isOnline: true,
  });

  const changeChatWindowHeaderInfo = (value: HeaderInfoType) => {
    setHeaderInfo(value);
  };

  const context: HeaderContextType = {
    headerInfo,
    changeChatWindowHeaderInfo,
  };

  return <ChatWindowContext.Provider value={context}>{children}</ChatWindowContext.Provider>;
};

export { ChatWindowContextProvider };

export default ChatWindowContext;
