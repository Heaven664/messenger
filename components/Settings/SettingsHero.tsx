import Image from "next/image";
import styles from "@/components/Settings/SettingsHero.module.scss";
import CameraAltRounded from "@mui/icons-material/CameraAltRounded";
import { useSession } from "next-auth/react";

type P = {
  fileRef: React.RefObject<HTMLInputElement>;
  triggerUpload: () => void;
};

const SettingsHero = ({ fileRef, triggerUpload }: P) => {
  const session = useSession()?.data;

  return (
    <div className={styles.layout}>
      <div className={styles.container}>
        <div className={styles.imageSection}>
          <div className={styles.imageContainer}>
            <div className={styles.imageBackground}>
              <Image
                src={`${
                  session!.user!.imageSrc
                }?timestamp=${new Date().getTime()}`}
                width={150}
                height={150}
                alt="hero-image"
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
