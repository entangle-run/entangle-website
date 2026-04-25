---
title: Entangle Local
description: The first Entangle product line.
---

Entangle Local is the first final product line.

It is a local graph-native operator runtime for builders who want to create,
run, inspect, and debug AI organizations on their own machine.

## What R1 Includes

R1 is the Local Operator Baseline. It should provide a coherent public product
surface around the architecture that already exists.

- `entangle-host` control plane.
- One `entangle-runner` per active node.
- Local Nostr relay through `strfry`.
- Local Gitea-backed artifact handoff.
- Studio for visual operator inspection.
- CLI for headless inspection and local workflows.
- Package scaffold utilities.
- Local preflight and smoke commands.
- Public website, docs, and honest release boundaries.

## Incremental Local Releases

After R1, the local product should improve in small public increments:

- R1.1 Local Operator Preview: better graph inspection, diagnostics, package
  admission, and operator workflow polish.
- R1.2 Local Workbench: richer graph editing, templates, task sessions,
  artifact navigation, replay surfaces, and recovery flows.
- R1.3 Local Reliability: installer path, release gates, test hardening,
  destructive-action guardrails, and repeated-use documentation.
- Entangle Local GA: a finished local product for serious individual and team
  evaluation.

## What It Does Not Claim Yet

Entangle Local is not currently:

- a production multi-tenant SaaS;
- a production identity and RBAC system;
- an enterprise Kubernetes distribution;
- a compliance-ready platform;
- a billing or customer onboarding system.

## Release Gate

R1 is presentable when the public website, docs, repository checks, local
preflight, smoke path, and product claims all agree with the actual codebase.
