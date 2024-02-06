import { useContext, useState } from "react";
import styles from "./ChatWindowMobile.module.scss";
import ChatWindowContext from "@/context/ChatWindowContext";
import { MessageType } from "@/types/ChatWindow/types";
import { dummyMessages } from "@/dummyMessage";
import ChatWindowDesktopHeader from "../ChatWindowDesktop/Header";
import MessageContainer from "../Message/MessageContainer";
import Footer from "../ChatWindowDesktop/Footer";
import EmptyChat from "../ChatWindowDesktop/EmptyChatWindow";

const ChatWindowMobile = () => {
  const chatWindowDesktopContext = useContext(ChatWindowContext);
  
  // Checks if there is a currently open chat window
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
          <Footer addMessage={addMessage} />
        </>
      ) : (
        <EmptyChat />
      )}
    </div>
  );
};

export default ChatWindowMobile;
