import styles from "@/components/Profile/Profile.module.scss";
import { useContext, useEffect, useState } from "react";
import ProfileBackground from "./ProfileBackground";
import ProfileHero from "./ProfileHero";
import ProfileInfo from "./ProfileInfo";
import ProfileContext from "@/context/ProfileContext";
import { ProfileContextType } from "@/types/Profile/types";
import { User } from "@/types/User";
import { fetchProfileInfo } from "@/helpers/Api/fetchProfileInfo";
import { signOut, useSession } from "next-auth/react";

const Profile = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  // Get authenticated user data from session
  const session = useSession().data!;
  const user = session?.user as User;

  const profileContext = useContext(ProfileContext);
  const { profileId } = profileContext as ProfileContextType;
  const [profileInfo, setProfileInfo] = useState<User | undefined>(user!);

  // Fetch profile info when profileId changes, skip if profileId is null (initial state)
  useEffect(() => {
    if (profileId) {
      fetchProfileInfo(profileId).then((userInfo) => setProfileInfo(userInfo));
    }
  }, [profileId]);

  // Open logout option popup
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  // Logout user
  const handleLogOut = () => {
    signOut();
    setAnchorEl(null);
  };

  // Close logout option popup
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={styles.container}>
      <ProfileBackground
        handleClick={handleClick}
        handleLogOut={handleLogOut}
        handleClose={handleClose}
        anchorEl={anchorEl}
      />
      <ProfileHero imageSrc={profileInfo!.imageSrc} name={profileInfo!.name} />
      <ProfileInfo
        name={profileInfo!.name}
        residency={profileInfo!.residency}
        email={profileInfo!.email}
      />
    </div>
  );
};

export default Profile;

