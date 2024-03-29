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
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import WebSocketContext from "@/context/WebSocketContext";

type P = {
  isMobile?: boolean;
};

const ChatWindowDesktopHeader = ({ isMobile }: P) => {
  // Get ChatWindowContext and destructure for current header info
  const headerContext = useContext<HeaderContextType | null>(ChatWindowContext);
  const { headerInfo, changeChatWindowHeaderInfo, setHeaderInfo } =
    headerContext as HeaderContextType;
  const { name, imageUrl, isOnline, userId, lastSeenPermission, lastSeenTime } =
    headerInfo as HeaderInfoType;

  const { socket } = useContext(WebSocketContext);

  useEffect(() => {
    if (!headerInfo?.imageUrl) setImageError(true);
    setImageError(false);
  }, [headerInfo?.imageUrl]);

  useEffect(() => {
    if (socket && headerInfo) {
      socket.on("check header online status", (email) => {
        if (email === headerInfo?.email) {
          setHeaderInfo((prev) => {
            return { ...prev!, isOnline: true };
          });
        }
      });

      socket.on("check header offline status", ({ email, lastSeenTime }) => {
        if (email === headerInfo?.email) {
          setHeaderInfo((prev) => {
            return { ...prev!, isOnline: false, lastSeenTime };
          });
        }
      });

      return () => {
        socket.off("check header online status");
        socket.off("check header offline status");
      };
    }
  }, [socket, headerInfo, setHeaderInfo]);

  const [lastSeen, setLastSeen] = useState<string>("");

  // Image error state
  const [imageError, setImageError] = useState(false);

  // Image path for src get request
  const imageGetPath =
    imageUrl !== "/images/default-profile-image.webp"
      ? `${process.env.NEXT_PUBLIC_API_URL}${imageUrl}`
      : "/general/default-profile-image.webp";

  const router = useRouter();

  // Destructure the function for changing page
  const pageContext = useContext(PageContext);
  const { changePage } = pageContext as PageContextType;

  // Destructure the function for changing profile page info
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

  // Changes profileContext and navigates to profile page
  const handleProfileOpen = () => {
    if (isMobile) changeChatWindowHeaderInfo(null);
    handleProfileInfoChange(userId);
    router.push("/profile");
    changePage(null);
  };

  return (
    <header className={styles.container}>
      <div className={styles.hideMobileChatSection}>
        <div className={styles.hideButtonContainer}>
          <button onClick={() => changeChatWindowHeaderInfo(null)}>
            <KeyboardArrowDownIcon fontSize="inherit" />
          </button>
        </div>
      </div>
      <div className={styles.imageSection}>
        <div className={styles.imageContainer}>
          <div className={styles.image} onClick={handleProfileOpen}>
            <Image
              src={
                !imageError
                  ? imageGetPath
                  : "/general/default-profile-image.webp"
              }
              alt={userId}
              width={40}
              height={40}
              // Set default image if there is an error
              onError={() => setImageError(true)}
            />
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
