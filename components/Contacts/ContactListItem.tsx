import React, { useContext, useState } from "react";
import Image from "next/image";
import styles from "./ContactListItem.module.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Menu } from "@mui/material";
import ChatWindowContext from "@/context/ChatWindowContext";
import { HeaderContextType } from "@/types/Context/types";
import { User } from "@/types/User";
import { useSession } from "next-auth/react";
import removeContact from "@/helpers/Api/removeContact";
import MessagesContext from "@/context/MessagesContext";
import getMessages from "@/helpers/Api/getMessages";
import WebSocketContext from "@/context/WebSocketContext";
import { fetchProfileInfo } from "@/helpers/Api/fetchProfileInfo";

type P = {
  imageSrc: string;
  name: string;
  email: string;
  id: string;
  isOnline: boolean;
  residency: string;
  lastSeenPermission: boolean;
  lastSeenTime: number;
  setFriends: React.Dispatch<React.SetStateAction<User[]>>;
};

const ListItemContact = ({ imageSrc, name, email, id, setFriends }: P) => {
  const chatWindowDesktopContext = useContext(ChatWindowContext);
  const messagesContext = useContext(MessagesContext);
  const session = useSession().data;
  const userEmail = session!.user.email;

  const { socket } = useContext(WebSocketContext);

  // Get function for changing chat window header info
  const { changeChatWindowHeaderInfo } =
    chatWindowDesktopContext as HeaderContextType;

  const [anchorEl, setAnchorEl] = useState<null | SVGSVGElement>(null);

  // Image error state
  const [imageError, setImageError] = useState(false);
  // Image path for src get request with timestamp to prevent caching
  const imageGetPath =
    imageSrc !== "/images/default-profile-image.webp"
      ? `${process.env.NEXT_PUBLIC_API_URL}${imageSrc}`
      : "/general/default-profile-image.webp";

  // Trigger remove contact popup
  const handleClick = (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleRemoveContact = async (friendEmail: string) => {
    const { error } = await removeContact(
      { userEmail, friendEmail },
      session!.backendTokens.accessToken
    );
    if (error) console.log(error);
    setFriends((prev: User[]) => {
      return prev.filter((contact: User) => contact.email !== friendEmail);
    });
    if (socket) {
      socket.emit("remove contact", {
        userEmail,
        friendEmail,
      });
    }
    setAnchorEl(null);
  };

  // Close popup
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Updates chat window header info with contact info
  const handleStartChat = async () => {
    // Get user info
    const { response: user, error } = await fetchProfileInfo(id);
    // If no user or error, log error
    if (error || !user) return console.log(error);
    // Get messages
    const { response } = await getMessages(userEmail, email);
    if (!response) return console.log("Failed getting messages");
    // Update chat window header info
    const newHeaderInfo = {
      name: user.name,
      email: user.email,
      isOnline: user.isOnline,
      lastSeenPermission: user.lastSeenPermission,
      lastSeenTime: user.lastSeenTime,
      userId: user.id,
      imageUrl: user.imageSrc,
    };
    changeChatWindowHeaderInfo(newHeaderInfo);
    if (response) messagesContext?.setMessages(response);
  };

  return (
    <li key={id} className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imageContainer} onClick={handleStartChat}>
          <Image
            src={
              !imageError ? imageGetPath : "/general/default-profile-image.webp"
            }
            width={35}
            height={35}
            alt={name}
            // Set default image if there is an error
            onError={() => setImageError(true)}
          />
        </div>
        <div className={styles.nameContainer} onClick={handleStartChat}>
          <h3>{name}</h3>
        </div>
      </div>
      <div className={styles.optionsContainer}>
        <MoreVertIcon
          color="inherit"
          fontSize="inherit"
          onClick={(e) => handleClick(e)}
        />{" "}
        <Menu
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          autoFocus={false}
          onClose={handleClose}
          anchorOrigin={{
            vertical: -30,
            horizontal: -115,
          }}
          className={styles.menuContainer}
        >
          <div className={styles.popupContainer}>
            <button onClick={() => handleRemoveContact(email)}>
              Remove Contact
            </button>
          </div>
        </Menu>
      </div>
    </li>
  );
};

export default ListItemContact;
