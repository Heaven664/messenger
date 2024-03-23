import { MessageType } from "@/types/ChatWindow/types";
import { ChatType, ChatsContextType } from "@/types/Chats/types";
import { ComponentProps } from "@/types/Layout/types";
import { createContext, useState } from "react";

const ChatsContext = createContext<ChatsContextType>({
  allChats: [],
  setAllChats: () => {},
  clearUnreadMessages: () => {},
  addUnreadChat: () => {},
});

const ChatsContextProvider = ({ children }: ComponentProps) => {
  const [allChats, setAllChats] = useState<ChatType[]>([]);

  const clearUnreadMessages = (friendEmail: string) => {
    setAllChats((prev) => {
      return prev.map((chat) => {
        if (chat.friendEmail === friendEmail) {
          return {
            ...chat,
            unreadMessages: 0,
          };
        }
        return chat;
      });
    });
  };

  const addUnreadChat = (message: MessageType) => {
    setAllChats((prev) => {
      return prev.map((chat) => {
        if (chat.friendEmail === message.senderEmail) {
          return {
            ...chat,
            unreadMessages: chat.unreadMessages + 1,
            lastMessage: message.sentTime,
          };
        }
        return chat;
      });
    });
  };

  const context: ChatsContextType = {
    allChats,
    setAllChats,
    clearUnreadMessages,
    addUnreadChat,
  };

  return (
    <ChatsContext.Provider value={context}>{children}</ChatsContext.Provider>
  );
};

export { ChatsContextProvider };

export default ChatsContext;
