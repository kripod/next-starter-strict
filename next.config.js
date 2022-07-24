const withBundleAnalyzer = require("@next/bundle-analyzer");
const withPlugins = require("next-compose-plugins");

/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
};

module.exports = withPlugins(
  [withBundleAnalyzer({ enabled: process.env.ANALYZE === "true" })],
  nextConfig,
);
