import Image from "next/image";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import styles from "./MessageItem.module.scss";
import ownerStyles from "./MessageOwner.module.scss";
import { MessageType } from "@/types/ChatWindow/types";
import { timestampToLocalTime } from "@/helpers/ChatWindow";
import { useState } from "react";

type P = {
  message: MessageType;
  lastMessage: boolean;
};

const userId = "1";

const MessageItem = ({ message, lastMessage }: P) => {
  const isMessageOwner = message.senderId === userId;
  const [isMessageRead, setIsMessageRead] = useState(message.viewed);

  return (
    <li className={isMessageOwner ? ownerStyles.container : styles.container}>
      <div
        className={
          isMessageOwner
            ? ownerStyles.messageContainer
            : styles.messageContainer
        }
      >
        <div
          className={
            isMessageOwner
              ? ownerStyles.senderPictureContainer
              : styles.senderPictureContainer
          }
        >
          {lastMessage && (
            <Image
              src={message.senderImageUrl}
              alt={message.messageId}
              width={40}
              height={40}
            />
          )}
        </div>
        <div
          className={
            isMessageOwner
              ? ownerStyles.messageContainer
              : styles.messageContainer
          }
        >
          <div
            className={
              isMessageOwner ? ownerStyles.messageBody : styles.messageBody
            }
          >
            <p>{message.messageBody}</p>
          </div>
          <div
            className={
              isMessageOwner ? ownerStyles.messageInfo : styles.messageInfo
            }
          >
            {isMessageOwner && lastMessage && (
              <div
                className={
                  isMessageRead
                    ? ownerStyles.readCheckIcon
                    : ownerStyles.checkIcon
                }
              >
                <DoneAllIcon fontSize="inherit" color="inherit" />
              </div>
            )}
            {lastMessage && <p>{timestampToLocalTime(message.sentTime)}</p>}
          </div>
        </div>
      </div>
    </li>
  );
};

export default MessageItem;
