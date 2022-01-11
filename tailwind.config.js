const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{ts,tsx,js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      transitionTimingFunction: {
        DEFAULT: defaultTheme.transitionTimingFunction.out,
      },
    },
    margin: (theme, { negative }) => ({
      auto: "auto",
      ...negative(theme("spacing")),
    }),
  },
  corePlugins: {
    animation: false,
  },
};
