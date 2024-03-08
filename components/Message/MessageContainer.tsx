import { MessageType } from "@/types/ChatWindow/types";
import styles from "./MessageContainer.module.scss";
import MessageItem from "./MessageItem";
import { dummyMessages } from "@/dummyMessage";

type P = {
  messages: MessageType[];
};
// TODO
// interface IMessageContainerProps {
// messages: MessageType[];
// }

const MessageContainer = ({ messages }: P) => {
  const allMessages = messages.map((message, index) => {
    let lastMessage = true;
    if (index !== messages.length - 1) {
      lastMessage = messages[index + 1].senderEmail !== message.senderEmail;
    }
    return (
      <MessageItem
        key={message._id}
        message={message}
        lastMessage={lastMessage}
      />
    );
  });

  return (
    <div className={styles.container}>
      <ul className={styles.listContainer}>{allMessages}</ul>
    </div>
  );
};

export default MessageContainer;
