/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				background: '#170F11',
				accent: '#F47D9D',
				primary: '#E2EAFD',
				secondary: '#CDCBCD',
				card: {
					stroke: '#2D2029',
					background: '#1E151B',
					primary: '#E2EAFD',
					secondary: '#C6ABBC'
				}
			},
			fontFamily: {
				sans: ['Open Sans', 'Poppins']
			}
		}
	},
	plugins: []
};
