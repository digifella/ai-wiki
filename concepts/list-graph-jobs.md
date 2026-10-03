---
type: concept
domain: tools-platforms-infrastructure
group: web-publishing-quartz-websites
tags:
  - "queue-api"
  - "job-types"
  - "stakeholder-graph"
  - "web-publishing"
  - "php"
aliases:
  - "Queue API Job Types"
  - "Stakeholder Graph View"
summary: Records updates to the queue API job types and the addition of the stakeholder graph view.
updated: 2026-10-02
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-16" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# List Graph Jobs

List Graph Jobs refers to updates made to the queue API job management system to support graph-based visualization capabilities. These changes extended the queue API by introducing a new job type that enables stakeholder graph views within the existing queue operations framework. The modifications involved updating core queue administration files to recognize and process this new job category alongside traditional queue job types.

## Technical Implementation

The implementation added support for graph job processing to the queue API's job type registry. This involved modifying the core configuration files to register the new job type identifier, ensuring that the queue dispatcher could correctly route and execute tasks associated with graph data structures. The changes maintained backward compatibility with existing job types while allowing the system to handle the additional metadata required for graph visualization.

## Operational Impact

The introduction of this job type allows stakeholders to view complex relationships and dependencies directly through the queue interface. By integrating graph visualization into the standard queue operations, the system provides a unified view of job status and interdependencies without requiring external tools. This enhancement streamlines monitoring for projects that rely on graph-based data models, reducing the need for separate tracking mechanisms.
