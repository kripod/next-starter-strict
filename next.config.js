const withBundleAnalyzer = require("@next/bundle-analyzer");
const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules");

module.exports = withPlugins(
	[
		withBundleAnalyzer({ enabled: process.env.ANALYZE === "true" }),
		withTM(["heroicons/react/outline", "heroicons/react/solid"]),
	],
	{
		reactStrictMode: true,
		future: {
			excludeDefaultMomentLocales: true,
			strictPostcssConfiguration: true,
			webpack5: true,
		},
	},
);
