import styles from "@/components/Profile/Profile.module.scss";
import { useState } from "react";
import Background from "./Background";
import Hero from "./Hero";
import ProfileInfo from "./ProfileInfo";

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
      <Hero />
      <ProfileInfo />
    </div>
  );
};

export default Profile;
