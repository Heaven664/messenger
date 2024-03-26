import Image from "next/image";
import styles from "@/components/Settings/SettingsBackground.module.scss";
import { CircularProgress } from "@mui/material";
import { Button } from "@mui/material";

type P = {
  file: File | null;
  handleFileSend: () => void;
  error: string;
  hideError: () => void;
  isLoading: boolean;
};

const SettingsBackground = ({
  file,
  handleFileSend,
  error,
  hideError,
  isLoading,
}: P) => {
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
        {isLoading && (
          <CircularProgress color="success" size={30} thickness={5.0} />
        )}
        {file && !error && !isLoading && (
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
