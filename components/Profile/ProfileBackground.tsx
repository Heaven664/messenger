import Image from "next/image";
import styles from "@/components/Profile/ProfileBackground.module.scss";
import MoreVert from "@mui/icons-material/MoreVert";
import Logout from "@mui/icons-material/Logout";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { BackgroundProps, ProfileContextType } from "@/types/Profile/types";
import { useContext } from "react";
import UserContext from "@/context/UserContext";
import ProfileContext from "@/context/ProfileContext";

const ProfileBackground = ({
  handleClick,
  anchorEl,
  handleClose,
  handleLogOut,
}: BackgroundProps) => {
  const currentUserContext = useContext(UserContext);
  const currentUserId = currentUserContext?.id;

  const profileContext = useContext(ProfileContext);
  const { handleProfileInfoChange } = profileContext as ProfileContextType;

  const mainProfile = currentUserId === profileContext?.profileId;
  return (
    <div className={styles.backgroundContainer}>
      <Image
        src={"/general/background-image.jpg"}
        width={1000}
        height={1000}
        priority={true}
        alt="Profile Background Image"
      />
      {mainProfile && (
        <div>
          <h5>My Profile</h5>
          <div className={styles.moreVertContainer} onClick={handleClick}>
            <MoreVert />
          </div>
        </div>
      )}
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
