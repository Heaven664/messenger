import styles from "./ChatWindowDesktop.module.scss";
import ChatWindowDesktopHeader from "./Header";

const chatWindowDesktop = () => {
  return (
    <div className={styles.container}>
      <ChatWindowDesktopHeader
        name="Omar Hamid"
        imageUrl="/general/main.HEIC"
        userId="1"
        isOnline={true}
      />
    </div>
  );
};

export default chatWindowDesktop;
