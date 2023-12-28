import styles from "@/components/Profile/Profile.module.scss";
import Image from "next/image";
import { MoreVert, Logout } from "@mui/icons-material/";
import { Menu, MenuItem } from "@mui/material/";
import { useState } from "react";
import { NULL } from "sass";
import Background from "./Background";

const Profile = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLogOut = () => {
    console.log("Log out");
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={styles.container}>
      <Background
        handleClick={handleClick}
        handleLogOut={handleLogOut}
        handleClose={handleClose}
        anchorEl={anchorEl}
      />
      <div>Profile Hero</div>
      <div>Profile Info</div>
    </div>
  );
};

export default Profile;
