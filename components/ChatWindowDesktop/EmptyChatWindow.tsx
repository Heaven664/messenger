import styles from './EmptyChatWindow.module.scss';

const EmptyChat = () => {
  return (
    <div className={styles.emptyContainer}>
      <div className={styles.emptyContainerMessage}>
        <h3>Welcome to Messenger</h3>
        <p>Choose a contact on the left to start a conversation with.</p>
      </div>
    </div>
  );
};

export default EmptyChat;
