import { useContext, useEffect, useState } from "react";
import styles from "./ChatWindowMobile.module.scss";
import ChatWindowContext from "@/context/ChatWindowContext";
import { MessageType } from "@/types/ChatWindow/types";
import ChatWindowDesktopHeader from "../ChatWindowDesktop/Header";
import MessageContainer from "../Message/MessageContainer";
import Footer from "../ChatWindowDesktop/Footer";
import EmptyChat from "../ChatWindowDesktop/EmptyChatWindow";
import MessagesContext from "@/context/MessagesContext";

const ChatWindowMobile = () => {
  const chatWindowDesktopContext = useContext(ChatWindowContext);
  const { messages, setMessages } = useContext(MessagesContext)!;

  // Checks if there is a currently open chat window
  const chatWindowSelected = chatWindowDesktopContext?.headerInfo !== null;

  return (
    <div className={styles.container}>
      {chatWindowSelected ? (
        <>
          <ChatWindowDesktopHeader />
          <MessageContainer messages={messages} />
          <Footer />
        </>
      ) : (
        <EmptyChat />
      )}
    </div>
  );
};

export default ChatWindowMobile;
