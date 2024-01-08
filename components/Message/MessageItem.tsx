import Image from "next/image";
import styles from "./MessageItem.module.scss";
import { MessageType } from "@/types/ChatWindow/types";
import { timestampToLocalTime } from "@/helpers/ChatWindow";

type P = {
  message: MessageType;
};

const MessageItem = ({ message }: P) => {
  return (
    <li className={styles.container}>
      <div className={styles.messageContainer}>
        <div className={styles.senderPictureContainer}>
          <Image
            src={"/general/main.HEIC"}
            alt="some-alt"
            width={40}
            height={40}
          />
        </div>
        <div className={styles.messageContainer}>
          <div className={styles.messageBody}>
            <p>{message.messageBody}</p>
          </div>
          <div className={styles.messageInfo}>
            <p>{timestampToLocalTime(message.sentTime)}</p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default MessageItem;
