import Head from "next/head";
import NavbarMobile from "@/components/Navbar/NavbarMobile";
import Layout from "@/components/Layout/Layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Messenger</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout></Layout>
    </>
  );
}
