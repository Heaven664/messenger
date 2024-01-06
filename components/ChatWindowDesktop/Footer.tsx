import SentimentSatisfiedOutlinedIcon from "@mui/icons-material/SentimentSatisfiedOutlined";
import SendIcon from "@mui/icons-material/Send";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

import styles from "@/components/ChatWindowDesktop/Footer.module.scss";
import { useState } from "react";

const ChatWindowDesktopFooter = () => {
  const [emojiPicker, setEmojiPicker] = useState<Boolean>(true);
  const [message, setMessage] = useState("");

  // Close emoji picker when user clicks outside of it
  const handleClickOutside = (e: any) => {
    if (e.target.id !== "emojiIcon") {
      setEmojiPicker(false);
    }
  };

  // Add emoji to message input state
  const handleEmojiSelect = (e: any) => {
    const newMessage = message + e.native;
    setMessage(newMessage);
  };

  // Update message input state
  const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  // Send message
  const handleMessageSend = () => {
    console.log(message);
    setMessage("");
  }

  return (
    <footer className={styles.container}>
      <div className={styles.optionsSection}>
        <SentimentSatisfiedOutlinedIcon
          className={styles.emojiIcon}
          id="emojiIcon"
          onClick={() => setEmojiPicker((prev) => !prev)}
          fontSize="inherit"
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
      <div className={styles.inputSection}>
        <input
          type="text"
          placeholder="Type your message..."
          onChange={handleMessageChange}
          value={message}
        />
      </div>
      <div className={styles.buttonSection}>
        <button onClick={handleMessageSend}>
          <SendIcon fontSize="inherit" />
        </button>
      </div>
    </footer>
  );
};

export default ChatWindowDesktopFooter;
