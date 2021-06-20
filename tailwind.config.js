const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	mode: "jit",
	purge: ["./src/**/*.{js,ts,tsx}"],
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
