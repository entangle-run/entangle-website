---
title: Operator Workbench
description: Studio, CLI, and User Client roles in the Entangle operating model.
---

Entangle has three human-facing surfaces, each with a different authority
boundary:

- Studio is the operator control room.
- CLI is the headless operator and participant automation surface.
- User Client is the participant interface for a running User Node.

They should not collapse into one role. The distinction is important because
operators configure and supervise the graph, while User Nodes participate in
the graph and sign their own actions.

## Studio

Studio is for operators who need to see the system as a whole. It reads
Host-owned projection state and exposes the current operating picture:

- graph topology, nodes, edges, and revisions;
- package-source inventory and package admission state;
- runner registry, trust, capability, heartbeat, and assignment state;
- runtime desired/observed state and recovery information;
- sessions, conversations, turns, and engine outcomes;
- approval records and source-review evidence;
- artifact list/detail, preview, history, diff, restore, and promotion;
- memory pages, focused registers, and recent work;
- source-change candidates with diff and file preview;
- host events, runtime trace, integrity signal, and diagnostics.

Studio may prepare operator mutations through Host APIs. It should not directly
command runners and should not sign user decisions.

## User Client

User Client is the interface for a human node while that node is running. A
single deployment may have multiple human nodes, each with its own identity,
inbox, conversations, approvals, and visible artifacts.

A User Client is for:

- reading the User Node inbox;
- replying to connected agents;
- approving or rejecting requests;
- reviewing source-change candidates;
- requesting visible artifact, wiki, or source-history actions;
- seeing participant-scoped command receipts;
- inspecting the workload of that User Node.

This is not the admin console. It is the participant surface for an actor in
the graph.

## CLI

CLI provides repeatable access to the same Host truth. It is useful for smoke
tests, scripted operations, terminal-first review, diagnostics, and automation.

Operator examples:

```sh
pnpm --filter @entangle/cli dev host status --summary
pnpm --filter @entangle/cli dev host graph get --summary
pnpm --filter @entangle/cli dev host runners list --summary
pnpm --filter @entangle/cli dev host sessions list --summary
pnpm --filter @entangle/cli dev host events list --runtime-trace-only --summary
```

Participant examples:

```sh
pnpm --filter @entangle/cli dev inbox list --user-node reviewer
pnpm --filter @entangle/cli dev inbox show <conversation-id> --user-node reviewer
pnpm --filter @entangle/cli dev inbox approvals --user-node reviewer
pnpm --filter @entangle/cli dev user-nodes clients --node reviewer --health
```

The exact command surface will continue to evolve, but the rule should remain:
CLI reads and mutates through Host-owned boundaries, not by poking runner-local
state.

## Shared Model

Studio, CLI, and User Client should speak the same vocabulary:

- a runner means the same thing everywhere;
- a runtime assignment has the same id and status everywhere;
- a session and turn have the same identity everywhere;
- an approval request has the same metadata everywhere;
- an artifact reference points to the same durable work product everywhere;
- a source-change candidate has the same evidence everywhere.

That shared vocabulary matters more than visual polish. It lets a user start
in Studio, investigate with CLI, and continue through a User Client without
translating concepts by hand.

## Current Verification Boundary

The public automated proof uses deterministic fake provider paths. That is
intentional: it validates Host, runner, User Node, relay, projection, artifact,
and UI plumbing without relying on paid model APIs.

Real OpenCode/provider credentials, real coding tasks, real commits, and real
pull requests are manual validation until the provider hardening pass is
complete.

## Operator Discipline

- Inspect state through Host APIs and Host projection.
- Keep Studio as the admin surface and User Client as the graph participant
  surface.
- Treat signed User Node actions as separate from operator mutations.
- Prefer deterministic smoke evidence before manual cleanup.
- Do not interpret same-machine development as a local-only architecture.
- Use destructive resets only when you intentionally want to wipe the active
  developer profile.
