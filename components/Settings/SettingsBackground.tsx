import Image from "next/image";
import styles from "@/components/Settings/SettingsBackground.module.scss";
import { EditRounded } from "@mui/icons-material/";

const SettingsBackground = () => {
  return (
    <div className={styles.backgroundContainer}>
      <Image
        src={"/general/background-image.jpg"}
        width={1000}
        height={1000}
        priority={true}
        alt="Settings Background Image"
      />
      <h5>Settings</h5>
      <div className={styles.editContainer}>
        <EditRounded />
      </div>
    </div>
  );
};

export default SettingsBackground;
