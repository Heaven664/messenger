import Image from "next/image";
import styles from "@/components/Settings/SettingsHero.module.scss";
import CameraAltRounded from "@mui/icons-material/CameraAltRounded";
import { useSession } from "next-auth/react";
import { useState } from "react";

type P = {
  fileRef: React.RefObject<HTMLInputElement>;
  triggerUpload: () => void;
};

const SettingsHero = ({ fileRef, triggerUpload }: P) => {
  // Image error state
  const [imageError, setImageError] = useState(false);
  const session = useSession()?.data;

  const imagePath = `${process.env.NEXT_PUBLIC_API_URL}${
    session!.user!.imageSrc
  }`;

  return (
    <div className={styles.layout}>
      <div className={styles.container}>
        <div className={styles.imageSection}>
          <div className={styles.imageContainer}>
            <div className={styles.imageBackground}>
              <Image
                src={
                  !imageError
                    ? imagePath
                    : "/general/default-profile-image.webp"
                }
                width={150}
                height={150}
                alt="hero-image"
                // Set default image if there is an error
                onError={() => setImageError(true)}
              />
            </div>
            <div className={styles.changeIconContainer} onClick={triggerUpload}>
              <CameraAltRounded className={styles.changeIcon} />
            </div>
            <input type="file" className={styles.fileInput} ref={fileRef} />
          </div>
          <p>{session?.user.name}</p>
        </div>
      </div>
      <hr />
    </div>
  );
};
export default SettingsHero;
