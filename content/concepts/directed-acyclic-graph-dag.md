---
type: concept
domain: tools-platforms
tags:
  - "graph-theory"
  - "data-structures"
  - "build-systems"
  - "data-pipelines"
  - "git-version-control"
  - "topological-ordering"
aliases:
  - "DAG"
  - "Directed Acyclic Graph"
summary: "A directed acyclic graph is a directed graph that contains no directed cycles and allows for a topological ordering of its vertices."
updated: 2026-04-27
group: web-publishing-quartz-websites
---
# Directed Acyclic Graph (DAG)

A **Directed Acyclic Graph (DAG)** is a directed graph containing no directed cycles.

## Core Properties
- **Directed**: Edges have a specific orientation, defining a one-way relationship between vertices.
- **Acyclic**: There are no paths that allow a traversal to start and end at the same vertex.
- **Topological Ordering**: Every DAG allows for a linear ordering of vertices such that for every directed edge $[[concepts/package-manager|uv]]$, vertex $u$ comes before $v$ in the ordering.

## Key Applications
- **Build Systems**: Managing task dependencies in tools like Make or Bazel.
- **Data Pipelines**: Orchestrating [[concepts/complex-workflows|complex workflows]] (e.g., Apache Airflow).
- **[[entities/git|Git Version Control]]**:
    - Utilizes a DAG to represent [[concepts/commits]], Branches, and project history.
    - Commits serve as [[concepts/nodes|nodes]], while parent pointers function as directed edges.
    - This [[concepts/structure|structure]] ensures a traceable, non-circular lineage of changes and enables efficient merging.
    - Reference: 2026 04 27 Gits Underlying Data Structures Commits Branches and DAG

## Source Notes

- 2026-04-14: "But [[concepts/openclaw|OpenClaw is expensive..."]]
- 2026-04-27: Git