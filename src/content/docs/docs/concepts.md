---
title: Core Concepts
description: The vocabulary used by the Entangle runtime.
---

Entangle is easiest to understand as a federated runtime over a typed
graph. Agents, users, and services are nodes that can live across
machines. The terms below are the operating vocabulary of the system.

## Graph

A graph is the operating model. It describes users, agents, and services
as nodes plus typed edges that define allowed relationships. The Host uses
the graph to validate topology, materialize runtime context, expose
inspection state, and reject handoffs that do not match the configured
routes.

## Node

A node is a runtime participant with an identity. The user is a node. Each
agent is a node. Service-like participants can be nodes when they need
identity, visibility, or policy. Workspace roots, memory, turns, artifacts,
approvals, source changes, and engine status are attached to the node that
produced them.

## Edge

An edge defines an allowed relationship between two nodes. Edges represent
delegation, review, consultation, routing, escalation, or peer
collaboration. Edges are authority. A runner cannot invent a destination
that is not in the graph.

## Host

The Host is the control plane. It owns desired graph state, the trust list
of runners, signed runtime assignments, package admission, and a
projection store built from signed observations. The Host has a Host
Authority key. Move the key, you move the Host.

## Host Authority

A signing key with status, export/import, and rotation semantics. It signs
graph revisions, runner trust decisions, and runtime assignments. Federation
hangs off this primitive: any deployment that has the key is the
authoritative Host for its graph.

## Runner

A runner executes one assigned node. It starts generic — without graph
context — and joins by signed handshake. After the Host trusts it and
sends a signed assignment, the runner runs that node wherever the runner
is placed, signs heartbeats and observations, and emits A2A messages on
the node runtime identity.

## User Node

A graph-actor identity for a human. The user signs their own task launches,
replies, and approvals. A human-interface runtime gives that user a
participant surface, while Studio remains the operator control room.
Nothing in the runtime forges user actions on their behalf.

## AgentPackage

Portable package storage: manifest, prompts, runtime configuration, tool
catalog, assets. Packages are not runtime participants by themselves; they
become live only when bound into a graph as a NodeInstance.

## NodeInstance

The graph-local binding of a package, configuration, and runtime identity.
The same package can be instantiated more than once with different node
ids, routes, policies, or runtime settings. Authoring stays distinct from
operation.

## Message

Messages coordinate work. Coordination uses signed Nostr events on
dedicated rumor kinds, NIP-59 wrapped, so nodes can communicate through
relays instead of requiring direct inbound access to every machine. Three
event domains:

- `entangle.control.v1` — Host control commands.
- `entangle.observe.v1` — runner observations.
- `entangle.a2a.v1` — node-to-node messages (task, result, handoff,
  approval request/response, conversation lifecycle).

## Artifact

Artifacts carry work products. Today, the runtime materializes artifacts
into a git-backed workspace, publishes through a git remote, and retrieves
them by reference. The protocol locator is portable, so additional
backends can sit behind the same shape. Messages coordinate; artifacts
preserve.

## Memory

Each node maintains a structured wiki: deterministic post-turn task pages,
a recent-work summary, and focused registers — working context, stable
facts, decisions, open questions, next actions, resolutions — with explicit
lifecycle. Memory is observable runtime state, not an invisible transcript
appendix.

## Approval

A first-class A2A flow. `approval.request` and `approval.response` are
typed messages. The runner records pending gates, applies decisions,
completes unblocked sessions, and rejects malformed metadata. Approvals
are signed by the user node, not synthesized by an operator surface.

## Policy

What a node may read, write, execute, publish, mutate, and communicate.
Engine action proposals (handoffs, approvals) are validated against
graph-effective routes and node-bound policy before they take effect.

## Trace

Trace and event records explain what happened. They are the operator path
from a vague failure to concrete evidence: runtime health, message type,
turn outcome, approval state, artifact state, source-change candidate,
recovery finding.
