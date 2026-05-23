---
type: concept
domain: tools-platforms
tags:
  - "graph-generation"
  - "cortex-implementation"
  - "node-scoring"
  - "subgraph-scoping"
  - "stakeholder-views"
  - "network-visualization"
aliases:
  - "Cortex network graph job"
  - "stakeholder graph snapshot"
summary: Implementation of a Cortex-side network graph job that generates scoped subgraphs and scores nodes and edges.
updated: 2026-05-23
group: web-publishing-quartz-websites
---
# Network Graph

Network Graph is a Cortex-side job responsible for generating and analyzing network structures within the platform. The system constructs [[concepts/scoped-subgraphs|scoped subgraphs]] based on input [[concepts/parameters|parameters]] and applies scoring mechanisms to both [[concepts/nodes-and-edges|nodes and edges]] to quantify [[concepts/relationships|relationships]] and relative importance within the network.

## Implementation

The Network Graph [[concepts/adoption|implementation]] integrates with the Cortex pipeline through [[concepts/input-validation|input validation]] in handoff_contract.py and [[concepts/coverage-testing|graph snapshot generation]] in stakeholder_signal_store.py. The job builds scoped subgraphs that are bounded by specified parameters, allowing for focused analysis of network segments rather than requiring full-graph computation.

## Scoring and Output

The system applies scoring algorithms to evaluate both [[concepts/nodes|nodes]] and edges, producing quantified metrics for network elements. [[concepts/output|Output]] includes warm-intro and shared-al classifications, which categorize relationship types and [[concepts/connection|connection]] strengths within the generated subgraphs.
## Source Notes
- 2026-04-20: [[lab-notes/2026-04-20-Knowledge-Graphs-Advancing-Karpathys-LLM-Wiki-for-Deeper-Insights|Knowledge Graphs Advancing Karpathys LLM Wiki for Deeper Insights]] · [▶ source](https://www.youtube.com/watch?v=yYSTsKo8moU)