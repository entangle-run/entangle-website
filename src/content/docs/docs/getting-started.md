---
title: Getting Started
description: Clone, install, and run the deterministic Entangle developer proof.
---

The shortest useful path is to run the deterministic developer proof. It
starts the same architectural pieces used by the federated model while avoiding
external LLM credentials.

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

## Verify the repository

```sh
pnpm verify
```

This runs lint, typecheck, and tests for the runtime repository.

## Start the relay

```sh
docker compose -f deploy/federated-dev/compose/docker-compose.federated-dev.yml up -d strfry
```

The default relay URL is `ws://localhost:7777`.

## Run the user-node proof

```sh
pnpm ops:demo-user-node-runtime:fake-opencode
```

This exercises the user-node runtime, signed user actions, Host projection, and
an agent path backed by deterministic fake OpenCode responses.

## Run the process-runner proof

```sh
pnpm ops:smoke-federated-process-runner:fake-opencode
```

This exercises runner registration, assignment, agent execution through the
process-runner path, observation, and artifact flow without requiring real LLM
credentials.

## Optional Studio inspection

Use the Studio-enabled user-node demo when you want a browser surface left
running for inspection:

```sh
pnpm ops:demo-user-node-runtime --with-studio
```

The operator-facing Studio and the CLI both read Host-owned state. A human
node's participant interface is a separate runtime surface, not the admin
control room.

## Real provider testing

Real OpenCode/provider credentials and real pull request workflows are manual
operator validation steps. The deterministic proof is the public automated
baseline; provider failures should be captured and hardened separately.

## Reset

When you intentionally want to wipe the developer profile, stop the stack and
remove volumes:

```sh
docker compose -f deploy/federated-dev/compose/docker-compose.federated-dev.yml down --volumes
```
