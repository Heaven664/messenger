import Image from "next/image";
import styles from "@/components/Profile/ProfileBackground.module.scss";
import MoreVert from "@mui/icons-material/MoreVert";
import Logout from "@mui/icons-material/Logout";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { BackgroundProps } from "@/types/Profile/types";

const ProfileBackground = ({
  handleClick,
  anchorEl,
  handleClose,
  handleLogOut,
}: BackgroundProps) => {
  return (
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
            onClose={handleClose}
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
  );
};

export default ProfileBackground;
