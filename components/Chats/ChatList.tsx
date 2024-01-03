import { ChatType } from "@/types/Chats/types";
import ChatListItem from "./ChatListItem";

type P = {
  chatsData: ChatType[];
};

const ChatList = ({ chatsData }: P) => {

  const chatsList = chatsData.map(
    ({ chatId, name, imageUrl, unreadMessages, lastMessage, isOnline }: ChatType) => (
      <ChatListItem
        key={chatId}
        name={name}
        chatId={chatId}
        imageUrl={imageUrl}
        unreadMessages={unreadMessages}
        lastMessage={lastMessage}
        isOnline={isOnline}
      />
    )
  );

  return <ul>{chatsList}</ul>;
};

export default ChatList;
