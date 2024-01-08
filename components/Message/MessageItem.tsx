import Image from "next/image";
import styles from "./MessageItem.module.scss";

const MessageItem = () => {
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
            <p>Sender Message example Sender Message example Sender Message example Sender Message example </p>
          </div>
          <div className={styles.messageInfo}>
            <p>15:24</p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default MessageItem;
