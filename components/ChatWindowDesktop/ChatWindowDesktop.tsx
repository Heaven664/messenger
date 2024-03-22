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
import { useSession } from "next-auth/react";

const ChatWindowDesktop = () => {
  const chatWindowDesktopContext = useContext(ChatWindowContext);
  const { messages, setMessages } = useContext(MessagesContext)!;
  const friendEmail = chatWindowDesktopContext?.headerInfo?.email;
  const { email: userEmail } = useSession().data!.user;

  // Checks if there is a currently open chat window
  const chatWindowSelected = chatWindowDesktopContext?.headerInfo !== null;

  // Get WebSocket instance from context
  const { socket } = useContext(WebSocketContext);

  useEffect(() => {
    if (socket) {
      socket.on("private message", (message: MessageType) => {
        // Check if the message is from conversation with the current user
        if (
          // If the message if from the friend
          message.senderEmail === friendEmail ||
          // If the message was sent to the friend
          (message.receiverEmail === friendEmail &&
            message.senderEmail === userEmail)
        ) {
          // Update messages context
          setMessages((prev) => [...prev, message]);

          if (message.senderEmail === friendEmail) {
            // Emit message read event
            socket.emit("message read", {
              senderEmail: message.senderEmail,
              receiverEmail: message.receiverEmail,
            });
          }
        }

        socket.on("message read", () => {
          setMessages((prev) =>
            prev.map((msg) => {
              return { ...msg, viewed: true };
            })
          );
        });
      });
      return () => {
        socket.off("private message");
        socket.off("message read");
      };
    }
  }, [socket, friendEmail, userEmail, setMessages]);

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

export default ChatWindowDesktop;
