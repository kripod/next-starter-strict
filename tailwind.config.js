const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import("tailwindcss").Config} */
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
