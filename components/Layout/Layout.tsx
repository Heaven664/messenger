import ChatWindowDesktop from "../ChatWindowDesktop/ChatWindowDesktop";
import ChatWindowMobile from "../ChatWindowMobile/ChatWindowMobile";
import NavbarDesktop from "../Navbar/NavbarDesktop";
import styles from "./Layout.module.scss";
import { ComponentProps } from "@/types/Layout/types";

const Layout = ({ children }: ComponentProps) => {
  return (
    <div className={styles.layoutContainer}>
      <NavbarDesktop />
      {children}
      <div className={styles.chatWindowDesktop}>
        <ChatWindowDesktop />
      </div>
      <div className={styles.chatWindowMobile}>
        <ChatWindowMobile />
      </div>
    </div>
  );
};

export default Layout;
