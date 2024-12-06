const theme = {
	colors: {
		default: {
			theme_color: {
				primary: "#121212",
				body: "#fff",
				border: "#eaeaea",
				theme_light: "#f6f6f6",
				theme_dark: "",
			},
			text_color: {
				default: "#444444",
				dark: "#040404",
				light: "#717171",
			},
		},
		darkmode: {
			theme_color: {
				primary: "#fff",
				body: "#1c1c1c",
				border: "#3E3E3E",
				theme_light: "#222222",
				theme_dark: "",
			},
			text_color: {
				default: "#B4AFB6",
				dark: "#fff",
				light: "#B4AFB6",
			},
		},
	},
	fonts: {
		font_family: {
			primary: "Heebo:wght@400;600",
			primary_type: "sans-serif",
			secondary: "Signika:wght@500;700",
			secondary_type: "sans-serif",
		},
		font_size: {
			base: "16",
			scale: "1.2",
		},
	},
};

const font_base = Number(theme.fonts.font_size.base.replace("px", ""));
const font_scale = Number(theme.fonts.font_size.scale);
const h6 = font_scale;
const h5 = h6 * font_scale;
const h4 = h5 * font_scale;
const h3 = h4 * font_scale;
const h2 = h3 * font_scale;
const h1 = h2 * font_scale;

let fontPrimaryType;
let fontSecondaryType;
if (theme.fonts.font_family.primary) {
	fontPrimaryType = theme.fonts.font_family.primary_type;
}
if (theme.fonts.font_family.secondary) {
	fontSecondaryType = theme.fonts.font_family.secondary_type;
}

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	safelist: [{ pattern: /^swiper-/ }],
	darkMode: "class",
	theme: {
		screens: {
			sm: "540px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1536px",
		},
		container: {
			center: true,
			padding: "2rem",
		},
		extend: {
			colors: {
				text: theme.colors.default.text_color.default,
				light: theme.colors.default.text_color.light,
				dark: theme.colors.default.text_color.dark,
				primary: theme.colors.default.theme_color.primary,
				secondary: theme.colors.default.theme_color.secondary,
				body: theme.colors.default.theme_color.body,
				border: theme.colors.default.theme_color.border,
				"theme-light": theme.colors.default.theme_color.theme_light,
				"theme-dark": theme.colors.default.theme_color.theme_dark,
				darkmode: {
					text: theme.colors.darkmode.text_color.default,
					light: theme.colors.darkmode.text_color.light,
					dark: theme.colors.darkmode.text_color.dark,
					primary: theme.colors.darkmode.theme_color.primary,
					secondary: theme.colors.darkmode.theme_color.secondary,
					body: theme.colors.darkmode.theme_color.body,
					border: theme.colors.darkmode.theme_color.border,
					"theme-light": theme.colors.darkmode.theme_color.theme_light,
					"theme-dark": theme.colors.darkmode.theme_color.theme_dark,
				},
			},
			fontSize: {
				base: `${font_base}px`,
				"base-sm": `${font_base * 0.8}px`,
				h1: `${h1}rem`,
				"h1-sm": `${h1 * 0.9}rem`,
				h2: `${h2}rem`,
				"h2-sm": `${h2 * 0.9}rem`,
				h3: `${h3}rem`,
				"h3-sm": `${h3 * 0.9}rem`,
				h4: `${h4}rem`,
				h5: `${h5}rem`,
				h6: `${h6}rem`,
			},
			fontFamily: {
				primary: ["var(--font-primary)", fontPrimaryType],
				secondary: ["var(--font-secondary)", fontSecondaryType],
			},
		},
	},
	plugins: [
		require("@tailwindcss/typography"),
		require("@tailwindcss/forms"),
		require("tailwind-bootstrap-grid")({
			generateContainer: false,
			gridGutterWidth: "2rem",
			gridGutters: {
				1: "0.25rem",
				2: "0.5rem",
				3: "1rem",
				4: "1.5rem",
				5: "3rem",
			},
		}),
	],
};
