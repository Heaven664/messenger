import Image from "next/image";
import styles from "./ChatListItem.module.scss";
import { badgeNumberTransform } from "@/helpers/General";
import { ChatType } from "@/types/Chats/types";
import { HeaderInfoType } from "@/types/ChatWindow/types";
import { useContext, useState } from "react";
import { HeaderContextType } from "@/types/Context/types";
import ChatWindowContext from "@/context/ChatWindowContext";

const ChatListItem = ({
  name,
  unreadMessages,
  userId,
  imageUrl,
  isOnline,
  lastSeenPermission,
  lastSeenTime,
}: ChatType) => {
  // Get ChatWindowContext and destructure function for changing header info
  const headerContext = useContext<HeaderContextType | null>(ChatWindowContext);
  const { changeChatWindowHeaderInfo } = headerContext as HeaderContextType;

  const [newMessages, setNewMessages] = useState<number>(unreadMessages);

  // Create object of HeaderInfoType to change header info
  const chatDetails: HeaderInfoType = {
    name,
    userId,
    imageUrl,
    isOnline,
    lastSeenPermission,
    lastSeenTime,
  };

  // Change header info when user clicks on chat list item
  const handleChatWindowChange = () => {
    setNewMessages(0);
    changeChatWindowHeaderInfo(chatDetails);
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
