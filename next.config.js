const withBundleAnalyzer = require("@next/bundle-analyzer");
const withPlugins = require("next-compose-plugins");

/** @type {import("next").NextConfig} */
const nextConfig = {
  experimental: {
    newNextLinkBehavior: true,
  },
  reactStrictMode: true,
};

module.exports = withPlugins(
  [withBundleAnalyzer({ enabled: process.env.ANALYZE === "true" })],
  nextConfig,
);
