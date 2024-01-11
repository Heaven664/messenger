import Image from "next/image";
import styles from "./ProfileHero.module.scss";
import { useContext } from "react";
import ProfileContext from "@/context/ProfileContext";
import { ProfileContextType } from "@/types/Profile/types";

const ProfileHero = () => {
  const profileContext = useContext(ProfileContext)
  const { profileInfo } = profileContext as ProfileContextType;
  
  return (
    <div className={styles.layout}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <div className={styles.imageBackground}>
            <Image
              src={profileInfo.imageSrc}
              width={150}
              height={150}
              alt="hero-image"
            />
          </div>
        </div>
        <p>Omar Hamid</p>
      </div>
      <hr />
    </div>
  );
};

export default ProfileHero;
