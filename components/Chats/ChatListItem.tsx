import Image from "next/image";
import styles from "./ChatListItem.module.scss";
import { useState } from "react";
import { badgeNumberTransform } from "@/helpers/General";

const ChatListItem = () => {
  const [unreadMessages, setUnreadMessages] = useState(9);

  return (
    <li className={styles.container}>
      <div className={styles.imageSection}>
        <div className={styles.imageContainer}>
          <Image
            src={"/general/main.HEIC"}
            alt="chat-image"
            width={40}
            height={40}
          />
        </div>
      </div>
      <div className={styles.nameContainer}>
        <h3>Omar Hamid</h3>
      </div>
      <div className={styles.badge}>
        <p>{badgeNumberTransform(unreadMessages)}</p>
      </div>
    </li>
  );
};

export default ChatListItem;
