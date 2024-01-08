import styles from "./MessageContainer.module.scss";
import MessageItem from "./MessageItem";
import { dummyMessages } from "@/dummyMessage";

const MessageContainer = () => {
  const messages = dummyMessages.map((message, index) => {
    let lastMessage = true;
    if (index !== dummyMessages.length - 1) {
      lastMessage = dummyMessages[index + 1].senderId !== message.senderId;
    }
    return (
      <MessageItem
        key={message.messageId}
        message={message}
        lastMessage={lastMessage}
      />
    );
  });

  return (
    <div className={styles.container}>
      <ul className={styles.listContainer}>{messages}</ul>
    </div>
  );
};

export default MessageContainer;
