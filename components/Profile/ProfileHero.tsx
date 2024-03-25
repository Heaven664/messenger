import Image from "next/image";
import styles from "./ProfileHero.module.scss";
import { useState } from "react";

type P = {
  imageSrc: string | undefined;
  name: string | undefined;
};

const ProfileHero = ({ imageSrc, name }: P) => {
  // Image error state
  const [imageError, setImageError] = useState(false);
  // Image path for src get request
  const imageGetPath = imageSrc
    ? `${process.env.NEXT_PUBLIC_API_URL}${imageSrc}`
    : `${process.env.NEXT_PUBLIC_API_URL}/images/default-profile-image.jpg`;

  return (
    <div className={styles.layout}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <div className={styles.imageBackground}>
            <Image
              src={
                !imageError
                  ? imageGetPath
                  : "/general/default-profile-image.webp"
              }
              width={150}
              height={150}
              alt="hero-image"
              // Set default image if there is an error
              onError={() => setImageError(true)}
            />
          </div>
        </div>
        <p>{name || "Unknown"}</p>
      </div>
      <hr />
    </div>
  );
};

export default ProfileHero;
