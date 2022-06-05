const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig} */
module.exports = {
  content: ["./src/**/*.{ts,tsx,js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      transitionTimingFunction: {
        DEFAULT: defaultTheme.transitionTimingFunction.out,
      },
    },
  },
  corePlugins: {
    animation: false,
  },
};
