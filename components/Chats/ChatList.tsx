import { ChatType } from "@/types/Chats/types";
import ChatListItem from "./ChatListItem";

type P = {
  chatsData: ChatType[];
};

const ChatList = ({ chatsData }: P) => {
  const chatsList = chatsData.map(
    ({
      userId,
      name,
      friendEmail,
      imageUrl,
      unreadMessages,
      lastMessage,
      isOnline,
      lastSeenPermission,
      lastSeenTime,
    }: ChatType) => (
      <ChatListItem
        key={userId}
        name={name}
        userId={userId}
        friendEmail={friendEmail}
        imageUrl={imageUrl}
        unreadMessages={unreadMessages}
        lastMessage={lastMessage}
        isOnline={isOnline}
        lastSeenPermission={lastSeenPermission}
        lastSeenTime={lastSeenTime}
      />
    )
  );

  return <ul>{chatsList}</ul>;
};

export default ChatList;
