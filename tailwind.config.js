/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				logo: ['Psychofun', 'serif'],
				sans: ['"Kumbh Sans"', 'sans-serif'],
			},
			colors: {
				kindaSoon: '#E2DC48',
				soon: '#E2B953',
				overdue: '#C35255',
				inactive: '#B6B6DA',
				notSoon: '#9CB45C',
				main: '#9CB45C',
				'main-light': '#CCD5AA',
				'main-dark': '#E2DC48',
				'main-darkest': '#38663F',
			},
			keyframes: {
				rotateButton: {
					'0%': { transform: 'rotate(0deg)' },
					'99%': { transform: 'rotate(45deg)' },
					'100%': { transform: 'rotate(45deg)' },
				},
				rotateOutButton: {
					'0%': { transform: 'rotate(45deg)' },
					'100%': { transform: 'rotate(0deg)' },
				},
				closeAddItem: {
					'0%': { height: '80%' },
					'100%': { height: '0' },
				},
				closePanel: {
					'0%': { height: '100vh' },
					'100%': { height: '0' },
				},
				appear: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
			},
			animation: {
				rotateButton: 'rotateButton 2s ease-out forwards',
				rotateOutButton: 'rotateOutButton 2s ease-out forwards',
				closeAddItem: 'closeAddItem 2s ease-out forwards',
				closePanel: 'closePanel 2s ease-out forwards',
				appear: 'appear 2s ease-out forwards',
			},
		},
	},
	plugins: [],
};
