const interactionVariantsPlugin = require("tailwindcss-interaction-variants");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
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
	plugins: [interactionVariantsPlugin],
};
