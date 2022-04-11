module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		screens: {
			sm: "480px",
			md: "768px",
			lg: "976px",
			xl: "1440px",
		},
		extend: {},
	},
	daisyui: {
		themes: ["dark", "cupcake", "bumblebee"],
	},
	plugins: [require("daisyui")],
};