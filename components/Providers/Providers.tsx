import { AuthProvider } from "@/context/AuthContext";
import { ChatWindowContextProvider } from "@/context/ChatWindowContext";
import { ChatsContextProvider } from "@/context/ChatsContext";
import { PageContextProvider } from "@/context/PageContext";
import { ProfileContextProvider } from "@/context/ProfileContext";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";
import Layout from "../Layout/Layout";

interface Props {
  children: ReactNode;
}

const Providers = ({ children }: Props) => {
  return (
    <SessionProvider>
      <AuthProvider>
        <ChatWindowContextProvider>
          <PageContextProvider>
            <ChatsContextProvider>
              <ProfileContextProvider>
                <Layout>
                  {children}
                  </Layout>
              </ProfileContextProvider>
            </ChatsContextProvider>
          </PageContextProvider>
        </ChatWindowContextProvider>
      </AuthProvider>
    </SessionProvider>
  );
};

export default Providers;