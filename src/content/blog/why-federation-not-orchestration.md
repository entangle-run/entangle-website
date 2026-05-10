---
title: "Why federation, not orchestration"
description: "Entangle keeps Host, runners, user nodes, agent runtimes, and artifacts on explicit boundaries instead of hiding every actor behind one controller."
date: 2026-04-26
author: Entangle
tags:
  - Architecture
  - Federation
---

The easiest agent system to build is an orchestrator.

It owns the graph, holds the state, dispatches tasks, reads every workspace,
approves every action, signs every event, and shows the user one simplified
interface. That can work for a prototype. It also turns the organization into
one privileged process.

Entangle aims at a different shape.

In a federated runtime, each role has its own boundary. The Host owns desired
graph state and assignment authority. Runners execute nodes and report
observations. User Nodes sign human intent. Agent runtimes send node-to-node
messages. Git principals handle artifact publication. Studio and CLI operate
through Host APIs instead of becoming hidden sources of truth.

This has a cost. The Host cannot rely on reading runner-local files to know
what happened. A user approval cannot be faked as an admin mutation. A runner
must prove its state through observations. Work products need durable artifact
references instead of large message blobs. The system has to keep projection,
identity, and policy clean.

The payoff is that the deployment shape can change without changing the
product model.

A developer can run multiple nodes on one machine with a local relay and local
git service. Later, Host can sit on one machine, an agent runner on another, a
human-interface runtime somewhere else, and a shared relay and git backend in
between. The same ideas still apply: graph routes, signed coordination,
runner-owned execution, User Node signatures, and artifact references.

That is the difference between federation and orchestration. Orchestration
often hides actors behind a central brain. Federation lets actors remain
separate while still being governed by one graph.

Entangle should use the best coding engines available. OpenCode, Claude Code,
Codex, Aider, or future engines can all sit behind adapters. But the product
should not become any one engine. Its job is to make those engines into
observable, policy-bound, artifact-producing participants in a coding
organization.
