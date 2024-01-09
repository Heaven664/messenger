import { useContext, useState } from "react";
import MessageContainer from "../Message/MessageContainer";
import styles from "./ChatWindowDesktop.module.scss";
import Footer from "./Footer";
import ChatWindowDesktopHeader from "./Header";
import ChatWindowContext from "@/context/ChatWindowContext";
import EmptyChat from "./EmptyChatWindow";
import { dummyMessages } from "@/dummyMessage";
import { MessageType } from "@/types/ChatWindow/types";

const ChatWindowDesktop = () => {
  const chatWindowDesktopContext = useContext(ChatWindowContext);
  const chatWindowSelected = chatWindowDesktopContext?.headerInfo !== null;
  const [messages, setMessages] = useState<MessageType[]>(dummyMessages);
  const addMessage = (message: MessageType) => {
    setMessages([...messages, message]);
  };

  return (
    <div className={styles.container}>
      {chatWindowSelected ? (
        <>
          <ChatWindowDesktopHeader />
          <MessageContainer messages={messages} />
          <Footer addMessage={addMessage}/>
        </>
      ) : (
        <EmptyChat />
      )}
    </div>
  );
};

export default ChatWindowDesktop;
