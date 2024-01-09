import { useContext } from "react";
import MessageContainer from "../Message/MessageContainer";
import styles from "./ChatWindowDesktop.module.scss";
import Footer from "./Footer";
import ChatWindowDesktopHeader from "./Header";
import ChatWindowContext from "@/context/ChatWindowContext";
import EmptyChat from "./EmptyChatWindow";

const ChatWindowDesktop = () => {
  const chatWindowDesktopContext = useContext(ChatWindowContext);
  const chatWindowSelected = chatWindowDesktopContext?.headerInfo !== null;
  return (
    <div className={styles.container}>
      {chatWindowSelected ? (
        <>
          <ChatWindowDesktopHeader />
          <MessageContainer />
          <Footer />
        </>
      ) : (
        <EmptyChat />
      )}
    </div>
  );
};

export default ChatWindowDesktop;
