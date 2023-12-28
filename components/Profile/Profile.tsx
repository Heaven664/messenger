import styles from "@/components/Profile/Profile.module.scss";
import Image from "next/image";
import { MoreVert } from "@mui/icons-material/";
import { Menu, MenuItem } from "@mui/material/";
import { useState } from "react";

const Profile = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLogOut = () => {
    console.log("Log out");
    setAnchorEl(null);
  };

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.backgroundContainer}>
          <Image
            src={"/general/background-image.jpg"}
            width={1000}
            height={1000}
            priority={true}
            alt="Profile Background Image"
          />
          <h5>My Profile</h5>
          <div className={styles.moreVertContainer} onClick={handleClick}>
            <MoreVert />
          </div>
          {anchorEl && (
            <div className={styles.optionsContainer}>
              <Menu
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                onClose={() => setAnchorEl(null)}
              >
                <ul>
                  <MenuItem onClick={handleLogOut} key={"logout"}>
                    Log out
                  </MenuItem>
                </ul>
              </Menu>
            </div>
          )}
        </div>
      </div>
      <div>Profile Hero</div>
      <div>Profile Info</div>
    </div>
  );
};

export default Profile;
