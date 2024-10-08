import containerQueries from '@tailwindcss/container-queries'
import typography from '@tailwindcss/typography'
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'pixel': ['Pixel']
			}
		},
	},
	plugins: [
		containerQueries,
		typography
	],
	// darkMode: ['selector', '[data-mode="dark"]',],
}
