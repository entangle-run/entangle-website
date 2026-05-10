---
title: "Run the proof"
description: "The clearest way to understand Entangle is to run the deterministic proof and inspect the graph, runners, user node, messages, and artifacts."
date: 2026-04-26
author: Entangle
tags:
  - Runtime
  - Operations
---

Entangle is easier to understand once you stop treating it as a diagram.

The useful first experience is not a polished marketing tour. It is running
the deterministic developer proof and watching the pieces move: Host state,
runner registration, runtime assignment, a User Node task, a fake OpenCode
agent turn, signed coordination, projection, and git-backed artifacts.

That proof intentionally avoids live LLM credentials. It is not trying to show
model quality. It is trying to show the runtime boundary: a human node can
initiate work, a runner can execute an assigned agent node, the system can
record what happened, and the result can be inspected without pretending the
whole organization is one chat session.

That distinction matters.

Most agent demos show a window where an assistant appears to do work. Entangle
shows the operating model around the work. Which node spoke? Which runner ran
it? Which edge allowed the route? Which artifact was produced? Which approval
or source review is waiting? Which surface is acting as operator, and which
surface is acting as a user node?

Those questions are the product.

A compact developer deployment can put Host, relay, runners, Studio, CLI, git
service, and User Client on one machine. That is a convenience, not a product
identity. The runtime should still behave as if the pieces could move apart:
messages go through protocol surfaces, artifacts move by references, and
operator views read Host projection.

The next proof is manual and more expensive: connect real OpenCode/provider
credentials, run a real coding task, publish real source changes, and exercise
the same flow across different machines.

But the deterministic proof is already enough to reveal the shape of the
system. Entangle is not a wrapper around an assistant. It is the control plane
and collaboration substrate around a graph of coding actors.
