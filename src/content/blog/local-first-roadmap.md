---
title: The local-first release path
description: Entangle Local is the first complete product, built in incremental L-series releases that preserve existing work while making each milestone presentable.
date: 2026-04-25
author: Entangle
tags:
  - Roadmap
  - Local
---

Entangle Local is not a temporary demo. It is the first final product in the
Entangle roadmap.

The release path starts with **L1 Local Operator Baseline**. L1 is useful when a
technical user can clone the public repository, install dependencies, run the
checks, start the local profile, inspect the graph, and understand the product
boundary from public docs. The historical name `R1` is retained only as the
release-control ledger inside the main repo; the public release train uses the
**L1 → L1.5 → L2 → L3 → L4** sequence.

The next releases add utility in the order that compounds the product:

- **L1.5 Local Operator Preview** — demo agent package, a near one-command
  demo, troubleshooting guide, clearer Studio empty/error states.
- **L2 Local Workbench** — package authoring, graph templates, graph diff and
  import/export, Studio session launch, artifact preview, memory workbench.
- **L3 Local Reliability** — `entangle doctor`, repair, backup and restore,
  versioned local state, upgrade notes, diagnostics bundle.
- **L4 Entangle Local GA** — polished installer, regression smoke suite,
  model-provider setup guidance, complete Local non-goals doc.

The same audit loop applies at each step. If the website says something the
code cannot do, either the code is fixed or the claim is removed. If a feature
is partially implemented but not coherent, it stays out of the public release
until it can be explained and validated.

This makes the roadmap slower than a marketing-only launch plan, but it keeps
the product credible. **Entangle Cloud** begins only after Local reaches its
L4 GA gate. **Entangle Enterprise** follows after the managed production core
is mature enough to package for customer-operated environments. Both are
planned with their own release trains (C0–C5 and E0–E4) and both inherit the
same graph model and the same control-plane facade Local proves today.
