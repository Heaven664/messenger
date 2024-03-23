import Image from "next/image";
import styles from "./ChatListItem.module.scss";
import { badgeNumberTransform } from "@/helpers/General";
import { ChatType } from "@/types/Chats/types";
import { HeaderInfoType } from "@/types/ChatWindow/types";
import { useContext, useEffect, useState } from "react";
import { HeaderContextType } from "@/types/Context/types";
import ChatWindowContext from "@/context/ChatWindowContext";
import { useSession } from "next-auth/react";
import getMessages from "@/helpers/Api/getMessages";
import MessagesContext from "@/context/MessagesContext";
import ChatsContext from "@/context/ChatsContext";

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
  const [newMessages, setNewMessages] = useState<number | "9+">(unreadMessages);
  // Image error state
  const [imageError, setImageError] = useState(false);
  // Image path for src get request with timestamp to prevent caching
  const imageGetPath = `${process.env.NEXT_PUBLIC_API_URL}${imageUrl}`;

  const headerContext = useContext<HeaderContextType | null>(ChatWindowContext);
  const { changeChatWindowHeaderInfo } = headerContext as HeaderContextType;
  const messagesContext = useContext(MessagesContext);
  const { clearUnreadMessages } = useContext(ChatsContext);
  const hasNewMessages =
    (typeof newMessages === "number" && newMessages > 0) ||
    typeof newMessages === "string";

  // Get session data
  const session = useSession().data;

  // Trigger badge number transformation when unread messages change
  useEffect(() => {
    setNewMessages(badgeNumberTransform(unreadMessages));
  }, [unreadMessages]);

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
    clearUnreadMessages(friendEmail);
    changeChatWindowHeaderInfo(chatDetails);
    const { response } = await getMessages(session!.user.email, friendEmail);
    if (response) messagesContext?.setMessages(response);
  };

  return (
    <li className={styles.container} onClick={handleChatWindowChange}>
      <div className={styles.imageSection}>
        <div className={styles.imageContainer}>
          <Image
            src={
              !imageError ? imageGetPath : "/general/default-profile-image.webp"
            }
            alt={userId}
            width={40}
            height={40}
            onError={() => setImageError(true)}
          />
        </div>
        {isOnline && <div className={styles.onlineBadge}></div>}
      </div>
      <div className={styles.nameContainer}>
        <h3 className={newMessages ? styles.highlighted : undefined}>{name}</h3>
      </div>
      {hasNewMessages && (
        <div className={styles.badge}>
          <p>{newMessages}</p>
        </div>
      )}
    </li>
  );
};

export default ChatListItem;
