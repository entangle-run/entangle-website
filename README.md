# Entangle Website

Public website, docs, and newsroom for Entangle.

The engineering source of truth remains in the core repository:

- `entangle-run/entangle`

This repository contains the curated public surface: product positioning,
getting started material, public concepts, architecture overview, public
roadmap, and blog/newsroom posts.

## Stack

- Astro 6
- Starlight docs under `/docs`
- Tailwind CSS 4
- Astro content collections for blog posts
- RSS feed at `/rss.xml`
- Vercel-ready build configuration

## Commands

```sh
pnpm install
pnpm dev
pnpm build
pnpm preview
```

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install` | Installs dependencies |
| `pnpm dev` | Starts the local dev server |
| `pnpm build` | Builds the production site into `dist/` |
| `pnpm preview` | Previews the production build locally |

## Content Structure

- Marketing pages: `src/pages/`
- Docs: `src/content/docs/docs/`
- Blog posts: `src/content/blog/`
- Shared site components: `src/components/`
- Global styles: `src/styles/global.css`

## Content Policy

Public docs should be concise and product-facing. Do not copy the internal
`wiki/` or `references/` corpus wholesale. Turn internal material into stable,
reader-oriented documentation.
