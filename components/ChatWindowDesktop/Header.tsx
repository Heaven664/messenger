import Image from "next/image";
import styles from "./Header.module.scss";
import { HeaderContextType } from "@/types/Context/types";
import { useContext, useEffect, useState } from "react";
import ChatWindowContext from "@/context/ChatWindowContext";
import { timestampToElapsedTime } from "@/helpers/ChatWindow";
import { HeaderInfoType } from "@/types/ChatWindow/types";

const ChatWindowDesktopHeader = () => {
  // Get ChatWindowContext and destructure for current header info
  const headerContext = useContext<HeaderContextType | null>(ChatWindowContext);
  const { headerInfo } = headerContext as HeaderContextType;
  const { name, imageUrl, isOnline, userId, lastSeenPermission, lastSeenTime } =
    headerInfo as HeaderInfoType;

  const [lastSeen, setLastSeen] = useState<string>("");

  // Generate last seen time message and update it every minute
  useEffect(() => {
    setLastSeen(timestampToElapsedTime(lastSeenTime));
    const intervalId = setInterval(() => {
      const newLastSeen = timestampToElapsedTime(lastSeenTime);
      setLastSeen(newLastSeen);
    }, 60000);

    return () => clearInterval(intervalId);
  }, [lastSeenTime]);

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
        {!isOnline && lastSeenPermission && <h5>{lastSeen}</h5>}
      </div>
    </header>
  );
};

export default ChatWindowDesktopHeader;
