import styles from "@/components/Profile/Profile.module.scss";
import Image from "next/image";
import { MoreVert, Logout } from "@mui/icons-material/";
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
              autoFocus={false}
              onClose={() => setAnchorEl(null)}
              anchorOrigin={{
                vertical: 28,
                horizontal: -110,

              }}
            >
              <MenuItem
                onClick={handleLogOut}
                key={"logout"}
                selected={false}
                sx={{
                  display: "flex",
                  gap: "8px",
                }}
              >
                <p>Log Out</p>
                <Logout />
              </MenuItem>
            </Menu>
          </div>
        )}
      </div>
      <div>Profile Hero</div>
      <div>Profile Info</div>
    </div>
  );
};

export default Profile;
