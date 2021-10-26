import withBundleAnalyzer from "@next/bundle-analyzer";
import withPlugins from "next-compose-plugins";

/** @type {import("next").NextConfig} */
const nextConfig = {
	experimental: {
		esmExternals: true,
	},
	future: {
		strictPostcssConfiguration: true,
	},
	reactStrictMode: true,
};

export default withPlugins(
	[withBundleAnalyzer({ enabled: process.env.ANALYZE === "true" })],
	nextConfig,
);
