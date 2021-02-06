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
	},
	variants: {
		extend: {
			ringWidth: ["focus-visible"],
			transitionProperty: ["motion-reduce"],
		},
	},
	corePlugins: {
		animation: false,
	},
	plugins: [],
};
