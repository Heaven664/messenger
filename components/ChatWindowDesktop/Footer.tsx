import SentimentSatisfiedOutlinedIcon from "@mui/icons-material/SentimentSatisfiedOutlined";
import SendIcon from "@mui/icons-material/Send";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

import styles from "@/components/ChatWindowDesktop/Footer.module.scss";
import { useState } from "react";

const ChatWindowDesktopFooter = () => {
  const [emojiPicker, setEmojiPicker] = useState<Boolean>(false);
  const [inputVal, setInputVal] = useState("");

  // Close emoji picker when user clicks outside of it
  const handleClickOutside = (e: any) => {
    // Check if user clicked on emoji icon or its child
    const isEmojiIconOrChild = e.target.closest("#emojiIcon");
    if (!isEmojiIconOrChild) {
      setEmojiPicker(false);
    }
  };

  // Add emoji to message input state
  const handleEmojiSelect = (e: any) => {
    const newMessage = inputVal + e.native;
    setInputVal(newMessage);
  };

  // Update message input state
  const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputVal(e.target.value);
  };

  // Send message
  const handleMessageSend = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const messageBody = inputVal.trim();
    const senderId = "1";
    const receiverId = "2";
    const sentTime = new Date().getTime();
    const senderImageUrl = "/public/general/main.HEIC";
    const viewed = false;

    const message = {
      messageBody,
      senderId,
      receiverId,
      sentTime,
      senderImageUrl,
      viewed
    }
    console.log(message);
    setInputVal("");
  };

  return (
    <footer>
      <form className={styles.container} onSubmit={handleMessageSend}>
        <div className={styles.optionsSection}>
          <div
            className={styles.emojiIconContainer}
            onClick={() => setEmojiPicker((prev) => !prev)}
          >
            <SentimentSatisfiedOutlinedIcon
              className={styles.emojiIcon}
              id="emojiIcon"
              fontSize="inherit"
            />
          </div>
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
            value={inputVal}
          />
        </div>
        <div className={styles.buttonSection}>
          <button>
            <SendIcon fontSize="inherit" />
          </button>
        </div>
      </form>
    </footer>
  );
};

export default ChatWindowDesktopFooter;
