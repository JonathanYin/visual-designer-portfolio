import type { Config } from "tailwindcss";

const config: Config = {
	content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			colors: {
				// These will be automatically picked up from the @theme directive in globals.css
				"cherry-blossom": "var(--color-cherry-blossom)",
				"sky-blue": "var(--color-sky-blue)",
				"warm-peach": "var(--color-warm-peach)",
				"soft-lavender": "var(--color-soft-lavender)",
				cream: "var(--color-cream)",
				"deep-navy": "var(--color-deep-navy)",
			},
			animation: {
				"float-down": "float-down 8s linear infinite",
				"fade-up": "fade-up 1.2s ease-out forwards",
				"gentle-float": "gentle-float 6s ease-in-out infinite",
				"pulse-glow": "pulse-glow 2s ease-in-out infinite",
			},
			keyframes: {
				"float-down": {
					"0%": {
						transform: "translateY(-100vh) rotate(0deg)",
						opacity: "0",
					},
					"10%": {
						opacity: "0.7",
					},
					"90%": {
						opacity: "0.7",
					},
					"100%": {
						transform: "translateY(100vh) rotate(360deg)",
						opacity: "0",
					},
				},
				"fade-up": {
					from: {
						opacity: "0",
						transform: "translateY(30px)",
					},
					to: {
						opacity: "1",
						transform: "translateY(0)",
					},
				},
				"gentle-float": {
					"0%, 100%": {
						transform: "translateY(0px)",
					},
					"50%": {
						transform: "translateY(-20px)",
					},
				},
				"pulse-glow": {
					"0%, 100%": {
						boxShadow: "0 0 20px hsl(340 70% 82% / 0.3)",
					},
					"50%": {
						boxShadow: "0 0 40px hsl(340 70% 82% / 0.6)",
					},
				},
			},
		},
	},
	plugins: [],
};

export default config;
