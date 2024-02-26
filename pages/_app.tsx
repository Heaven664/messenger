import type { AppProps } from "next/app";
import "@/styles/global.css";
import Providers from "@/components/Providers/Providers";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  );
}
