const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,cjs,ts,tsx,cts}"],
  future: {
    hoverOnlyWhenSupported: true,
    respectDefaultRingColorOpacity: true,
    disableColorOpacityUtilitiesByDefault: true,
    relativeContentPathsByDefault: true,
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
