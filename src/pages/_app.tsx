import "../styles.css";

import type { AppProps } from "next/app";

export default function MyApp({
	Component,
	pageProps,
}: AppProps): React.ReactElement {
	return <Component {...pageProps} />;
}
