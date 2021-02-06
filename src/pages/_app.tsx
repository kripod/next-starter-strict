import "@/styles.css";

import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider defaultTheme="system" attribute="class">
			<Component {...pageProps} />
		</ThemeProvider>
	);
}
