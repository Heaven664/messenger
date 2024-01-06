import Image from "next/image";
import styles from "./Header.module.scss";
import { HeaderContextType } from "@/types/Context/types";
import { useContext } from "react";
import ChatWindowContext from "@/context/ChatWindowContext";

const ChatWindowDesktopHeader = () => {
  // Get ChatWindowContext and destructure for current header info
  const headerContext = useContext<HeaderContextType | null>(ChatWindowContext);
  const { headerInfo } = headerContext as HeaderContextType;
  const { name, imageUrl, isOnline, userId } = headerInfo;

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
