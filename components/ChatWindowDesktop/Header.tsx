import Image from "next/image";
import styles from "./Header.module.scss";
import { HeaderContextType, PageContextType } from "@/types/Context/types";
import { useContext, useEffect, useState } from "react";
import ChatWindowContext from "@/context/ChatWindowContext";
import { timestampToElapsedTime } from "@/helpers/ChatWindow";
import { HeaderInfoType } from "@/types/ChatWindow/types";
import ProfileContext from "@/context/ProfileContext";
import { ProfileContextType } from "@/types/Profile/types";
import { useRouter } from "next/router";
import PageContext from "@/context/PageContext";

const ChatWindowDesktopHeader = () => {
  // Get ChatWindowContext and destructure for current header info
  const headerContext = useContext<HeaderContextType | null>(ChatWindowContext);
  const { headerInfo } = headerContext as HeaderContextType;
  const { name, imageUrl, isOnline, userId, lastSeenPermission, lastSeenTime } =
    headerInfo as HeaderInfoType;

  const [lastSeen, setLastSeen] = useState<string>("");

  const router = useRouter();

  const pageContext = useContext(PageContext)
  const { changePage } = pageContext as PageContextType;

  const profileContext = useContext(ProfileContext);
  const { handleProfileInfoChange } = profileContext as ProfileContextType;

  // Generate last seen time message and update it every minute
  useEffect(() => {
    setLastSeen(timestampToElapsedTime(lastSeenTime));
    const intervalId = setInterval(() => {
      const newLastSeen = timestampToElapsedTime(lastSeenTime);
      setLastSeen(newLastSeen);
    }, 60000);

    return () => clearInterval(intervalId);
  }, [lastSeenTime]);

  const handleProfileOpen = () => {
    handleProfileInfoChange(userId)
    router.push("/profile");
    changePage(null)
  }

  return (
    <header className={styles.container}>
      <div className={styles.imageSection}>
        <div className={styles.imageContainer}>
          <div className={styles.image} onClick={handleProfileOpen}>
            <Image src={imageUrl} alt={userId} width={40} height={40} />
          </div>
          {isOnline && <div className={styles.onlineBadge}></div>}
        </div>
      </div>
      <div className={styles.infoContainer}>
        <h3 onClick={handleProfileOpen}>{name}</h3>
        {isOnline && <h5>Active</h5>}
        {!isOnline && lastSeenPermission && <h5>{lastSeen}</h5>}
      </div>
    </header>
  );
};

export default ChatWindowDesktopHeader;
