import type { AppProps } from "next/app";
import Layout from "@/components/Layout/Layout";
import { PageContextProvider } from "@/context/PageContext";
import { ChatWindowContextProvider } from "@/context/ChatWindowContext";
import { UserContextProvider } from "@/context/UserContext";
import "@/styles/global.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserContextProvider>
      <ChatWindowContextProvider>
        <PageContextProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </PageContextProvider>
      </ChatWindowContextProvider>
    </UserContextProvider>
  );
}
