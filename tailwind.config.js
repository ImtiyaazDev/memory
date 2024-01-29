/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			sans: "Poppins, sans-serif"
		},
		extend: {
			height: {
				screen: "100dvh"
			},
			colors: {
				red: {
					specno: "#D4190C"
				},
				green: {
					specno: "#0AB169"
				},
				orange: {
					specno: "#F4A236"
				},
				blue: {
					specnoLight: "#A7DAFF",
					specnoNormal: "#489DDA",
					specnoDark: "#164464",
					specnoDarker: "#0D4477"
				},
				yellow: {
					specno: "#FFD975"
				},
			}
		}
	},
	plugins: []
};
