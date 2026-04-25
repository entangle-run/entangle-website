---
title: Announcing L1 — the Local Operator Baseline
description: Entangle's first final product line ships its baseline release. Host control plane, per-node runners, NIP-59 transport, git-backed artifact handoff, two provider adapters, and a verified end-to-end smoke.
date: 2026-04-25
author: Entangle
tags:
  - Release
  - Local
---

This is the L1 baseline of Entangle Local — the first final product in the
Entangle roadmap. It is not a slide deck and not a pre-implementation
description. It is a real local control plane with real services, real
transport, real artifact handoff, and a verified end-to-end smoke that runs on
a laptop.

## What L1 ships

- **Host control plane.** `entangle-host` owns graph state, package admission,
  runtime materialization, reconciliation snapshots, recovery policies, and
  inspection over a typed REST + WebSocket surface. Resource-oriented routes
  cover nodes, edges, graph revisions, runtimes, sessions, turns, approvals,
  artifacts, recovery, package sources, principals, status, and events.
- **Per-node runners.** `entangle-runner` runs as one process per active node,
  consumes a versioned effective runtime context resolved by the host,
  validates inbound A2A messages, drives session and conversation lifecycle,
  and emits `task.result` replies when the response policy requires them.
- **NIP-59 Nostr coordination.** The runner transport uses gift-wrapped
  Entangle rumors over a local `strfry` relay with relay-readiness preconnect.
  A live local-relay smoke produces persisted session, conversation, and turn
  records under the runner runtime root.
- **Git-backed artifact pipeline.** Each completed turn can persist a
  structured `ArtifactRecord`, materialize a report into a node-local git
  workspace, publish to a deterministic remote in local Gitea, and let
  downstream nodes retrieve published handoffs by `ArtifactRef` through a
  locator-specific cache. Both SSH-key and HTTPS-token transport principals
  work without writing token material into runtime files or remote URLs.
- **Two provider adapters.** The internal `agent-engine` package owns a
  first-party Anthropic adapter and an OpenAI-compatible chat-completions
  adapter behind the same boundary, with normalized stop and usage metadata
  and bounded internal `tool_use` / `tool_result` loops.
- **Built-in tools.** `inspect_memory_ref` and `inspect_session_state` provide
  bounded runtime introspection, with diagnostic messages flowing into
  runner-local memory, shared runtime-trace details, and Studio turn detail.
- **Memory registers.** Deterministic post-turn task pages, plus model-guided
  synthesis into focused registers (`working-context`, `stable-facts`,
  `open-questions`, `decisions`, `next-actions`, `resolutions`) with lifecycle
  discipline (replacement, consolidation, retirement, transition history).
- **Approval lifecycle.** Explicit A2A `approval.request` and
  `approval.response` metadata contracts. The runner materializes pending
  gates, applies decisions, closes approved approval conversations, completes
  unblocked sessions, and absorbs orphan responses without phantom work.
- **Studio + CLI parity.** Studio renders host topology, runtimes, sessions,
  turns, approvals, artifacts, recovery, traces, and graph revisions. The CLI
  exposes the same surface with `--summary` output and `--dry-run` for
  mutations through the shared `host-client` package.
- **Verified smoke.** `pnpm ops:smoke-local:disposable:runtime` admits a
  disposable package, bootstraps local Gitea with a disposable user and HTTPS
  token, applies a graph with two managed runners, verifies restart-generation
  recreation, drives real NIP-59 task intake through the local relay, runs
  provider-backed execution against a credential-checking model stub, and
  confirms a full publish/retrieve roundtrip between two managed runners.

## What L1 does not ship

L1 is a Local product release. It does not ship PostgreSQL persistence,
workspace-aware identity, tenancy, RBAC/ABAC, an object-storage artifact
service, a production sandbox, billing, or compliance. Those are Cloud and
Enterprise scope on the roadmap.

## What's next

The next slice is **L1.5 Local Operator Preview**: a canonical demo agent
package, a near one-command demo flow, a troubleshooting guide, and clearer
Studio empty and error states. After that, L2 turns Local into a real
workbench (package authoring, graph templates, session launch, artifact
preview), L3 hardens reliability (doctor, repair, backup, upgrade), and L4
closes Local GA.

Cloud begins at C0 only after L4. Enterprise begins only after the Cloud
production core stabilizes. The same graph model travels with all three.
