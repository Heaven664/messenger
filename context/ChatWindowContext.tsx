import { HeaderInfoType } from "@/types/ChatWindow/types";
import { createContext, useContext, useState } from "react";
import { ComponentProps } from "@/types/Layout/types";
import { HeaderContextType } from "@/types/Context/types";
import { useSession } from "next-auth/react";
import clearUnreadMessages from "@/helpers/Api/clearUnreadMessages";
import WebSocketContext from "./WebSocketContext";

const ChatWindowContext = createContext<HeaderContextType | null>(null);

const ChatWindowContextProvider = ({ children }: ComponentProps) => {
  const [headerInfo, setHeaderInfo] = useState<HeaderInfoType | null>(null);
  const session = useSession().data;

  const { socket } = useContext(WebSocketContext);

  // Update chat window header info
  const changeChatWindowHeaderInfo = async (value: HeaderInfoType | null) => {
    if (session?.user.email && value?.email && socket) {
      socket.emit("message read", {
        receiverEmail: session.user.email,
        senderEmail: value.email,
      });
      await clearUnreadMessages(session!.user!.email, value!.email);
    }
    setHeaderInfo(value);
  };

  const context: HeaderContextType = {
    headerInfo,
    changeChatWindowHeaderInfo,
    setHeaderInfo,
  };

  return (
    <ChatWindowContext.Provider value={context}>
      {children}
    </ChatWindowContext.Provider>
  );
};

export { ChatWindowContextProvider };

export default ChatWindowContext;
