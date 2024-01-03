import Image from "next/image";
import styles from "@/components/Settings/SettingsHero.module.scss";
import CameraAltRounded from "@mui/icons-material/CameraAltRounded";

const SettingsHero = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.container}>
        <div className={styles.imageSection}>
          <div className={styles.imageContainer}>
            <div className={styles.imageBackground}>
              <Image
                src={"/general/main.HEIC"}
                width={150}
                height={150}
                alt="hero-image"
              />
            </div>
              <div className={styles.changeIconContainer}>
                <CameraAltRounded className={styles.changeIcon} />
              </div>
          </div>
          <p>Omar Hamid</p>
        </div>
      </div>
      <hr />
    </div>
  );
};
export default SettingsHero;
