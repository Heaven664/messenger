import Image from "next/image";
import styles from "@/components/Settings/SettingsBackground.module.scss";
import EditRounded from "@mui/icons-material/EditRounded";
import { Button } from "@mui/material";

type P = {
  file: File | null;
  handleFileSend: () => void;
};

const SettingsBackground = ({ file, handleFileSend }: P) => {
  return (
    <div className={styles.backgroundContainer}>
      <Image
        src={"/general/background-image.jpg"}
        width={500}
        height={500}
        alt="Settings Background Image"
      />
      <h5>Settings</h5>
      {file && (
        <div className={styles.editContainer} onClick={handleFileSend}>
          <Button
            variant="outlined"
            className={styles.changeIcon}
            type="submit"
          >
            Update Image
          </Button>
        </div>
      )}
    </div>
  );
};

export default SettingsBackground;
