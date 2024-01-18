import type { AppProps } from "next/app";
import Layout from "@/components/Layout/Layout";
import { PageContextProvider } from "@/context/PageContext";
import { ChatWindowContextProvider } from "@/context/ChatWindowContext";
import { UserContextProvider } from "@/context/UserContext";
import "@/styles/global.css";
import { ChatsContextProvider } from "@/context/ChatsContext";
import { ProfileContextProvider } from "@/context/ProfileContext";
import { AuthProvider } from "@/context/AuthContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <UserContextProvider>
        <ChatWindowContextProvider>
          <PageContextProvider>
            <ChatsContextProvider>
              <ProfileContextProvider>
                <Layout>
                  <Component {...pageProps} />
                </Layout>
              </ProfileContextProvider>
            </ChatsContextProvider>
          </PageContextProvider>
        </ChatWindowContextProvider>
      </UserContextProvider>
    </AuthProvider>
  );
}
