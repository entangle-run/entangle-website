---
title: Architecture
description: The federated runtime model and the main flows inside Entangle.
---

Entangle is a self-hosted federated runtime for observable coding-agent
organizations. The architecture keeps topology, execution, coordination,
artifacts, memory, approval, and operator surfaces separate enough to
inspect and govern, and connected by signed messages instead of hidden
shared state.

## Ownership model

Four ownership rules:

- the Host owns desired state and a Host Authority signing key;
- runners own per-node execution and runner-signed observations, wherever
  those runners are placed;
- user nodes own user intent through their own signing keys;
- Studio and CLI are Host clients; the User Client is the participant
  surface for a running human node.

Federation only works when these boundaries hold. Entangle is designed for
an organization of actors, not a master orchestrator hiding every agent
behind one process.

## Layers

Five layers, each replaceable on its own boundary:

1. User-facing surfaces: Studio as the operator control room, CLI as the
   headless surface, and User Client as the human-node participant
   interface.
2. Host control plane: resource-oriented routes for nodes, edges,
   runtimes, sessions, turns, approvals, artifacts, recovery, principals,
   events, plus a projection store built from signed observations.
3. Runners: generic at start, node-specific only after a signed assignment,
   and able to run on separate machines.
4. Event fabric: Nostr relays carrying control, observe, and A2A events,
   NIP-59 wrapped, with dedicated rumor kinds and dedup keys.
5. Artifact backend: a git remote (Gitea today; locator stays portable)
   with publish, retrieve, and lineage by git log.

## Host responsibilities

- Host Authority key management: status, export/import, rotation.
- Desired graph state: nodes, edges, revisions, package admission,
  catalogs, principals.
- Runner trust: registration, trust state, revocation, heartbeat, stale
  status.
- Runtime assignment: signed Host->runner assignments with leases and
  receipts.
- Projection store: rebuilds session, turn, approval, artifact, memory,
  source-change, recovery, and event state from signed observations.
- Mutation APIs consumed by Studio and CLI.

The Host does not reach into runner-local filesystems for runtime truth.

## Runner responsibilities

A runner owns execution for one assigned node:

- joins by signed hello;
- consumes the signed assignment and resolves effective runtime context;
- receives signed coordination messages and validates routes;
- builds engine turn requests from graph, peer, memory, artifact, policy,
  and session context;
- interacts with the configured node runtime engine;
- records turns, engine outcomes, and bounded execution insights;
- materializes artifacts to git;
- updates structured node memory;
- records approval lifecycle;
- harvests source workspace changes;
- emits signed observations and graph-valid replies or handoffs.

## Coordination flow

1. A user node or agent node sends a signed task or handoff message.
2. The relay delivers the wrapped event.
3. The receiving runner verifies route, message shape, and signer.
4. The runner runs the turn in the node runtime context.
5. The runner emits signed observations carrying turns, artifacts,
   approvals, memory updates, source changes, and trace events.
6. The Host updates its projection. Studio and CLI read from the projection.

## Artifact flow

Artifacts are not large message payloads. The runner materializes work
products into a git-backed workspace, commits, and publishes through the
configured git remote. Downstream nodes retrieve published artifacts by
reference. Lineage is git log; signing follows git's existing model.

## Memory flow

Runner-owned memory keeps runtime context durable:

- deterministic task pages record work after each turn;
- recent-work summaries keep fresh context visible;
- focused registers keep stable facts, decisions, open questions, next
  actions, and resolutions separate;
- lifecycle discipline reconciles closures across registers;
- bounded model-guided synthesis updates the focused registers without
  taking ownership of the wiki write path.

Memory is node-owned. It is not a global hidden scratchpad.

## Engine boundary

The default per-node coding engine is OpenCode-oriented, behind an adapter.
The runtime also has external process and external HTTP engine boundaries plus
deterministic fake-provider paths for automated tests. Provider details stay
behind adapters; the runner contract is provider-neutral.

Entangle owns graph identity, policy, workspace roots, artifact handoff,
memory, approval, and inspection around the engine. The engine is a
replaceable execution brain, not the product boundary.

## Deployment shapes

The same software should run in three shapes:

- **Single-host**: every part on one machine.
- **Federated**: Host on one machine, runners and user nodes joining from
  others over a reachable relay and git remote, with no shared filesystem
  between Host and runner.
- **Self-hosted with production hardening**: federated shape plus identity,
  audit retention, recovery, security, and packaging hardening.

These are deployment shapes for the same runtime, not different products.
