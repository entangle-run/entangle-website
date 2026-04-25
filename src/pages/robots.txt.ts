export function GET({ site }: { site: URL }) {
	const base = site ?? new URL('https://entangle.run');

	return new Response(`User-agent: *\nAllow: /\nSitemap: ${new URL('/sitemap-index.xml', base).href}\n`);
}
