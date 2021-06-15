const withBundleAnalyzer = require("@next/bundle-analyzer");
const withPlugins = require("next-compose-plugins");

module.exports = withPlugins(
	[withBundleAnalyzer({ enabled: process.env.ANALYZE === "true" })],
	{
		reactStrictMode: true,
		future: {
			strictPostcssConfiguration: true,
		},
	},
);
