import MessageContainer from "../Message/MessageContainer";
import styles from "./ChatWindowDesktop.module.scss";
import Footer from "./Footer";
import ChatWindowDesktopHeader from "./Header";

const chatWindowDesktop = () => {
  return (
    <div className={styles.container}>
      <ChatWindowDesktopHeader />
      <MessageContainer />
      <Footer />
    </div>
  );
};

export default chatWindowDesktop;
