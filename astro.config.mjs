// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: 'https://entangle.run',
	vite: {
		plugins: [tailwindcss()],
	},
	integrations: [
		starlight({
			title: 'Entangle',
			description: 'Graph-native runtime for AI organizations.',
			customCss: ['./src/styles/global.css'],
			disable404Route: true,
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/entangle-run/entangle' }],
			sidebar: [
				{
					label: 'Start',
					items: [
						{ label: 'Overview', slug: 'docs' },
						{ label: 'Getting Started', slug: 'docs/getting-started' },
						{ label: 'Entangle Local', slug: 'docs/local' },
					],
				},
				{
					label: 'Understand',
					items: [
						{ label: 'Core Concepts', slug: 'docs/concepts' },
						{ label: 'Architecture', slug: 'docs/architecture' },
						{ label: 'Roadmap', slug: 'docs/roadmap' },
					],
				},
			],
		}),
	],
});
