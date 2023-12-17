/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {
			nunito: ['Nunito', 'sans-serif'],
			oswald: ['Oswald', 'sans-serif'],
			roboto: ['Roboto', 'sans-serif'],
			poiret: ['Poiret One', 'cursive'],
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
			gridTemplateColumns: {
				fluid: 'repeat(auto-fit, minmax(15rem, 1fr))',
			},
			aspectRatio: {
				'4/5': '4 / 5',
			},
			backgroundImage: {
				'error-image':
					"url('https://images.unsplash.com/photo-1520473378652-85d9c4aee6cf?q=80&w=1829&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
			},
		},
	},
	plugins: [],
};
