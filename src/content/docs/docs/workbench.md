---
title: Operator Workbench
description: Studio and CLI as two surfaces over the same Host-owned runtime state.
---

Entangle ships an operator workbench, not just a runtime process. The
workbench has two surfaces:

- Studio for visual inspection and operation;
- CLI for headless, repeatable, scriptable operation.

Both consume the same Host-owned state. Neither owns truth.

## What Studio is for

Use Studio when you need context across several runtime objects at once:

- active graph topology and revisions;
- node and edge state;
- package-source inventory;
- runtime state, reconciliation, and recovery;
- session timelines and per-node session detail;
- runner turns with engine outcomes and memory-synthesis status;
- approval records and operator decisions;
- artifact list, detail, preview, history, diff, restore, promotion;
- memory pages and focused registers;
- source-change candidate evidence with diff and file preview;
- live host events and runtime trace.

Studio shows User Node identity, runtime health, active conversations,
pending approvals, and links into the participant surface. The user-facing
conversation and approval workflow belongs to the User Client exposed by a
human-interface runtime.

## What CLI is for

Use CLI when the workflow should be repeatable, terminal-native, or
suitable for automation:

```sh
pnpm --filter @entangle/cli dev host status --summary
pnpm --filter @entangle/cli dev host graph get --summary
pnpm --filter @entangle/cli dev host sessions list --summary
pnpm --filter @entangle/cli dev host runtimes list --summary
pnpm --filter @entangle/cli dev host events list --runtime-trace-only --summary
```

CLI is strongest for validation, import/export, dry runs, summaries, smoke
checks, and scripted inspection.

## Workbench objects

The workbench is organized around runtime objects:

- packages define portable agent assets;
- graph revisions capture topology;
- nodes bind packages into a graph;
- edges define allowed relationships;
- runtimes execute assigned nodes;
- sessions organize work;
- turns record runner execution;
- approvals pause policy-sensitive actions;
- artifacts carry durable work products;
- memory keeps node context visible;
- source-change candidates expose workspace changes before acceptance;
- events and traces explain what happened.

## Shared vocabulary

Studio and CLI share presentation helpers and host-client contracts. A
session status, runtime health finding, artifact lifecycle, approval
state, memory page, or source-change candidate means the same thing in
both places. A visual investigation can move into a terminal one without
translating concepts by hand.

## Operator discipline

- Inspect through Host APIs.
- Mutate graph and runtime state through Host-owned routes.
- Keep runner-owned files behind Host read models — the projection store
  is the truth.
- Use dry runs for dangerous mutations where available.
- Use status, trace, recovery, and smoke evidence before resetting state.
- Use destructive volume reset only when the active profile should be wiped.
