---
title: The local-first release path
description: Entangle Local is the first complete product, with incremental releases that preserve existing work while making each milestone presentable.
date: 2026-04-25
author: Entangle
tags:
  - Roadmap
  - Local
---

Entangle Local is not a temporary demo. It is the first final product in the
Entangle roadmap.

The release path starts with R1 Local Operator Baseline. R1 is useful when a
technical user can clone the public repository, install dependencies, run the
checks, start the local profile, inspect the graph, and understand the product
boundary from public docs.

The next releases should add utility in the order that compounds the product:
graph inspection and diagnostics first, then richer workbench flows, then
reliability and repeated-use hardening.

The same audit loop applies at each step. If the website says something the
code cannot do, either the code is fixed or the claim is removed. If a feature
is partially implemented but not coherent, it stays out of the public release
until it can be explained and validated.

This makes the roadmap slower than a marketing-only launch plan, but it keeps
the product credible. Entangle Cloud begins only after Local reaches its own
gate. Entangle Enterprise follows after the managed production core is mature
enough to package for customer-operated environments.
