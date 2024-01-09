import SentimentSatisfiedOutlinedIcon from "@mui/icons-material/SentimentSatisfiedOutlined";
import SendIcon from "@mui/icons-material/Send";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

import styles from "@/components/ChatWindowDesktop/Footer.module.scss";
import { useContext, useRef, useState } from "react";
import { User } from "@/types/User";
import UserContext from "@/context/UserContext";
import ChatWindowContext from "@/context/ChatWindowContext";
import { HeaderContextType } from "@/types/Context/types";
import { HeaderInfoType, MessageType } from "@/types/ChatWindow/types";

type P = {
  addMessage: (message: MessageType) => void;
};

const ChatWindowDesktopFooter = ({ addMessage }: P) => {
  const [emojiPicker, setEmojiPicker] = useState<Boolean>(false);
  const [inputVal, setInputVal] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  // Get current user data from context and destructure it
  const currentUserContext = useContext<User>(UserContext);
  const { id: currentUserId, profileImage: currentUserProfileImage } =
    currentUserContext;

  // Get current receiver id from context
  const chatWindowContext = useContext<HeaderContextType | null>(
    ChatWindowContext
  );
  const { userId: currentReceiverId } =
    chatWindowContext?.headerInfo as HeaderInfoType;

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
    inputRef.current?.focus();
  };

  // Update message input state
  const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputVal(e.target.value);
  };

  // Send message
  const handleMessageSend = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const messageBody = inputVal.trim();
    const senderId = currentUserId;
    const receiverId = currentReceiverId;
    const sentTime = new Date().getTime();
    const senderImageUrl = currentUserProfileImage;
    const viewed = false;
    // Mock message id
    const messageId = Math.random().toString(36);

    // Check if message is empty
    if (!messageBody) return;

    const message: MessageType = {
      messageId,
      messageBody,
      senderId,
      receiverId,
      sentTime,
      senderImageUrl,
      viewed,
    };
    console.log(message);
    addMessage(message);
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
            ref={inputRef}
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
