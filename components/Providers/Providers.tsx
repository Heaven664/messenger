import { ChatWindowContextProvider } from "@/context/ChatWindowContext";
import { ChatsContextProvider } from "@/context/ChatsContext";
import { PageContextProvider } from "@/context/PageContext";
import { ProfileContextProvider } from "@/context/ProfileContext";
import { MessagesContextProvider } from "@/context/MessagesContext";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";
import Layout from "../Layout/Layout";
import { WebSocketContextProvider } from "@/context/WebSocketContext";

interface Props {
  children: ReactNode;
}

const Providers = ({ children }: Props) => {
  return (
    <SessionProvider>
      <WebSocketContextProvider>
        <ChatWindowContextProvider>
          <MessagesContextProvider>
            <PageContextProvider>
              <ChatsContextProvider>
                <ProfileContextProvider>
                  <Layout>{children}</Layout>
                </ProfileContextProvider>
              </ChatsContextProvider>
            </PageContextProvider>
          </MessagesContextProvider>
        </ChatWindowContextProvider>
      </WebSocketContextProvider>
    </SessionProvider>
  );
};

export default Providers;
