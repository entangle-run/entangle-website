---
title: "The team is the runtime"
description: "Entangle models a coding organization as a graph of agent nodes, user nodes, runners, policies, messages, memory, and artifacts."
date: 2026-04-26
author: Entangle
tags:
  - Vision
  - Runtime
---

The usual AI assistant interface is a single window. You type, it answers, and
anything more complex is hidden behind the window.

That is convenient for one person and one task. It becomes weak when AI work
starts looking like an organization.

A coding organization needs more than a strong model. It needs roles, memory,
handoffs, review, artifact history, approval, identity, and operating
visibility. It needs to know which actor may talk to which other actor, where a
piece of work lives between turns, who approved a change, and what evidence
exists after the agent is done.

Entangle starts from that shape.

The team is the runtime. Agents, human users, and services are graph nodes.
Edges define allowed collaboration. Runners execute assigned nodes. User Nodes
sign their own replies and approvals. Nostr carries signed coordination events.
Git carries durable artifacts. Studio and CLI read Host-owned projection state.
The User Client is the participant surface for a running human node.

This is not just a multi-agent framework. In many frameworks, the graph is
really an internal plan owned by one orchestrator. In Entangle, the graph is
the operational model. If an edge does not allow the relationship, the runtime
should not route the work. If a User Node did not sign the approval, the system
should not pretend that approval happened.

That discipline is what makes the product interesting. It lets a compact
developer profile and a real distributed deployment share the same semantics.
The implementation can mature without changing the idea: keep identity,
policy, artifacts, memory, and observation outside the LLM engine, then let
strong engines do their work inside that boundary.

Entangle is pre-release, and real-provider validation still matters. But the
reason for the product is already clear: AI coding work is becoming team work,
and team work needs a runtime that can show how the team is shaped.
