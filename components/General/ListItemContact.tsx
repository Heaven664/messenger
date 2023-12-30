import React, { useState } from "react"; // Import React and useState
import Image from "next/image";
import styles from "./ListItemContact.module.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert"; // Change to MoreVertIcon
import { Menu } from "@mui/material";

const ListItemContact = () => {
  const [anchorEl, setAnchorEl] = useState<null | SVGSVGElement>(null);

  const handleClick = (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleRemoveContact = () => {
    console.log("Remove Contact");
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imageContainer}>
          <Image
            src="/general/IMG_2537.HEIC"
            width={35}
            height={35}
            alt="avatar-name"
          />
        </div>
        <div className={styles.nameContainer}>
          <h3>Omar Hamid</h3>
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
            <button onClick={handleRemoveContact}>Remove Contact</button>
          </div>
        </Menu>
      </div>
    </div>
  );
};

export default ListItemContact;
