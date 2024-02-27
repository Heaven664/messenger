import SentimentSatisfiedOutlinedIcon from "@mui/icons-material/SentimentSatisfiedOutlined";
import SendIcon from "@mui/icons-material/Send";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

import styles from "@/components/ChatWindowDesktop/Footer.module.scss";
import { useContext, useRef, useState } from "react";
import ChatWindowContext from "@/context/ChatWindowContext";
import { AuthContextType, HeaderContextType } from "@/types/Context/types";
import { HeaderInfoType, MessageType } from "@/types/ChatWindow/types";
import { ChatsContextType } from "@/types/Chats/types";
import ChatsContext from "@/context/ChatsContext";
import { updateLatsMessage } from "@/helpers/Chats";
import AuthContext from "@/context/AuthContext";

type P = {
  addMessage: (message: MessageType) => void;
};

const ChatWindowDesktopFooter = ({ addMessage }: P) => {
  const [emojiPicker, setEmojiPicker] = useState<Boolean>(false);
  const [inputVal, setInputVal] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  // Get current user data from context and destructure it
  const currentUserContext = useContext<AuthContextType>(AuthContext);
  const { user } = currentUserContext;

  // Get current receiver id from context
  const chatWindowContext = useContext<HeaderContextType | null>(
    ChatWindowContext
  );
  const { userId: currentReceiverId } =
    chatWindowContext?.headerInfo as HeaderInfoType;

  // Get current chats from context
  const currentChatsContext = useContext<ChatsContextType>(ChatsContext);
  const { curChats, handleChatsChange } = currentChatsContext;

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

  // Handle message send
  const handleMessageSend = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const messageBody = inputVal.trim();

    // Check if message is empty
    if (!messageBody) return;

    const message: MessageType = {
      messageId: Math.random().toString(36),
      messageBody,
      senderId: user!.id,
      receiverId: currentReceiverId,
      sentTime: new Date().getTime(),
      senderImageUrl: user!.imageSrc,
      viewed: false,
    };

    addMessage(message);
    setInputVal("");
    const newChats = updateLatsMessage(curChats, currentReceiverId);
    handleChatsChange(newChats);
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
            onChange={(e) => setInputVal(e.target.value)}
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
