import styles from "@/components/Profile/Profile.module.scss";
import { useContext, useEffect, useState } from "react";
import ProfileBackground from "./ProfileBackground";
import ProfileHero from "./ProfileHero";
import ProfileInfo from "./ProfileInfo";
import ProfileContext from "@/context/ProfileContext";
import { ProfileContextType } from "@/types/Profile/types";
import { rawContacts } from "@/dummyData";
import { ContactType } from "@/types/Contacts/types";

const Profile = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const profileContext = useContext(ProfileContext);
  const { profileId } = profileContext as ProfileContextType;
  const [profileInfo, setProfileInfo] = useState<ContactType | null>(null);

  useEffect(() => {
    const profile = rawContacts.find(
      (contact) => contact.contactId === profileId
    );
    setProfileInfo(profile as ContactType);
  }, [profileId]);

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
      <ProfileBackground
        handleClick={handleClick}
        handleLogOut={handleLogOut}
        handleClose={handleClose}
        anchorEl={anchorEl}
      />
      <ProfileHero />
      <ProfileInfo />
    </div>
  );
};

export default Profile;
