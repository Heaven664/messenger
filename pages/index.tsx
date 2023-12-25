import TestComponent from "@/components/TestComponent";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Messenger</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <TestComponent />
      </main>
    </>
  );
}
