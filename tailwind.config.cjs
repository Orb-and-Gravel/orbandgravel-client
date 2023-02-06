/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {
			nunito: ['Nunito', 'sans-serif'],
			oswald: ['Oswald', 'sans-serif'],
			roboto: ['Roboto', 'sans-serif'],
		},
		extend: {
			colors: {
				colorHeader: 'var(--color-header)',
				colorOne: 'var(--color-one)',
				colorTwo: 'var(--color-two)',
				colorThree: 'var(--color-three)',
				colorFour: 'var(--color-four)',
				colorFive: 'var(--color-five)',
			},
		},
	},
	plugins: [],
};
