---
title: Getting Started
description: Clone, install, and boot the Entangle federated runtime.
---

The shortest path to understanding Entangle is to boot it. This guide takes
you from a fresh clone to a running Host, runner layer, relay, git backend,
Studio surface, and CLI.

## Prerequisites

- Node.js 22 or newer.
- pnpm 10 or newer.
- Docker with daemon access.
- Docker Compose.
- Git.

## Clone and install

```sh
git clone https://github.com/entangle-run/entangle.git
cd entangle
pnpm install --frozen-lockfile
```

Use the lockfile install for a reproducible setup.

## Verify the repository

```sh
pnpm verify
```

Lint, typecheck, and tests. Run it before changing runtime contracts,
deployment files, packages, or operator surfaces.

## Preflight the federated dev profile

```sh
pnpm ops:check-federated-dev:strict
```

Strict preflight validates toolchain, Docker access, Compose configuration,
required profile paths, and the runtime profile before services start.

## Build the runner image

```sh
docker compose -f deploy/federated-dev/compose/docker-compose.federated-dev.yml \
  --profile runner-build build runner-image
```

Runners join by signed handshake and the federated dev launcher boots them
as Docker containers; build the image before expecting managed nodes to
come up.

## Boot the runtime

```sh
docker compose -f deploy/federated-dev/compose/docker-compose.federated-dev.yml \
  up --build studio host strfry gitea
```

Default endpoints:

- Studio: `http://localhost:3000`
- Host API: `http://localhost:7071`
- Gitea HTTP: `http://localhost:3001`
- Gitea SSH: `ssh://localhost:2222`
- Nostr relay: `ws://localhost:7777`

## Run the full runtime path

```sh
pnpm ops:smoke-federated-dev:disposable:runtime
```

This is the strongest verification path. It admits a disposable package,
applies a two-node graph, starts two managed runners, publishes a real
NIP-59 wrapped event through the relay, runs a provider-backed turn,
materializes a git artifact, retrieves it downstream by reference, and
tears the profile down.

## Open the Federated Preview

```sh
pnpm ops:demo-federated-preview
```

The command leaves the profile running so you can open Studio and the CLI
and inspect the same Host-owned state from both sides:

```sh
pnpm --filter @entangle/cli dev host status --summary
pnpm --filter @entangle/cli dev host graph get --summary
pnpm --filter @entangle/cli dev host sessions list --summary
pnpm --filter @entangle/cli dev host events list --runtime-trace-only --summary
```

## Reset

When you want a clean profile, stop the stack and remove volumes:

```sh
docker compose -f deploy/federated-dev/compose/docker-compose.federated-dev.yml down --volumes
```

Only use a destructive reset when you intentionally want to wipe Host,
relay, Gitea, runner, and artifact state.
