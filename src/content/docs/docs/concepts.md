---
title: Core Concepts
description: The vocabulary behind Entangle's federated coding-agent runtime.
---

Entangle is easiest to understand as an operating model for a coding-agent
organization. The organization is a graph. Agents, human users, and service
participants are nodes. Edges define allowed collaboration. Runners execute
assigned nodes. Signed events coordinate work. Git-backed references preserve
work products.

The terms below are the vocabulary used across Host, runner, Studio, CLI, and
User Client surfaces.

## Graph

The graph is the live operating model. It describes which actors exist, which
relationships are allowed, which policies apply, and where work may be routed.

The graph is not a canvas beside the runtime. Host validation, runner
assignment, message routing, approval flows, and artifact handoff all depend on
the graph.

## Node

A node is an actor in the graph. It can be a coding agent, a human user, a
service-like participant, or an external gateway.

Nodes own identity, runtime configuration, memory, sessions, turns, approvals,
source-change evidence, and artifacts created while that node is running.

## Edge

An edge is an allowed relationship between two nodes. Edges model delegation,
review, consultation, escalation, handoff, and approval relationships.

Edges are authorization data. A runtime may not invent a destination just
because an engine asked for it. Handoffs and replies must fit the effective
graph route.

## Host

The Host is the authoritative control plane. It owns desired graph state,
package admission, runner trust, runtime assignments, resource catalogs,
projection state, and operator-facing APIs.

The Host is not a graph node and does not speak as a user. Its authority comes
from Host-owned state and Host Authority signing material.

## Host Authority

The Host Authority is the signing identity for graph revisions, runner trust
decisions, assignments, and control commands.

Moving Host authority means moving/importing the key and the Host state needed
to avoid split brain. In the current pre-release runtime, one active Host
Authority instance is the safe assumption.

## Runner

A runner is the process that executes assigned nodes. It starts generic, joins
with identity, advertises capability, receives assignment, and then runs the
assigned node runtime.

Runners may execute agent runtimes, human-interface runtimes, or service
runtimes. They report runtime state back through observations rather than
requiring the Host to read runner-local filesystems.

## User Node

A User Node is the graph identity for a human participant. It is separate from
operator authority.

The same person can use Studio or CLI as an operator while also participating
through one or more User Nodes. User Nodes sign their own task launches,
replies, approvals, and source-review decisions. The User Client is the
participant interface for that running human node.

## AgentPackage

An `AgentPackage` is portable authoring material: manifest, prompts, runtime
configuration, tool catalog, and assets.

Packages are not live actors by themselves. A package becomes operational only
when the graph binds it into a node instance with identity, policy, routes, and
runtime assignment.

## NodeInstance

A `NodeInstance` is a graph-local live binding. It connects package material,
runtime identity, node-specific configuration, policy, routes, workspace state,
and memory.

The same package can be instantiated more than once with different node ids,
roles, peers, policies, or engines.

## Message

Messages coordinate work. They should carry intent, decisions, summaries,
receipts, and references, not full repositories or large artifacts.

Entangle uses three protocol domains:

- `entangle.control.v1` for Host-to-runner control and assignments;
- `entangle.observe.v1` for runner-to-Host observations and receipts;
- `entangle.a2a.v1` for node-to-node work messages such as tasks, replies,
  handoffs, approval requests, approval responses, and conversation lifecycle.

## Artifact

Artifacts preserve work products. Today the primary backend is git: runners
materialize output, commit it, publish it, and expose references that downstream
nodes or users can retrieve and review.

Messages coordinate. Artifacts preserve. Keeping those responsibilities
separate is what lets work remain auditable and recoverable.

## Memory

Memory is node-owned runtime state. It includes task pages, recent work,
stable facts, decisions, open questions, next actions, resolutions, and routing
context.

Memory should be visible and inspectable. It is not an invisible transcript
appendix and not a global scratchpad shared by every actor.

## Approval

Approvals are first-class A2A messages. A runtime can request approval, a User
Node can sign a response, and Host projection can show the resulting state.

Approvals are not supposed to be forged by an admin UI. Studio can expose the
state; the User Node signs the human decision.

## Policy

Policy decides what a node may read, write, execute, publish, mutate, and
communicate. Engine proposals are evaluated against graph-effective routes and
node-bound policy before they become runtime actions.

Policy belongs around the engine. The engine can suggest work; Entangle decides
whether the graph and policy allow it.

## Projection

Projection is the Host-owned read model consumed by Studio and CLI. It combines
desired graph state with runtime observations, receipts, sessions, turns,
approvals, artifacts, memory, source-change evidence, recovery findings, and
events.

Operator surfaces should read projection instead of guessing state from local
files or browser-only assumptions.

## Engine

An engine is the coding brain behind an agent node. OpenCode is the default
target direction, with fake OpenCode, external process, external HTTP, and
OpenAI-compatible test/provider boundaries used for verification and
integration.

Entangle should not become the engine. Entangle wraps engines with graph
identity, policy, memory, artifact handoff, signed communication, and
observability.
