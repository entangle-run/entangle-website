---
title: Status
description: What is implemented, what is automatically verified, and what still needs manual validation.
---

Entangle is pre-release. The runtime shape is implemented enough to run
deterministic proofs, but real-provider and physical multi-machine validation
remain explicit hardening work.

## Implemented

- Host control plane with graph, package, principal, runner, assignment,
  projection, event, session, approval, artifact, memory, recovery, and
  source-change surfaces.
- Generic runner registry with trust/revoke, heartbeat, signed assignments,
  and process-runner smoke coverage.
- User Node runtime with stable identity, signed task launch, reply, approval,
  inbox/outbox, and human-node client surface.
- Engine boundaries for OpenCode-oriented execution, external process,
  external HTTP, and deterministic fake providers.
- Git-backed artifact publish/retrieve flows and source-change handoff records.
- Studio and CLI surfaces over the same Host projection.

## Automatically verified

- `pnpm verify`
- `pnpm ops:check-federated-dev:strict`
- `pnpm ops:smoke-federated-dev:disposable:runtime`
- `pnpm ops:demo-user-node-runtime:fake-opencode`
- `pnpm ops:smoke-federated-process-runner:fake-opencode`
- product naming checks that prevent obsolete local-only framing from becoming
  the public product identity.

## Manual validation

- Real OpenCode connected to real LLM provider credentials.
- A real coding task that produces a commit or PR in an operator-selected
  repository.
- Physical multi-machine proof with Host, runner, User Node, relay, and git
  backend on different hosts.
- Long-running recovery, backup/restore, and audit-retention exercises.
- Production security review and responsible disclosure workflow.

## Product rule

Running multiple services on the same workstation is a valid developer
deployment shape. It must not create local-only runtime assumptions. The same
node assignment, signed communication, artifact, and projection paths should
work when the components live on different machines.
