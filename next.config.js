const withBundleAnalyzer = require("@next/bundle-analyzer");

/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    fallbackNodePolyfills: false,
    adjustFontFallbacks: true,
  },
};

module.exports = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
})(nextConfig);
