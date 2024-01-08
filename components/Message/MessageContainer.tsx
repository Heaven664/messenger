import styles from "./MessageContainer.module.scss";
import MessageItem from "./MessageItem";
import { dummyMessages } from "@/dummyMessage";

const MessageContainer = () => {

  const messages = dummyMessages.map((message) => <MessageItem key={message.messageId} message={message} />);

  return (
    <div className={styles.container}>
      <ul className={styles.listContainer}>
        {messages}
      </ul>
    </div>
  );
};

export default MessageContainer;
