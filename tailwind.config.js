/** @type {import('tailwindcss').Config} */
module.exports = {
	// 1. Apply the dark mode class setting:
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		// 2. Append the path for the Skeleton NPM package and files:
		require('path').join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	theme: {
		extend: {
			keyframes: {
				bounceright: {
					'0%': {
						transform: 'none',
						'animation-timing-function': 'cubic-bezier(.8,0,1,1)'
					},
					'50%': {
						transform: 'translateX(1rem)',
						'animation-timing-function': 'cubic-bezier(0,0,.2,1)'
					},
					'100%': {
						transform: 'none',
						'animation-timing-function': 'cubic-bezier(.8,0,1,1)'
					}
				},
				fadeIn: {
					'0%': {
						opacity: '0%'
					},
					'100%': {
						opacity: '100%'
					}
				}
			},
			animation: {
				'bounce-right': 'bounceright 1.2s infinite',
				'bounce-right-fade-in': 'fadeIn 2s 5s forwards, bounceright 1.2s infinite'
			}
		}
	},
	plugins: [
		// 3. Append the Skeleton plugin to the end of this list
		...require('@skeletonlabs/skeleton/tailwind/skeleton.cjs')()
	]
};
