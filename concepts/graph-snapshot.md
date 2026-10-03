---
type: concept
domain: tools-platforms-infrastructure
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
updated: 2026-10-03
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-15" }
group: web-publishing-quartz-websites
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Graph Snapshot

Graph Snapshot is a Cortex-side [[concepts/job-implementation|job implementation]] designed to process network graphs by generating [[concepts/scoped-subgraphs|scoped subgraphs]] with computed [[entities/nodejs|node]] and edge scores. The system accepts raw network data alongside specific scope parameters, which are typically defined by stakeholder context, analytical boundaries, or domain-specific criteria. By applying these filters, the job produces focused network views that contain only the [[concepts/nodes|entities]] and [[concepts/relationships|relationships]] relevant to the specified scope, allowing analysts to work with manageable data subsets rather than complete network representations.

The scoping mechanism serves as the primary method for filtering the input graph data. It evaluates the incoming [[concepts/neural-network-architecture|network structure]] against the provided parameters to determine which [[concepts/nodes-and-edges|nodes and edges]] fall within the defined analytical boundaries. This process ensures that the resulting subgraph is strictly limited to the context required for the analysis, effectively reducing complexity and noise.

Following the filtering [[concepts/phase|phase]], the system computes scores for the remaining nodes and edges within the scoped subgraph. These scores provide a quantitative measure of relevance or [[concepts/value|importance]] for each element in the filtered view. The output is a structured subgraph that retains the topological relationships of the original data while highlighting the most significant components according to the defined scope and scoring [[concepts/algorithms|algorithms]].
## Source Notes
- 2026-04-27: Git
