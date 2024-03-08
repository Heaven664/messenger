import { useContext, useEffect, useState } from "react";
import styles from "./ChatWindowMobile.module.scss";
import ChatWindowContext from "@/context/ChatWindowContext";
import { MessageType } from "@/types/ChatWindow/types";
import { dummyMessages } from "@/dummyMessage";
import ChatWindowDesktopHeader from "../ChatWindowDesktop/Header";
import MessageContainer from "../Message/MessageContainer";
import Footer from "../ChatWindowDesktop/Footer";
import EmptyChat from "../ChatWindowDesktop/EmptyChatWindow";
import MessagesContext from "@/context/MessagesContext";

const ChatWindowMobile = () => {
  const chatWindowDesktopContext = useContext(ChatWindowContext);
  const messagesContext = useContext(MessagesContext);

  // Checks if there is a currently open chat window
  const chatWindowSelected = chatWindowDesktopContext?.headerInfo !== null;

  // Update messages when chat window changes
  useEffect(() => {
    setCurMessages(messagesContext!.messages);
  }, [chatWindowDesktopContext?.headerInfo, messagesContext]);

  const [curMessages, setCurMessages] = useState<MessageType[]>(dummyMessages);

  const addMessage = (message: MessageType) => {
    setCurMessages([...curMessages, message]);
  };

  return (
    <div className={styles.container}>
      {chatWindowSelected ? (
        <>
          <ChatWindowDesktopHeader />
          <MessageContainer messages={curMessages} />
          <Footer addMessage={addMessage} />
        </>
      ) : (
        <EmptyChat />
      )}
    </div>
  );
};

export default ChatWindowMobile;
