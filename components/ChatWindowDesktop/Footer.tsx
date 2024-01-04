import SentimentSatisfiedOutlinedIcon from "@mui/icons-material/SentimentSatisfiedOutlined";

import styles from "@/components/ChatWindowDesktop/Footer.module.scss";

const ChatWindowDesktopFooter = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.optionsSection}>
        <button className={styles.emojiButton}></button>
        <SentimentSatisfiedOutlinedIcon className={styles.emojiIcon} />
      </div>
      <div className={styles.inputSection}>input</div>
      <div className={styles.buttonSection}>button</div>
    </footer>
  );
};

export default ChatWindowDesktopFooter;
