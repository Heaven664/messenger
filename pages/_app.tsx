import type { AppProps } from "next/app";
import Layout from "@/components/Layout/Layout";
import { PageContextProvider } from "@/context/PageContext";
import { ChatWindowContextProvider } from "@/context/ChatWindowContext";
import { UserContextProvider } from "@/context/UserContext";
import "@/styles/global.css";
import { ChatsContextProvider } from "@/context/ChatsContext";
import ProfileContext, {
  ProfileContextProvider,
} from "@/context/ProfileContext";
import Login from "@/components/Login/Login";

export default function App({ Component, pageProps }: AppProps) {
  return (
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
  );
}
