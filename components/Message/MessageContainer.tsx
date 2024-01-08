import styles from "./MessageContainer.module.scss";
import MessageItem from "./MessageItem";

const MessageContainer = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.listContainer}>
        <MessageItem />
      </ul>
    </div>
  );
};

export default MessageContainer;
