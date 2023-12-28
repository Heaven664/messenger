import type { AppProps } from "next/app";
import Layout from "@/components/Layout/Layout";
import { PageContextProvider } from "@/context/PageContext";
import "@/styles/global.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PageContextProvider>
      <Layout>
        <Component {...pageProps}></Component>
      </Layout>
    </PageContextProvider>
  );
}
