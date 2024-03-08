import { HeaderInfoType } from "@/types/ChatWindow/types";
import { createContext, useContext, useState } from "react";
import { ComponentProps } from "@/types/Layout/types";
import { HeaderContextType } from "@/types/Context/types";
import MessagesContext from "./MessagesContext";
import getMessages from "@/helpers/Api/getMessages";
import { useSession } from "next-auth/react";

const ChatWindowContext = createContext<HeaderContextType | null>(null);

const ChatWindowContextProvider = ({ children }: ComponentProps) => {
  const [headerInfo, setHeaderInfo] = useState<HeaderInfoType | null>(null);
  const session = useSession().data;
  const messagesContext = useContext(MessagesContext);

  // Update chat window header info
  const changeChatWindowHeaderInfo = (value: HeaderInfoType | null) => {
    setHeaderInfo(value);
  };

  const context: HeaderContextType = {
    headerInfo,
    changeChatWindowHeaderInfo,
  };

  return (
    <ChatWindowContext.Provider value={context}>
      {children}
    </ChatWindowContext.Provider>
  );
};

export { ChatWindowContextProvider };

export default ChatWindowContext;
