const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx,js,jsx}"],
  future: {
    hoverOnlyWhenSupported: true,
  },
  darkMode: "class",
  theme: {
    extend: {
      transitionTimingFunction: {
        DEFAULT: defaultTheme.transitionTimingFunction.out,
      },
    },
  },
};
