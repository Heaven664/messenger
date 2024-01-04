import Image from "next/image";
import styles from "./Header.module.scss";
import { HeaderInfoType } from "@/types/ChatWindow/types";

const ChatWindowDesktopHeader = ({
  name,
  isOnline,
  imageUrl,
  userId,
}: HeaderInfoType) => {
  return (
    <header className={styles.container}>
      <div className={styles.imageSection}>
        <div className={styles.imageContainer}>
          <div className={styles.image}>
            <Image src={imageUrl} alt={userId} width={40} height={40} />
          </div>
          {isOnline && <div className={styles.onlineBadge}></div>}
        </div>
      </div>
      <div className={styles.infoContainer}>
        <h3>{name}</h3>
        {isOnline && <h5>Active</h5>}
      </div>
    </header>
  );
};

export default ChatWindowDesktopHeader;
