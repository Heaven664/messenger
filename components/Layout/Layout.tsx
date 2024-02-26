import { useContext, useEffect } from "react";
import ChatWindowDesktop from "../ChatWindowDesktop/ChatWindowDesktop";
import ChatWindowMobile from "../ChatWindowMobile/ChatWindowMobile";
import NavbarDesktop from "../Navbar/NavbarDesktop";
import styles from "./Layout.module.scss";
import { ComponentProps } from "@/types/Layout/types";
import ChatWindowContext from "@/context/ChatWindowContext";
import AuthContext from "@/context/AuthContext";
import { AuthContextType } from "@/types/Context/types";
import { useRouter } from "next/router";

const Layout = ({ children }: ComponentProps) => {
  const chatWindowDesktopContext = useContext(ChatWindowContext);
  const chatWindowSelected = chatWindowDesktopContext?.headerInfo !== null;
  const router = useRouter();

  // Get authenticated user data from context
  const authContext = useContext(AuthContext);
  const { user } = authContext as AuthContextType;

  // Redirect if user is not authenticated, only on the client side
  useEffect(() => {
    if (!user && window) {
      if (router.pathname !== "/auth/register") {
        router.push("/auth/login");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const isAuthPage = router.pathname.includes("/auth");

  if (isAuthPage) {
    return <>{children}</>;
  }

  if (user) {
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
  }
};

export default Layout;
