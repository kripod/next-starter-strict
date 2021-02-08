import "@/styles.css";
import "@/polyfills";

import type { AppProps } from "next/app";
import Head from "next/head";

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta
					name="color-scheme"
					content="normal" // TODO: Set to "dark" or "light" based on theme
				/>
			</Head>

			<Component {...pageProps} />
		</>
	);
}
