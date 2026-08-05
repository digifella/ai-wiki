---
type: concept
domain: tools-platforms-infrastructure
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
updated: 2026-07-15
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-15" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Graph Snapshot

Graph Snapshot is a Cortex-side job implementation that processes network graphs to generate scoped subgraphs with computed node and edge scores. The system accepts network data along with scope parameters—typically defined by stakeholder context, analytical boundaries, or domain-specific criteria—and produces focused network views containing only entities and relationships relevant to the specified scope. This filtering approach enables analysts to work with manageable data subsets rather than complete network representations.

## Scoping and Filtering

The scoping mechanism is central to Graph Snapshot's functionality. Rather than returning entire network graphs, the job applies scope definitions to extract relevant portions of the graph. Scope parameters can be based on entity attributes, relationship types, distance from seed nodes, or custom analytical criteria. This allows different stakeholders to generate views tailored to their specific investigative or analytical needs.

## Node and Edge Scoring

Beyond filtering, Graph Snapshot computes scores for both nodes and edges within the resulting subgraph. These scores quantify properties such as centrality, influence, or relevance based on network structure and the analytical context. Scored nodes and edges provide analysts with a ranked view of network components, helping prioritize further investigation or highlight significant entities and connections within the scoped view.

## Source Notes
- 2026-04-27: Git
