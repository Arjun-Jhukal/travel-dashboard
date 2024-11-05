/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				body: {
					DEFAULT: "#F3F6F9",
				},
				border: {
					DEFAULT: "#EFEFF1",
				},
			},
		},
	},
	plugins: [],
};
