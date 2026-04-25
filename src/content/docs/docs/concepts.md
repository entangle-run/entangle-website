---
title: Core Concepts
description: The public conceptual model for Entangle.
---

## Graph

An Entangle graph describes the organization topology. It contains users,
agents, and services as nodes, with typed edges that define allowed
relationships.

## Node

A node is a first-class participant. The user is a node. Each agent is also a
node. Runtime behavior is attached to nodes instead of hidden inside one
central orchestrator.

## Edge

Edges define how nodes can relate to each other: delegation, review,
consultation, routing, escalation, or peer collaboration.

## Host

The host is the local control plane. It owns graph state, package admission,
runtime materialization, inspection APIs, and reconciliation.

## Runner

A runner executes one active node. Entangle keeps the runner lifecycle explicit
so node execution can be inspected, repaired, and governed.

## Message

Messages coordinate work between nodes. In the current local profile, Entangle
uses Nostr-signed transport semantics for coordination.

## Artifact

Artifacts carry work. Local Entangle uses git-backed artifact materialization
and handoff so work products can move between nodes without relying only on
chat transcript text.

## Studio

Studio is the visual operator surface. It reads host truth and sends mutations
through host APIs; it does not own control-plane state.
