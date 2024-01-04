import ChatWindowDesktop from "../ChatWindowDesktop/ChatWindowDesktop";
import NavbarDesktop from "../Navbar/NavbarDesktop";
import styles from "./Layout.module.scss";
import { ComponentProps } from "@/types/Layout/types";

const Layout = ({ children }: ComponentProps) => {
  return (
    <div className={styles.layoutContainer}>
      <NavbarDesktop />
      {children}
      <div className={styles.chatWindow}>
        <ChatWindowDesktop />
      </div>
    </div>
  );
};

export default Layout;
