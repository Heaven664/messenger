import { useContext, useEffect, useState } from "react";
import MessageContainer from "../Message/MessageContainer";
import styles from "./ChatWindowDesktop.module.scss";
import Footer from "./Footer";
import ChatWindowDesktopHeader from "./Header";
import ChatWindowContext from "@/context/ChatWindowContext";
import EmptyChat from "./EmptyChatWindow";
import { MessageType } from "@/types/ChatWindow/types";
import MessagesContext from "@/context/MessagesContext";
import WebSocketContext from "@/context/WebSocketContext";

const ChatWindowDesktop = () => {
  const chatWindowDesktopContext = useContext(ChatWindowContext);
  const messagesContext = useContext(MessagesContext);

  // Checks if there is a currently open chat window
  const chatWindowSelected = chatWindowDesktopContext?.headerInfo !== null;

  const { socket } = useContext(WebSocketContext);

  useEffect(() => {
    if (socket) {
      socket.on("private message", (message: MessageType) => {
        if (
          message.senderEmail === chatWindowDesktopContext?.headerInfo?.email
        ) {
          console.log("updating messages");
          setCurMessages((prev) => [...prev, message]);
        }
      });
      return () => {
        socket.off("private message");
      };
    }
  }, [socket, chatWindowDesktopContext?.headerInfo?.email]);

  // Update messages when chat window changes
  useEffect(() => {
    setCurMessages(messagesContext!.messages);
  }, [chatWindowDesktopContext?.headerInfo, messagesContext]);

  const [curMessages, setCurMessages] = useState<MessageType[]>(
    messagesContext!.messages
  );
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

export default ChatWindowDesktop;
