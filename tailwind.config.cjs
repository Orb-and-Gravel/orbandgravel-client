/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
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
