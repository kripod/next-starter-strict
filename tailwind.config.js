module.exports = {
	purge: ["./src/**/*.{js,ts,tsx}"],
	darkMode: "class",
	theme: {
		extend: {},
	},
	variants: {
		extend: {
			ringWidth: ["focus-visible"],
		},
	},
	corePlugins: {
		animation: false,
	},
	plugins: [],
};
