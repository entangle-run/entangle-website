# Entangle Website

This repository contains the public website and docs for Entangle.

The engineering source of truth is the runtime repository:

- `/Users/vincenzo/Documents/GitHub/Entangle/entangle`
- public target: `https://github.com/entangle-run/entangle`

The website must present Entangle as a self-hosted federated runtime for
observable coding-agent organizations. It must not present obsolete local-only
framing as the product, and it must distinguish implemented runtime paths from
manual provider validation and future production hardening.

## Stack

- Astro 6
- Starlight docs under `/docs`
- Tailwind CSS 4
- Astro content collections for notes
- RSS feed at `/rss.xml`
- Vercel-ready build configuration

## Commands

```sh
pnpm install
pnpm dev
pnpm check
pnpm build
pnpm preview
```

| Command | Action |
| :-- | :-- |
| `pnpm install` | Installs dependencies |
| `pnpm dev` | Starts the local dev server |
| `pnpm check` | Runs Astro checks |
| `pnpm build` | Builds the production site into `dist/` |
| `pnpm preview` | Previews the production build locally |

## Content Structure

- Marketing pages: `src/pages/`
- Docs: `src/content/docs/docs/`
- Notes: `src/content/blog/`
- Shared site components: `src/components/`
- Global styles: `src/styles/global.css`

## Content Policy

Public content should be concise, current, and product-facing. Use the runtime
repo `README.md`, `docs/`, `wiki/`, and `references/` corpus as source
material, then turn it into reader-oriented documentation.

Every claim should fit one of these categories:

- implemented and covered by automated checks;
- implemented with deterministic/mock verification;
- available for manual testing with real providers;
- planned/future hardening.

Do not advertise unverified real-provider, physical multi-machine, security, or
production-readiness claims as complete.

## License

Entangle Website is open source under the [MIT License](LICENSE).
