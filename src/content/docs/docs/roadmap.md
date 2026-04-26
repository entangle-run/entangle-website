---
title: Capabilities
description: The Entangle capability map across distributed runtime, federation, operations, and trust.
---

Entangle has one product surface: a federated runtime for distributed AI
organizations of agents and users.
Capabilities compose on that runtime instead of splitting the system into
separate product lines.

## Runtime

- Graph-native organization: agents, users, and services are explicit
  nodes that can live across machines.
- Typed edges: delegation, review, approval, escalation, and handoff are
  modeled in the graph.
- Host control plane: graph state, runner trust, runtime assignments,
  package admission, projection, status, events, and audit APIs.
- Generic distributed runners: runners join by signed handshake,
  advertise capabilities, and execute assigned nodes wherever compute or
  users live.
- Human and agent runtimes: agent nodes run engine adapters; user nodes
  sign task, reply, approval, and review actions through a
  human-interface boundary.

## Federation

- Host Authority identity for graph revisions, trust decisions,
  assignments, and control commands.
- Runner registry with hello, trust, revoke, heartbeat, stale-state, and
  capability records.
- Signed control and observation lanes over Nostr.
- Relay-based coordination that does not require every runner to expose a
  public inbound endpoint.
- Node-to-node A2A messages for tasks, replies, handoff, approvals, and
  conversation lifecycle.
- Projection store built from desired state and signed observations.
- Portable artifact, source-change, and wiki references.

## Operations

- Studio as the visual control room for graph, runners, assignments,
  sessions, approvals, artifacts, memory, recovery, and events.
- CLI as the headless surface for summaries, dry runs, scripting,
  diagnostics, and automation.
- Git-backed artifact workflows: publish, retrieve, preview, diff,
  restore, promote, and review.
- Structured node memory: recent work, stable facts, decisions, open
  questions, next actions, and resolutions.
- Recovery tooling: status, trace, restart, recovery policy, doctor,
  diagnostics, backup, restore, and repair.

## Trust

- Separate identities for Host, runner, user node, node runtime, git
  principal, and operator.
- Graph-shaped authorization through typed edges and policy.
- Bounded secret delivery for model and git credentials.
- Signed events as operational evidence.
- Audit and security surfaces that align with the runtime model instead
  of living in a separate system.
