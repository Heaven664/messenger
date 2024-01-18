import styles from "@/components/Profile/Profile.module.scss";
import { useContext, useEffect, useState } from "react";
import ProfileBackground from "./ProfileBackground";
import ProfileHero from "./ProfileHero";
import ProfileInfo from "./ProfileInfo";
import ProfileContext from "@/context/ProfileContext";
import { ProfileContextType } from "@/types/Profile/types";
import { ContactType } from "@/types/Contacts/types";
import { dummyAllUsers } from "@/dummyAllUsers";
import AuthContext from "@/context/AuthContext";

const Profile = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  // Get Auth context to pass logout function to ProfileBackground
  const authContext = useContext(AuthContext);
  const { logout } = authContext;

  const profileContext = useContext(ProfileContext);
  const { profileId } = profileContext as ProfileContextType;
  const [profileInfo, setProfileInfo] = useState<ContactType | undefined>(
    dummyAllUsers.find((contact) => contact.contactId === profileId)
  );

  useEffect(() => {
    const profile = dummyAllUsers.find(
      (contact) => contact.contactId === profileId
    );
    setProfileInfo(profile as ContactType);
  }, [profileId]);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLogOut = () => {
    console.log("Log out");
    logout();
    setAnchorEl(null);
  };

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
