---
title: "Why federation, not orchestration"
description: "Agent orchestration puts every actor behind one controller. Entangle is a federated runtime for distributed agents and users."
date: 2026-04-26
author: Entangle
tags:
  - Architecture
  - Federation
---

There are many ways to build agent orchestration. You write a master
orchestrator. It owns the graph, dispatches tasks, holds the state, mounts
the runners, signs everything. The user is a row in its database. Every
event passes through it.

That model is easy to start with. It is also a single point of trust, a
single point of identity, a single point of failure, and the reason most
agent stacks feel like one chat with a louder script.

Entangle refuses it.

In a federated runtime, no actor speaks for another. The Host has its own
key and signs control commands. Each runner has its own key and signs
hellos, heartbeats, and observations. Each user has a stable node identity
and signs their own task launches and approvals. Each node runtime has its
own key for A2A messages. Studio is the operator control room, not a
privileged narrator.

The cost is real. Federation means the Host cannot just read a runner's
filesystem to know what happened — it has to consume signed observations
and rebuild a projection. It means user approvals are A2A messages, not
Host mutations. It means the wire is the audit log and you cannot retcon
state by editing a database.

What you get back is everything that matters.

You get runtimes that can live anywhere. A runner on your laptop, a runner
on a colleague's, a runner on a server you do not own, a human-interface
runtime near the person using it. They join by handshake. They prove what
they did. The Host never needs to trust their disk.

You get a security model that is the same shape as the architecture. Edges
are authority. Nothing routes outside the graph. The keys are real, the
signatures are real, and the audit story is not a separate add-on.

You get an end to the "one operator does everything" anti-pattern. When a
human approves a change in a chat-style agent, the operator API forges that
approval on their behalf. In Entangle, the user node signs it. There is
nothing to forge.

You also get one consistent deployment model. The same graph, identity,
assignment, relay, projection, and artifact semantics apply whether the
runtime sits on one workstation or spans machines across a team.

Orchestrators want to be the only voice. Federation accepts that there
are many. The runtime is the chorus.
