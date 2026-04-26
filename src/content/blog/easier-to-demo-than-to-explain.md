---
title: "Run the graph"
description: "The fastest way to understand Entangle is to boot the runtime and watch work move through the graph."
date: 2026-04-26
author: Entangle
tags:
  - Runtime
  - Operations
---

The shortest path to understanding Entangle is not reading about it. It is
booting the runtime.

Clone the repo. Run `pnpm install`. Start the Federated Preview. Entangle
starts the Host, runner layer, relay, git backend, Studio, and CLI surface.
It applies a graph, assigns nodes to runners, publishes signed Nostr
messages, materializes git-backed artifacts, and exposes the state through
Studio.

That loop is the pitch.

You can describe Entangle in many ways — graph-native runtime, federated
agent organization, signed coordination fabric — and none of those phrases
land until you watch a git commit travel from one node to another because
an edge said it could.

The graph in Studio is the graph the Host validated. The events in the
relay are the events the runners signed. The artifact in Gitea is the
artifact the protocol locator points to.

That is what makes Entangle operational rather than decorative. A graph
edge is a real route. A runner assignment starts a real runtime. An
artifact reference points at real git state.

The whole runtime can fit on one workstation, and the same model can span
machines. Entangle does not change identity, policy, messages, or artifact
semantics just because the parts move apart.

Open it. Watch the work move.
