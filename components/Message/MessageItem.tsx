import Image from "next/image";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import styles from "./MessageItem.module.scss";
import ownerStyles from "./MessageOwner.module.scss";
import { MessageType } from "@/types/ChatWindow/types";
import { timestampToLocalTime } from "@/helpers/ChatWindow";
import { useContext, useState } from "react";
import UserContext from "@/context/UserContext";
import { User } from "@/types/User";
import { ContactType } from "@/types/Contacts/types";

type P = {
  message: MessageType;
  lastMessage: boolean;
};

const MessageItem = ({ message, lastMessage }: P) => {
  const currentUserContext = useContext<ContactType>(UserContext);
  const { contactId: currentUserId } = currentUserContext;
  const isMessageOwner = message.senderId === currentUserId;
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
