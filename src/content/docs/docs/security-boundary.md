---
title: Trust Model
description: How identity, authority, secrets, and audit signal compose from the federated architecture.
---

Entangle's trust model is not a checklist. It is the shape of the
architecture. Each role owns the keys it signs with and nothing else; the
edges decide who may talk to whom; the wire is the audit log.

## Identity is per role

- **Host Authority** signs control commands: graph revisions, runner trust
  decisions, runtime assignments.
- **Runner identity** signs hello, heartbeats, receipts, and observations.
- **User Node identity** signs user task launches, replies, and approvals.
- **Node runtime identity** signs A2A messages emitted by the running node.
- **Git principal** signs or authenticates git operations only.
- **Operator identity** authorizes Host API mutations through the
  bootstrap operator-token boundary; it does not replace User Node
  identity.

No actor speaks for another. The Host does not sign as a user. The user
does not sign as a runner.

## Edges are the authorization model

Typed edges decide who may delegate, review, escalate, or hand off.
Effective edge routes are validated before a runner emits a `task.handoff`.
Authority is graph-shaped; nothing routes outside the graph.

## Secrets stay at the boundary

Secrets should remain outside browser bundles, URLs, non-secret runtime
context, and durable logs.

- Model and git credentials resolve at the Host into effective runtime
  context.
- Secrets reach runners as mounted files where applicable.
- Git transport supports principal bindings without embedding raw token
  material in remote URLs.
- Auth-mode selection is explicit per profile — there is no unsafe
  implicit default.

## The wire is the audit log

Signed Nostr events on dedicated rumor kinds are the operational record.
NIP-59 wrapping protects metadata; signatures bind every event to a
specific signer; dedup keys prevent replay.

Audit signal exposed today:

- Host status and protected mutation events
  (`host.operator_request.completed`).
- Runtime trace events: session, conversation, approval, artifact,
  runner-turn lifecycle.
- Recovery events: history, controller updates.
- Source-mutation evidence with approval scope.

This is operator-grade audit signal. Compliance attestations are a
separate program (see "Capability layers" below).

## Runtime posture

The runtime gives operators clear identity, coordination, and audit
boundaries:

- optional `ENTANGLE_HOST_OPERATOR_TOKEN` bootstrap boundary with
  bearer-token propagation through Host client, CLI, and Studio;
- Host-managed external principals for backend identities (e.g. git);
- runtime isolation between runner processes and node workspaces;
- NIP-59 wrapped Nostr events for A2A coordination;
- audit-style host events for protected mutations;
- runtime trace events for session, turn, approval, artifact, recovery
  evidence.

## Federation layer

The federation layer includes:

- stable User Node identity with signed task / reply / approval messages;
- Host Authority key with status, export/import, rotation;
- signed control / observe event lanes with verification and dedupe;
- runner registry with explicit trust, revoke, and stale states;
- projection store built from signed observations, removing implicit
  Host-reads-runner-filesystem trust.

## Security capabilities

These capabilities sit on the same runtime:

- production identity beyond bootstrap operator-token;
- multi-tenancy primitives;
- audit retention and SIEM-ready export;
- compliance workflows (SOC 2, ISO 27001, HIPAA);
- security review and responsible disclosure.

## Reporting

Email `security@entangle.run` with reproduction steps, affected commits,
impact, and any relevant runtime evidence — events, traces, signed
messages.
