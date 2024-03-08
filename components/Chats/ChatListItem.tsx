import Image from "next/image";
import styles from "./ChatListItem.module.scss";
import { badgeNumberTransform } from "@/helpers/General";
import { ChatType } from "@/types/Chats/types";
import { HeaderInfoType } from "@/types/ChatWindow/types";
import { useContext, useState } from "react";
import { HeaderContextType } from "@/types/Context/types";
import ChatWindowContext from "@/context/ChatWindowContext";
import { get } from "http";
import { useSession } from "next-auth/react";
import getMessages from "@/helpers/Api/getMessages";
import MessagesContext from "@/context/MessagesContext";

const ChatListItem = ({
  name,
  unreadMessages,
  userId,
  friendEmail,
  imageUrl,
  isOnline,
  lastSeenPermission,
  lastSeenTime,
}: ChatType) => {
  // Get ChatWindowContext and destructure function for changing header info
  const headerContext = useContext<HeaderContextType | null>(ChatWindowContext);
  const { changeChatWindowHeaderInfo } = headerContext as HeaderContextType;

  const messagesContext = useContext(MessagesContext);

  const session = useSession().data;

  const [newMessages, setNewMessages] = useState<number>(unreadMessages);

  // Create object of HeaderInfoType to change header info
  const chatDetails: HeaderInfoType = {
    name,
    userId,
    email: friendEmail,
    imageUrl,
    isOnline,
    lastSeenPermission,
    lastSeenTime,
  };

  // Change header info when user clicks on chat list item
  const handleChatWindowChange = async () => {
    setNewMessages(0);
    changeChatWindowHeaderInfo(chatDetails);
    const { response } = await getMessages(session!.user.email, friendEmail);
    if (response) messagesContext?.changeMessages(response);
  };

  return (
    <li className={styles.container} onClick={handleChatWindowChange}>
      <div className={styles.imageSection}>
        <div className={styles.imageContainer}>
          <Image src={imageUrl} alt={userId} width={40} height={40} />
        </div>
        {isOnline && <div className={styles.onlineBadge}></div>}
      </div>
      <div className={styles.nameContainer}>
        <h3 className={newMessages > 0 ? styles.highlighted : undefined}>
          {name}
        </h3>
      </div>
      {newMessages > 0 && (
        <div className={styles.badge}>
          <p>{badgeNumberTransform(newMessages)}</p>
        </div>
      )}
    </li>
  );
};

export default ChatListItem;
