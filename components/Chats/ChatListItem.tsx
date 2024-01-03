import Image from "next/image";
import styles from "./ChatListItem.module.scss";
import { badgeNumberTransform } from "@/helpers/General";
import { ChatType } from "@/types/Chats/types";

const ChatListItem = ({
  name,
  unreadMessages,
  chatId,
  imageUrl,
  isOnline,
}: ChatType) => {
  return (
    <li className={styles.container}>
      <div className={styles.imageSection}>
        <div className={styles.imageContainer}>
          <Image src={imageUrl} alt={chatId} width={40} height={40} />
        </div>
        {isOnline && <div className={styles.onlineBadge}></div>}
      </div>
      <div className={styles.nameContainer}>
        <h3 className={unreadMessages > 0 ? styles.highlighted : undefined}>
          {name}
        </h3>
      </div>
      {unreadMessages > 0 && (
        <div className={styles.badge}>
          <p>{badgeNumberTransform(unreadMessages)}</p>
        </div>
      )}
    </li>
  );
};

export default ChatListItem;
