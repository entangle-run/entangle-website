// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: 'https://entangle.run',
	devToolbar: {
		enabled: false,
	},
	vite: {
		plugins: [tailwindcss()],
	},
	integrations: [
		starlight({
			title: 'Entangle',
			description: 'A federated runtime for distributed AI organizations.',
			customCss: ['./src/styles/global.css'],
			disable404Route: true,
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/entangle-run/entangle' }],
			sidebar: [
				{
					label: 'Docs',
					items: [
						{ label: 'Docs Home', slug: 'docs' },
					],
				},
				{
					label: 'Articles',
					items: [
						{ label: 'Getting Started', slug: 'docs/getting-started' },
						{ label: 'Core Concepts', slug: 'docs/concepts' },
						{ label: 'Architecture', slug: 'docs/architecture' },
						{ label: 'Operator Workbench', link: '/docs/workbench/' },
						{ label: 'Trust Model', link: '/docs/security-boundary/' },
						{ label: 'Capabilities', slug: 'docs/roadmap' },
					],
				},
			],
		}),
	],
});
