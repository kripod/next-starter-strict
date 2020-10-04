import "../../styles/globals.css";

import type { AppProps } from "next/app";

export default function MyApp({
	Component,
	pageProps,
}: AppProps): React.ReactElement | null {
	return <Component {...pageProps} />;
}
