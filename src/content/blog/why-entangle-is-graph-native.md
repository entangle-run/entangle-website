---
title: Why Entangle starts with a graph-native runtime
description: The core Entangle model treats users, agents, edges, messages, approvals, and artifacts as runtime objects instead of hiding them inside a prompt chain.
date: 2026-04-25
author: Entangle
tags:
  - Architecture
  - Product
---

Most AI tools still start from the shape of a chat product. That is useful for
single-user interaction, but it becomes limiting once the work looks like an
organization: multiple agents, routing, review, handoff, shared context,
approval, and repair.

Entangle starts from a different primitive. The runtime is a graph. Users,
agents, services, and execution surfaces are nodes. Edges define the allowed
relationships between those nodes. Messages coordinate work. Artifacts carry
the work product.

That distinction matters because inspection becomes part of the product model.
An operator should be able to ask what ran, which node owned the work, which
edge allowed the handoff, what artifact moved, and where review occurred.

The first product is Entangle Local because this model has to be concrete
before it becomes hosted. Local makes the topology visible on one machine:
host, runners, Studio, CLI, relay, and artifact backend. The near-term goal is
not to claim a complete cloud platform. It is to prove the runtime boundary
with enough rigor that Cloud and Enterprise can inherit a coherent foundation.

The public website and docs now reflect that boundary. The roadmap keeps Local,
Cloud, and Enterprise as separate final products, built in order.
