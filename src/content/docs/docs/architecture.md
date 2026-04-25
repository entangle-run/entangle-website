---
title: Architecture
description: Public architecture overview.
---

Entangle is designed as a graph-native runtime, not a chatbot wrapper.

## Current Local Architecture

The current public repository contains:

- TypeScript contracts in shared packages.
- Semantic validators over graph, package, transport, and runtime contracts.
- `entangle-host` as the control plane.
- `entangle-runner` as the per-node execution process.
- Studio as the visual client.
- CLI as the headless client.
- Local Docker Compose profile.
- Local Nostr relay through `strfry`.
- Local Gitea-backed artifact handoff.

## Boundary Rules

- The host owns control-plane state.
- Runners own runner-local lifecycle mutation.
- Studio and CLI are clients.
- Messages coordinate work.
- Artifacts carry work.
- Git is the first artifact backend, not the only possible backend.

## Why This Shape

Entangle keeps topology, authority, and handoff visible. This makes it easier
to inspect what happened, understand which node owns which work, and evolve
from a local runtime toward managed Cloud and Enterprise products.
