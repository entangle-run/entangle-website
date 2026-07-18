# Entangle Website

The public website and documentation for **Entangle**, a self-hosted federated runtime for observable coding-agent organizations.

The site pairs product-facing marketing pages with a Starlight documentation section and a notes/blog stream, and builds to a static bundle ready to deploy on Vercel.

## Stack

- [Astro](https://astro.build/) 7
- [Starlight](https://starlight.astro.build/) for the docs under `/docs`
- Tailwind CSS 4
- Astro content collections for docs and notes
- RSS feed at `/rss.xml`
- Open Graph image generation (`scripts/build-og.mjs`)

Requires Node.js 22+ and pnpm.

## Commands

```sh
pnpm install    # install dependencies
pnpm dev        # start the local dev server
pnpm check      # run Astro type/content checks
pnpm build      # build the production site into dist/
pnpm preview    # preview the production build locally
```

## Structure

```text
src/pages/              Marketing pages (home, architecture, run, security, status, blog)
src/content/docs/docs/  Documentation (concepts, architecture, getting started, security boundary, status, workbench)
src/content/blog/       Notes / blog posts
src/components/         Shared site components
src/layouts/            Page and blog layouts
src/styles/global.css   Global styles
scripts/build-og.mjs    Open Graph image builder
```

## License

MIT — see [LICENSE](LICENSE).
