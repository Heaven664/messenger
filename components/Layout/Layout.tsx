import { useContext } from "react";
import ChatWindowDesktop from "../ChatWindowDesktop/ChatWindowDesktop";
import ChatWindowMobile from "../ChatWindowMobile/ChatWindowMobile";
import NavbarDesktop from "../Navbar/NavbarDesktop";
import styles from "./Layout.module.scss";
import { ComponentProps } from "@/types/Layout/types";
import ChatWindowContext from "@/context/ChatWindowContext";
import AuthContext from "@/context/AuthContext";
import { AuthContextType } from "@/types/Context/types";
import Login from "../Login/Login";

const Layout = ({ children }: ComponentProps) => {
  const chatWindowDesktopContext = useContext(ChatWindowContext);
  const chatWindowSelected = chatWindowDesktopContext?.headerInfo !== null;

  // Get authenticated user data from context
  const authContext = useContext(AuthContext);
  const { user } = authContext as AuthContextType;

  if (!user) return <Login />

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

export default Layout;
