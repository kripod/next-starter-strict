import "@/styles.css";
import "@/polyfills";

import type { AppProps } from "next/app";
import Head from "next/head";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="format-detection" content="telephone=no" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}
