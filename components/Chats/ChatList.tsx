import { ChatType } from "@/types/Chats/types";
import ChatListItem from "./ChatListItem";
import AddIcon from "@mui/icons-material/Add";
import styles from "@/components/Chats/ChatList.module.scss";

type P = {
  chatsData: ChatType[];
};

const ChatList = ({ chatsData }: P) => {
  const chatsList = chatsData.map(
    ({ chatId, name, imageUrl, unreadMessages }: ChatType) => (
      <ChatListItem
        key={chatId}
        name={name}
        chatId={chatId}
        imageUrl={imageUrl}
        unreadMessages={unreadMessages}
      />
    )
  );

  return (
      <ul>{chatsList}</ul>
  );
};

export default ChatList;
