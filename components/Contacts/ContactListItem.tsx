import React, { useContext, useState } from "react";
import Image from "next/image";
import styles from "./ContactListItem.module.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Menu } from "@mui/material";
import { ContactType } from "@/types/Contacts/types";
import ChatWindowContext from "@/context/ChatWindowContext";
import { HeaderContextType } from "@/types/Context/types";

const ListItemContact = ({
  imageSrc,
  name,
  contactId,
  isOnline,
  lastSeenPermission,
  lastSeenTime,
}: ContactType) => {
  const chatWindowDesktopContext = useContext(ChatWindowContext);
  const { changeChatWindowHeaderInfo } =
    chatWindowDesktopContext as HeaderContextType;

  const [anchorEl, setAnchorEl] = useState<null | SVGSVGElement>(null);

  const handleClick = (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleRemoveContact = (contactId: string) => {
    console.log(`Remove Contact with id: ${contactId}`);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleStartChat = () => {
    const newHeaderInfo = {
      name,
      isOnline,
      lastSeenPermission,
      lastSeenTime,
      userId: contactId,
      imageUrl: imageSrc,
    };
    changeChatWindowHeaderInfo(newHeaderInfo);
  };

  return (
    <li key={contactId} className={styles.container} >
      <div className={styles.infoContainer}>
        <div className={styles.imageContainer} onClick={handleStartChat}>
          <Image src={imageSrc} width={35} height={35} alt={name} />
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
            <button onClick={() => handleRemoveContact(contactId)}>
              Remove Contact
            </button>
          </div>
        </Menu>
      </div>
    </li>
  );
};

export default ListItemContact;
