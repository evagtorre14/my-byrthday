import { fontFamily } from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary': '#F97316',      // Naranja Atardecer
				'secondary': '#0D9488',    // Turquesa Mar
				'background': '#FDF8E1',   // Arena Clara
				'text-primary': '#44403C', // Marrón Oscuro
			},
			fontFamily: {
				'headings': ['Quicksand', ...fontFamily.sans],
				'body': ['Inter', ...fontFamily.sans],
			},
		},
	},
	plugins: [],
}