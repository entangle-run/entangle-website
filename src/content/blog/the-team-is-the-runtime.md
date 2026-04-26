---
title: "The team is the runtime"
description: "Entangle turns distributed agents, users, services, runners, messages, approvals, and artifacts into one governed federation."
date: 2026-04-26
author: Entangle
tags:
  - Vision
  - Runtime
---

For most people, an AI assistant is still a single window. You type, it
answers. If subagents run somewhere underneath, you do not see them. The
window becomes the interface and the interface becomes the limit.

That model is fine for one user, one task, one turn. It is not enough for
an organization.

The bottleneck is already moving. As models get better at reading code,
running tools, and reasoning over long horizons, the question is no longer
"can the model do the work" but "how many agents can do work in parallel,
who is allowed to talk to whom, where does the work live between turns,
and how does a human stay inside the loop without becoming the bottleneck
themselves".

That is not a chat-window problem. It is not only an orchestration problem
either. It is a federation problem.

Entangle starts from the answer: the team is the runtime. Agents and humans
are nodes on a graph, and those nodes can live on different machines.
Edges are typed authority — who may delegate to whom, who may review, who
may escalate. Messages between nodes are signed and routed through Nostr.
Work products move as git refs. Memory is structured and observable.
Approvals are signed by the user, not forged by an operator surface.

Studio is the control room for this operating model. You can open the
graph, inspect distributed runner placement, review sessions and turns, follow
artifacts, trace approvals, and see what every node is doing.

The substrate is deliberately old and boring. Nostr for signed events, git
for artifacts, a typed graph schema. The same primitives that already run
the open web. Federated by construction, not by retrofit.

Entangle is built for the question that matters once AI work becomes a team
activity: how is the organization shaped, who is allowed to act, where does
the work live, and can operators see it run?
