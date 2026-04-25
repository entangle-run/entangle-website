---
title: Getting Started
description: Start Entangle Local from the public repository.
---

Entangle is currently an early local operator baseline. It is useful for
technical users who want to inspect the architecture and run the local profile.
It is not yet a production SaaS or enterprise deployment.

## Prerequisites

- Node.js 22 or newer.
- pnpm 10 or newer.
- Docker and Docker Compose.
- Git.

## Clone

```sh
git clone https://github.com/entangle-run/entangle.git
cd entangle
pnpm install
```

## Verify

```sh
pnpm verify
```

## Check The Local Profile

```sh
pnpm ops:check-local:strict
```

This validates the Local deployment files, Node and pnpm, Docker, Docker
Compose, Docker daemon access, and Compose configuration.

## Run The Local Profile

Build the local runner image:

```sh
docker compose -f deploy/local/compose/docker-compose.local.yml --profile runner-build build runner-image
```

Start the stable local services:

```sh
docker compose -f deploy/local/compose/docker-compose.local.yml up --build studio host strfry gitea
```

Default local URLs:

- Studio: `http://localhost:3000`
- Host API: `http://localhost:7071`
- Gitea: `http://localhost:3001`
- Nostr relay: `ws://localhost:7777`

## Smoke Test

```sh
pnpm ops:smoke-local
```

For a disposable validation run:

```sh
pnpm ops:smoke-local:disposable
```
