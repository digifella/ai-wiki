---
type: concept
domain: tools-platforms
group: web-publishing-quartz-websites
tags:
  - "network-graph"
  - "cortex"
  - "subgraph-generation"
  - "node-scoring"
  - "web-publishing"
aliases:
  - "Cortex graph job"
  - "stakeholder graph snapshot"
summary: Implementation of a Cortex-side network graph job that generates scoped subgraphs and scores nodes and edges.
updated: 2026-05-01
---
# Graph Snapshot

Graph Snapshot is a Cortex-side [[concepts/job-implementation|job implementation]] that generates [[concepts/network-graph|network graph]] analysis for stakeholder contexts. The system creates [[concepts/scoped-subgraphs|scoped subgraphs]] based on input [[concepts/parameters|parameters]] and applies scoring algorithms to both [[concepts/nodes-and-edges|nodes and edges]] within those subgraphs. This enables quantified relationship analysis and prioritization within defined network boundaries.

## Core Functionality

The Graph Snapshot job is integrated into the stakeholder signal store and processes network data through input-validated stakeholder graph views. It constructs subgraphs according to specified scoping parameters, then applies scoring mechanisms to rate the significance and quality of nodes (entities) and edges ([[concepts/relationships|relationships]]) within each subgraph.

## Output and Signals

The system emits structured signals from its analysis, including warm introduction recommendations and shared affinity [[concepts/learning|learning]] (AL) signals. These outputs provide actionable insights for relationship discovery and stakeholder [[concepts/connection|connection]] mapping based on the scored graph [[concepts/structure|structure]].

## Source Notes
- 2026-04-27: Git