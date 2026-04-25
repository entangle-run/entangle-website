---
title: Roadmap
description: Public product roadmap.
---

The Entangle roadmap has three final product lines.

## 1. Entangle Local

The local product comes first and is not throwaway scaffolding.

Planned sequence:

- R1 Local Operator Baseline.
- R1.1 Local Operator Preview.
- R1.2 Local Workbench.
- R1.3 Local Reliability.
- Entangle Local GA.

## 2. Entangle Cloud

Cloud starts only after Entangle Local reaches its GA gate.

Cloud will focus on managed production use: workspaces, production
persistence, identity, authorization, audit, sandboxed execution, artifact
services, search, integrations, and managed reliability.

## 3. Entangle Enterprise

Enterprise starts after the Cloud production core is stable enough to package
for customer-operated environments.

Enterprise will focus on self-hosted production deployment, external identity,
backup and upgrade, observability, audit export, and regulated-environment
operational needs.

## Audit Loop

Every public release must pass the same basic gate:

- code behavior matches the public claim;
- checks and smoke paths pass;
- docs describe the actual product boundary;
- claims are cut or implementation is fixed when audit finds a mismatch.

## Current Status

The current public milestone is R1 Local Operator Baseline. It is a serious
local architecture proof, not a production multi-tenant claim.
