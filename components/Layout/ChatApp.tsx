import { useWebSocketConnection } from "@/hooks/useWebSocketConnection";
import ChatWindowDesktop from "../ChatWindowDesktop/ChatWindowDesktop";
import ChatWindowMobile from "../ChatWindowMobile/ChatWindowMobile";
import NavbarDesktop from "../Navbar/NavbarDesktop";
import styles from "./Layout.module.scss";
import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import { fetchProfileInfo } from "@/helpers/Api/fetchProfileInfo";

type P = {
  children: React.ReactNode;
  chatWindowSelected: boolean;
};

const ChatApp = ({ children, chatWindowSelected }: P) => {
  const { data: session, update } = useSession();
  const user = session?.user;
  // Update session user info info on mount
  useEffect(() => {
    const fetchProfile = async () => {
      if (user) {
        const { response, error } = await fetchProfileInfo(user.id);
        if (error) return console.log(error);
        if (response) {
          await update({ user: { ...user } });
        }
      }
    };
    fetchProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.id]);
  // Connect to WebSocket server
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
