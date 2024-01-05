import SentimentSatisfiedOutlinedIcon from "@mui/icons-material/SentimentSatisfiedOutlined";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

import styles from "@/components/ChatWindowDesktop/Footer.module.scss";
import { useState } from "react";

const ChatWindowDesktopFooter = () => {
  const [emojiPicker, setEmojiPicker] = useState<Boolean>(true);

  // Close emoji picker when user clicks outside of it
  const handleClickOutside = (e: any) => {
    if (e.target.id !== "emojiIcon") {
      setEmojiPicker(false);
    }
  };

  const handleEmojiSelect = (e: any) => {
    console.log(e.native);
  };

  return (
    <footer className={styles.container}>
      <div className={styles.optionsSection}>
        <SentimentSatisfiedOutlinedIcon
          className={styles.emojiIcon}
          id="emojiIcon"
          onClick={() => setEmojiPicker((prev) => !prev)}
        />
        {emojiPicker && (
          <div className={styles.emojiPickerContainer}>
            <Picker
              data={data}
              onEmojiSelect={handleEmojiSelect}
              emojiSize={"22"}
              previewPosition={"none"}
              onClickOutside={handleClickOutside}
              theme={"dark"}
            />
          </div>
        )}
      </div>
      <div className={styles.inputSection}>input</div>
      <div className={styles.buttonSection}>button</div>
    </footer>
  );
};

export default ChatWindowDesktopFooter;
