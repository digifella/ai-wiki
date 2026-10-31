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
updated: 2026-10-11
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-17" }
---
<!-- domain-nav -->
> domain-badge slug=tools-platforms-infrastructure name=Tools, Platforms & Infrastructure

# Poll Graph Job

The Poll Graph Job is a specialized asynchronous job type within the `tools-platforms-infrastructure` domain, designed to process graph-related data updates without blocking main application threads. By offloading complex graph operations to the queue API system, it ensures system responsiveness during heavy data processing periods. This architecture allows the platform to manage stakeholder graph views and execute associated data transformations efficiently in the background.

Recent infrastructure updates have expanded the job's capabilities by adding `stakeholder_graph_view` to the `queue_api_shared.php` job types. These changes are accompanied by modifications to `market_radar_api.php` and the introduction of three new API actions defined in the `concepts/api-actions` documentation. These enhancements streamline the integration of graph data processing into the broader queue management system.
