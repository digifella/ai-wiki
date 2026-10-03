---
type: concept
domain: tools-platforms-infrastructure
group: web-publishing-quartz-websites
tags:
  - "queue-api"
  - "stakeholder-graph-view"
  - "market-radar-api"
  - "job-types"
  - "api-actions"
aliases:
  - "stakeholder_graph_view job"
  - "market radar polling"
summary: "Updates include adding stakeholder_graph_view to the queue_api_shared.php job types, modifying market_radar_api.php, and adding 3 new API actions."
updated: 2026-10-02
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-17" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Poll Graph Job

The Poll Graph Job is a specialized job type integrated into the [[concepts/job-queue|queue API]] system, designed to handle asynchronous processing of graph-related data updates. Its primary function is to manage stakeholder graph views and execute associated data transformations within the platform's infrastructure, ensuring that complex graph operations do not block main application threads.

Implementation of this job type involved direct modifications to core API files responsible for job queuing and scheduling. Specifically, the `stakeholder_graph_view` job type was added to `queue_api_shared.php`, where it is configured as a hidden job type to prevent direct manual invocation. These changes were accompanied by updates to `market_radar_api.php` to support the new processing requirements.

To facilitate interaction with this new job type, three new [[concepts/api-actions|API actions]] were introduced. These actions provide the necessary interface for triggering and managing the asynchronous graph updates, completing the integration of the Poll Graph Job into the existing codebase.
