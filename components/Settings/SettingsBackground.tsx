import Image from "next/image";
import styles from "@/components/Settings/SettingsBackground.module.scss";
import EditRounded from "@mui/icons-material/EditRounded";
import { Button } from "@mui/material";

type P = {
  file: File | null;
  handleFileSend: () => void;
  error: string;
  hideError: () => void;
};

const SettingsBackground = ({ file, handleFileSend, error, hideError }: P) => {
  return (
    <div className={styles.backgroundContainer}>
      <Image
        src={"/general/background-image.jpg"}
        width={500}
        height={500}
        alt="Settings Background Image"
      />
      <h5>Settings</h5>

      <div className={styles.editContainer}>
        {error && (
          <Button
            variant="outlined"
            className={styles.errorButton}
            type="submit"
            onClick={hideError}
          >
            {error}
          </Button>
        )}
        {(file && !error) && (
          <Button
            onClick={handleFileSend}
            variant="outlined"
            className={styles.fileButton}
            type="submit"
          >
            Update Image
          </Button>
        )}
      </div>
    </div>
  );
};

export default SettingsBackground;
