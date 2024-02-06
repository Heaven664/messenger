import Image from "next/image";
import styles from "@/components/Profile/ProfileBackground.module.scss";
import MoreVert from "@mui/icons-material/MoreVert";
import Logout from "@mui/icons-material/Logout";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { BackgroundProps, ProfileContextType } from "@/types/Profile/types";
import { useContext } from "react";
import ProfileContext from "@/context/ProfileContext";
import AuthContext from "@/context/AuthContext";
import { AuthContextType } from "@/types/Context/types";

const ProfileBackground = ({
  handleClick,
  anchorEl,
  handleClose,
  handleLogOut,
}: BackgroundProps) => {
  const currentUserContext = useContext<AuthContextType>(AuthContext);
  const { user } = currentUserContext;

  const profileContext = useContext(ProfileContext);
  const { profileId } = profileContext as ProfileContextType;

  // Check if the profile is the current user's profile to show additional options
  const mainProfile = user!.id === profileId;
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
