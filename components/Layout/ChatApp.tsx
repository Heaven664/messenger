import { useWebSocketConnection } from "@/hooks/useWebSocketConnection";
import ChatWindowDesktop from "../ChatWindowDesktop/ChatWindowDesktop";
import ChatWindowMobile from "../ChatWindowMobile/ChatWindowMobile";
import NavbarDesktop from "../Navbar/NavbarDesktop";
import styles from "./Layout.module.scss";
import React from "react";

type P = {
  children: React.ReactNode;
  chatWindowSelected: boolean;
};

const ChatApp = ({ children, chatWindowSelected }: P) => {
  // Establish connection to WebSocket server
  useWebSocketConnection(process.env.NEXT_PUBLIC_API_URL!);

  return (
    <div className={styles.layoutContainer}>
      <NavbarDesktop />
      {children}
      <div className={styles.chatWindowDesktop}>
        <ChatWindowDesktop />
      </div>
      {chatWindowSelected ? (
        <div className={styles.chatWindowMobile}>
          <ChatWindowMobile />
        </div>
      ) : (
        <div className={styles.hidden}></div>
      )}
    </div>
  );
};
export default ChatApp;
