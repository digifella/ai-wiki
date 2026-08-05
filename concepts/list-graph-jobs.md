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
updated: 2026-07-16
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-16" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# List Graph Jobs

List Graph Jobs refers to updates made to the queue API job management system to support graph-based visualization capabilities. These changes extended the queue API by introducing a new job type that enables stakeholder graph views within the existing queue operations framework. The modifications involved updating core queue administration files to recognize and process this new job category alongside traditional queue job types.

## Technical Implementation

The implementation added support for graph job processing to the queue API's job type registry. This involved modifying queue administration components to handle the new graph visualization job type, allowing the system to queue, track, and execute graph-related operations. The changes maintained compatibility with existing job types while establishing the infrastructure needed for graph-based stakeholder views.

## Purpose and Use Cases

Graph jobs enable users to generate and update visual representations of stakeholder relationships and dependencies within the queue system. By integrating graph visualization as a first-class job type, the system can process complex graph computations asynchronously through the standard queue infrastructure rather than requiring separate visualization mechanisms.
