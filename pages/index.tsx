import Head from "next/head";
import Layout from "@/components/Layout/Layout";
import { PageContextProvider } from "@/context/PageContext";

export default function Home() {
  return (
    <>
      <Head>
        <title>Messenger</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
}
