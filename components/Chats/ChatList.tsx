import { ChatType } from "@/types/Chats/types";
import ChatListItem from "./ChatListItem";

type P = {
  chatsData: ChatType[];
};

const ChatList = ({ chatsData }: P) => {

  const chatsList = chatsData.map(
    ({ userId, name, imageUrl, unreadMessages, lastMessage, isOnline }: ChatType) => (
      <ChatListItem
        key={userId}
        name={name}
        userId={userId}
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
